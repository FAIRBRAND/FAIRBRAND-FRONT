// Types pour les réponses des APIs SpringBoot

// Réponse d'authentification
export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

// Utilisateur
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  // Ajoutez d'autres champs selon vos besoins
  createdAt?: string;
  updatedAt?: string;
  isActive?: boolean;
}

// Tokens d'authentification
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType?: string;
}

// Données de connexion
export interface LoginRequest {
  email: string;
  password: string;
}

// Données d'inscription
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Données de refresh token
export interface RefreshTokenRequest {
  refreshToken: string;
}

// Réponse de refresh token
export interface RefreshTokenResponse {
  accessToken: string;
  expiresIn: number;
}

// Données de mot de passe oublié
export interface ForgotPasswordRequest {
  email: string;
}

// Données de réinitialisation de mot de passe
export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

// Données de déconnexion
export interface LogoutRequest {
  refreshToken: string;
}

// Réponse d'erreur standard
export interface ApiError {
  message: string;
  code?: string;
  details?: any;
  timestamp?: string;
}

// Réponse de succès standard
export interface ApiSuccess<T = any> {
  message: string;
  data?: T;
  timestamp?: string;
}

// Pagination
export interface PaginationParams {
  page?: number;
  size?: number;
  sort?: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}

// Types pour les rendez-vous (selon spec-appointment.yml)
export interface Appointment {
  id: number;
  title: string;
  description: string;
  startAt: string;
  endAt: string;
  userId: number;
  status: AppointmentStatus;
  createdAt: string;
}

export type AppointmentStatus = 'VERIFY' | 'BOOKED' | 'CANCELED';

export interface AppointmentPayload {
  title: string;
  description: string;
  startAt: string;
  endAt: string;
}

export interface VerificationPayload {
  appointmentId: number;
}

export interface VerifiedAppointment {
  id: number;
  title: string;
  description: string;
  startAt: string;
  endAt: string;
  status: AppointmentStatus;
  createdAt: string;
}

export interface AppointmentInValidation {
  id: number;
  title: string;
  description: string;
  startAt: string;
  endAt: string;
  status: AppointmentStatus;
  createdAt: string;
}

// Types pour les appels API génériques
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

// Headers d'authentification
export interface AuthHeaders {
  Authorization: string;
  'Content-Type': string;
}

// Configuration de l'API
export interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}
