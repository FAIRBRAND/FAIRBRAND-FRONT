"use client";

import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  ArrowRight,
  ArrowLeft,
  PenIcon,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useTranslations } from "next-intl";
//import { useDispatch } from "react-redux";
//import { setToken } from "@/store/slice/slice";
//import { redirectAccordingToRole } from '@/i18n/routes'
import { useRouter } from "next/navigation";
import { SignupFormData } from "../schema/signupSchema";
import { FormProvider } from "react-hook-form";
import { useSignupForm } from "../hooks/useSignup";

const SignUp = () => {
  const t = useTranslations("auth.signup");
  const toastMessage = useTranslations("toast");
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  //const dispatch = useDispatch();
  const { methods, signup, signupState } = useSignupForm();
  //const [authMethod, setAuthMethod] = useState<"form" | "google" | null>(null);
  const router = useRouter();

  const handleNext = async () => {
    let fieldsToValidate: (keyof SignupFormData)[] = [];

    if (currentStep === 1) {
      fieldsToValidate = ["firstname", "lastname"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["email", "password"];
    }

    const isValid = await methods.trigger(fieldsToValidate);
    if (!isValid) return;

    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      methods.handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (data: SignupFormData) => {
    try {
      await signup(data).unwrap();
      toast.success(toastMessage("succesVerifyOtp"));
      router.push(`/auth/verify-otp?email=${data.email}`);
    } catch {
      toast.error("Erreur lors de l'inscription");
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-28 p-8 rounded-2xl border border-border/40 shadow-lg shadow-muted/20 bg-gradient-to-b from-background to-muted/30 backdrop-blur-sm">
      <div className="flex justify-center mb-3">
        <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-md shadow-primary/20">
          <UserPlus className="w-6 h-6" />
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {t("title")}
        </h2>
        <p className="text-muted-foreground text-sm">{t("subtitle")}</p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          {/* Step 1 */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 shadow ${
              currentStep >= 1
                ? "bg-primary text-white shadow-primary/30"
                : "bg-muted text-muted-foreground"
            }`}
          >
            1
          </div>

          {/* Connector */}
          <div
            className={`h-1 w-12 rounded-full transition-all duration-500 ${
              currentStep >= 2 ? "bg-primary" : "bg-muted"
            }`}
          />

          {/* Step 2 */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 shadow ${
              currentStep >= 2
                ? "bg-primary text-white shadow-primary/30"
                : "bg-muted text-muted-foreground"
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
                    {t("firstname")}
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="firstname"
                      type="text"
                      placeholder="John"
                      {...methods.register("firstname")}
                      className="pl-10 h-12 rounded-xl bg-background/70 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition shadow-sm"
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
                    {t("lastname")}
                  </Label>
                  <div className="relative">
                    <PenIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="lastname"
                      type="text"
                      placeholder="Doe"
                      {...methods.register("lastname")}
                      className="pl-10 h-12 rounded-xl bg-background/70 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition shadow-sm"
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
                  {t("email")}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Votre email"
                    {...methods.register("email")}
                    className="pl-10 h-12 rounded-xl bg-background/70 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition shadow-sm"
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
                  {t("password")}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...methods.register("password")}
                    className="pl-10 h-12 rounded-xl bg-background/70 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition shadow-sm"
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
                {t("back")}
              </Button>
            )}
            <Button
              type="submit"
              onClick={handleNext}
              className={`h-12 mb-5 rounded-xl bg-primary from-primary to-primary/80 hover:opacity-90 shadow-md hover:shadow-lg transition-all text-white text-base font-semibold ${
                currentStep === 1 ? "w-full" : "flex-1"
              }`}
              disabled={signupState.isLoading}
            >
              {signupState.isLoading && currentStep === 3 && (
                <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
              )}
              {currentStep === 2 ? (
                t("createAccount")
              ) : (
                <>
                  {t("next")}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUp;
