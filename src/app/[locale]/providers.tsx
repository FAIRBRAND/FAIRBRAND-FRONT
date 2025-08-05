import { ReactElement } from "react";
import { I18nProviderClient } from "../../../locales/client";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/contexts/AuthContext";

export default function Providers({
  locale,
  children,
}: {
  locale: string;
  children: ReactElement;
}) {
  return (
    <SessionProvider>
      <I18nProviderClient locale={locale}>
        <AuthProvider>{children}</AuthProvider>
      </I18nProviderClient>
    </SessionProvider>
  );
}
