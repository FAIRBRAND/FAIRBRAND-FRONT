import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en", "de", "es"],
  defaultLocale: "fr",
  pathnames: {
    "/admin": "/admin",
    "/admin/certifications": "/admin/certifications",
    "/admin/payments": "/admin/payments",
    "/admin/reports": "/admin/reports",
    "/admin/settings": "/admin/settings",
    "/admin/trainings": "/admin/trainings",
    "/admin/trainings/content": "/admin/trainings/content",
    "/admin/trainings/follow-up": "/admin/trainings/follow-up",
    "/admin/users": "/admin/users",
  },
});
