"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/slice/slice";
import { useVerifyOtpMutation } from "../services/authApi";
import { useTranslations } from "next-intl";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const toastMessage = useTranslations("toast");
  const t = useTranslations("auth.verificationOtp");
  const email = searchParams.get("email") || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error(toastMessage("errorCodeOtp"));
      return;
    }

    try {
      const res = await verifyOtp({ email, otp }).unwrap();
      toast.success(toastMessage("successSignup"));
      if (res.token) {
        dispatch(setToken(res.token));
        router.push("/");
      } else {
        router.push("/auth/signin");
      }
    } catch {
      toast.error(toastMessage("errorVerifyOtp"));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">{t("title")}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
          placeholder="123456"
          className="text-center tracking-widest text-lg"
        />
        <Button type="submit" className="w-full text-white" disabled={isLoading}>
          {isLoading ? t("verification") : t("confirm")}
        </Button>
      </form>
    </div>
  );
}
