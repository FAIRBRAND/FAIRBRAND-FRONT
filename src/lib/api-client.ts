import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type {
  AuthTokens,
  LoginRequest,
  RegisterRequest,
  User,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  LogoutRequest,
  ApiResponse
} from '@/types/springboot-api';

// Configuration de base de l'API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

// Classe pour gérer l'API client
class ApiClient {
  private axiosInstance: AxiosInstance;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Intercepteur pour ajouter le token d'authentification
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers.Authorization = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Intercepteur pour gérer le refresh automatique des tokens
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            await this.refreshAccessToken();
            if (this.accessToken) {
              originalRequest.headers.Authorization = `Bearer ${this.accessToken}`;
              return this.axiosInstance(originalRequest);
            }
          } catch (refreshError) {
            // Si le refresh échoue, déconnecter l'utilisateur
            this.logout();
            throw refreshError;
          }
        }

        return Promise.reject(error);
      }
    );

    // Récupérer les tokens depuis le localStorage au démarrage
    this.loadTokensFromStorage();
  }

  // Gestion des tokens
  private loadTokensFromStorage(): void {
    if (typeof window !== 'undefined') {
      this.accessToken = localStorage.getItem('accessToken');
      this.refreshToken = localStorage.getItem('refreshToken');
    }
  }

  private saveTokensToStorage(tokens: AuthTokens): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('accessToken', tokens.accessToken);
      localStorage.setItem('refreshToken', tokens.refreshToken);
      localStorage.setItem('tokenExpiry', (Date.now() + tokens.expiresIn * 1000).toString());
    }
  }

  private clearTokensFromStorage(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('tokenExpiry');
    }
  }

  // Méthodes d'authentification
  async login(credentials: LoginRequest): Promise<{ user: User; tokens: AuthTokens }> {
    try {
      const response = await this.axiosInstance.post('/api/auth/login', credentials);
      const { user, tokens } = response.data;
      
      this.accessToken = tokens.accessToken;
      this.refreshToken = tokens.refreshToken;
      this.saveTokensToStorage(tokens);
      
      return { user, tokens };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async register(data: RegisterRequest): Promise<{ user: User; tokens: AuthTokens }> {
    try {
      const response = await this.axiosInstance.post('/api/auth/register', data);
      const { user, tokens } = response.data;
      
      this.accessToken = tokens.accessToken;
      this.refreshToken = tokens.refreshToken;
      this.saveTokensToStorage(tokens);
      
      return { user, tokens };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async refreshAccessToken(): Promise<void> {
    if (!this.refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const response = await this.axiosInstance.post('/api/auth/refresh', {
        refreshToken: this.refreshToken,
      });
      
      const { accessToken, expiresIn } = response.data;
      this.accessToken = accessToken;
      
      // Mettre à jour le token dans le localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('tokenExpiry', (Date.now() + expiresIn * 1000).toString());
      }
    } catch (error) {
      this.clearTokensFromStorage();
      throw this.handleError(error);
    }
  }

  async forgotPassword(email: string): Promise<void> {
    try {
      await this.axiosInstance.post('/api/auth/forgot-password', { email });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    try {
      await this.axiosInstance.post('/api/auth/reset-password', {
        token,
        newPassword,
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async logout(): Promise<void> {
    try {
      if (this.refreshToken) {
        await this.axiosInstance.post('/api/auth/logout', {
          refreshToken: this.refreshToken,
        });
      }
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      this.accessToken = null;
      this.refreshToken = null;
      this.clearTokensFromStorage();
    }
  }

  // Méthodes génériques pour les appels API
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }

  // Getters pour l'état de l'authentification
  get isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  get getAccessToken(): string | null {
    return this.accessToken;
  }

  // Gestion des erreurs
  private handleError(error: any): Error {
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 400:
          return new Error(data.message || 'Données invalides');
        case 401:
          return new Error('Non autorisé');
        case 403:
          return new Error('Accès interdit');
        case 404:
          return new Error('Ressource non trouvée');
        case 500:
          return new Error('Erreur serveur');
        default:
          return new Error(data.message || 'Une erreur est survenue');
      }
    } else if (error.request) {
      return new Error('Erreur de connexion au serveur');
    } else {
      return new Error(error.message || 'Une erreur est survenue');
    }
  }
}

// Instance singleton
export const apiClient = new ApiClient();

// Export des types
export type { AxiosRequestConfig, AxiosResponse };
