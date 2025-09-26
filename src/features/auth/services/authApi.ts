import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/shared/api/baseQuery'
import {
  AuthResponse,
  LoginRequest,
  SignupOtpRequest,
  SignupRequest,
} from '../types/auth'
import { API_ENDPOINTS } from '@/shared/constants/apiEndpoint'
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignupRequest>({
      query: (data) => ({
        url: API_ENDPOINTS.AUTH.SIGNUP,
        method: 'POST',
        body: data,
      }),
    }),
    signupOtp: builder.mutation<void, SignupRequest>({
      query: (data) => ({
        url: API_ENDPOINTS.AUTH.SIGNUP,
        method: 'POST',
        body: data,
      }),
    }),
      verifyOtp: builder.mutation<AuthResponse, SignupOtpRequest>({
      query: (data) => ({
        url: API_ENDPOINTS.AUTH.VERIFY_OTP,
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (data) => ({
        url: API_ENDPOINTS.AUTH.LOGIN,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {
  useSignupMutation,
  useLoginMutation,
  useVerifyOtpMutation,
} = authApi
