export interface AuthResponse {
  token: string
  roles: ('ROLE_ADMIN' | 'ROLE_CLIENT' | 'ROLE_USER')[]
}

export interface SignupRequest {
  firstname: string
  lastname: string
  email: string
  password: string
}

export interface SignupOtpRequest {
  email: string
    otp: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface DecodedToken {
  email: string
  roles: string[]
  exp: number
  sub: string
}
