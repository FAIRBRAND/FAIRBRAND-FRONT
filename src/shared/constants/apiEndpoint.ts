//list api
export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: '/coltip/api/signup/otp',
    VERIFY_OTP: '/coltip/api/signup/verifyOtp',
    LOGIN: '/coltip/api/auth/login',
    FORGOT_PASSWORD: '/reset-password',
    RESET_PASSWORD: (token: string) => `/reset-password/reset/${token}`,
  }
}