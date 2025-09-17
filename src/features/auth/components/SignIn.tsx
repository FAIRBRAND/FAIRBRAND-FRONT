"use client";

import type React from "react";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/slice/slice";
import toast from "react-hot-toast";
//import { redirectAccordingToRole } from "@/i18n/routes";
//import { useRouter } from "next/navigation";
import { useLoginForm } from "../hooks/useLogin";
import { FormProvider } from "react-hook-form";
import { LoginFormData } from "../schema/loginSchema";

const SignIn = () => {
  const t = useTranslations("auth.signin");
  const toastMessage = useTranslations("toast");
  //const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { methods, login, loginState } = useLoginForm();
  const [authMethod, setAuthMethod] = useState<"form" | "google" | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    setAuthMethod("form");
    try {
      const res = await login(data).unwrap();
      dispatch(setToken(res.token));
      //redirectAccordingToRole(res.token, router);
      if (authMethod !== "google") {
        toast.success(toastMessage("successLogin"));
      }
    } catch {
      toast.error(toastMessage("errorLogin"));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-28 p-8 rounded-2xl border border-border/40 shadow-lg shadow-muted/20 bg-gradient-to-b from-background to-muted/30 backdrop-blur-sm">
      <div className="flex justify-center mb-3">
        <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-md shadow-primary/20">
          <User className="w-6 h-6" />
        </div>
      </div>
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {t("title")}
        </h2>
        <p className="text-muted-foreground text-sm">{t("subtitle")}</p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              {t("email")}
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
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

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full mt-5 mb-5 h-12 text-white btn-premium text-base font-semibold"
            disabled={loginState.isLoading}
          >
            {loginState.isLoading && (
              <span className="w-5 h-5  border-2 border-t-transparent border-white rounded-full animate-spin mr-2" />
            )}
            {t("submit")}
          </Button>

          {/* Error Display */}
          {loginState.error && (
            <p className="text-red-500 text-sm">{toastMessage("errorLogin")}</p>
          )}
        </form>
      </FormProvider>
    </div>
  );
};
export default SignIn;
