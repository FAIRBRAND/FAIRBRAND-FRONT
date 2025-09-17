//list api
export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: '/signup/otp',
    LOGIN: '/auth/login',
    FORGOT_PASSWORD: '/reset-password',
    RESET_PASSWORD: (token: string) => `/reset-password/reset/${token}`,
  }
}