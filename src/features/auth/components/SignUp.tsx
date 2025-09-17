'use client'

import React from 'react'
import toast from 'react-hot-toast'
import { useState } from 'react'
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Phone,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { useTranslations } from 'next-intl'
import { useDispatch } from 'react-redux'
import { setToken } from '@/store/slice/slice'
import { redirectAccordingToRole } from '@/i18n/routes'
import { useRouter } from 'next/navigation'
import { SignupFormData } from '../schema/signupSchema'
import { FormProvider } from 'react-hook-form'
import { useSignupForm } from '../hooks/useSignup'

const SignUp = () => {
  const t = useTranslations('auth.signup')
  const toastMessage = useTranslations('toast')
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const { methods, signup, signupState } = useSignupForm()
  const [authMethod, setAuthMethod] = useState<'form' | 'google' | null>(null)
  const router = useRouter()

  const handleNext = async () => {
    let fieldsToValidate: (keyof SignupFormData)[] = []

    if (currentStep === 1) {
      fieldsToValidate = ['firstname', 'lastname']
    } else if (currentStep === 2) {
      fieldsToValidate = ['email', 'password']
    }

    const isValid = await methods.trigger(fieldsToValidate)
    if (!isValid) return

    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    } else {
      methods.handleSubmit(onSubmit)()
    }
  }

  const onSubmit = async (data: SignupFormData) => {
    setAuthMethod('form')

    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
      return
    }

    try {
      const res = await signup(data).unwrap()
      dispatch(setToken(res.token))
      redirectAccordingToRole(res.token, router)
      if (authMethod === 'google') {
        toast.success(toastMessage('successSignupGoogle'))
      } else {
        toast.success(toastMessage('successSignup'))
      }
    } catch (err) {
      toast.error(toastMessage('errorSignup'))
      console.error(err)
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {t('title')}
        </h2>
        <p className="text-muted-foreground text-sm">{t('subtitle')}</p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              currentStep >= 1
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            1
          </div>
          <div
            className={`w-8 h-1 rounded-full transition-colors ${currentStep >= 2 ? 'bg-primary' : 'bg-muted'}`}
          ></div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              currentStep >= 2
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            2
          </div>
        </div>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          {currentStep === 1 && (
            <>
              {/* Step 1: Personal Info */}
              <div className="space-y-4">
                {/* Firstname Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="firstname"
                    className="text-sm font-medium text-foreground"
                  >
                    {t('firstname')}
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="firstname"
                      type="firstname"
                      placeholder="John"
                      {...methods.register('firstname')}
                      className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                {/* Lastname Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="lastname"
                    className="text-sm font-medium text-foreground"
                  >
                    {t('phone')}
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="lastname"
                      type="text"
                      placeholder="Doe"
                      {...methods.register('lastname')}
                      className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  {t('fullName')}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Votre nom complet"
                    {...methods.register('email')}
                    className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-foreground"
                  >
                    {t('password')}
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      {...methods.register('password')}
                      className="pl-10 pr-10 h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-4">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex-1 h-12 bg-background/50 border-border/50 hover:bg-muted/50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('back')}
              </Button>
            )}
            <Button
              type="submit"
              onClick={handleNext}
              className={`h-12 btn-premium text-base font-semibold ${currentStep === 1 ? 'w-full' : 'flex-1'}`}
              disabled={signupState.isLoading}
            >
              {signupState.isLoading && currentStep === 3 && (
                <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
              )}
              {currentStep === 3 ? (
                t('createAccount')
              ) : (
                <>
                  {t('next')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default SignUp
