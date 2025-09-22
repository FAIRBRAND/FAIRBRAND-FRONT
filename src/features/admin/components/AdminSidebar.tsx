"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Users,
  BookOpen,
  Award,
  CreditCard,
  BarChart3,
  Settings,
  TrendingUp,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: BarChart3,
  },
  {
    title: "Utilisateurs",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Formations",
    href: "/admin/trainings",
    icon: BookOpen,
    children: [
      { title: "Liste des formations", href: "/admin/trainings" },
      { title: "Suivi des formations", href: "/admin/trainings/follow-up" },
      { title: "Gestion du contenu", href: "/admin/trainings/content" },
    ],
  },
  {
    title: "Certifications",
    href: "/admin/certifications",
    icon: Award,
  },
  {
    title: "Paiements",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Rapports",
    href: "/admin/reports",
    icon: TrendingUp,
  },
  {
    title: "Paramètres",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-brand-blue shadow-lg min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white">Administration</h2>
      </div>
      <nav className="px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.children &&
                item.children.some((child) => pathname === child.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-blue-500/20 text-white"
                      : "text-white hover:bg-gray-"
                  )}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.title}</span>
                </Link>
                {item.children && isActive && (
                  <ul className="ml-8 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "block px-4 py-2 rounded-lg text-sm transition-colors",
                            pathname === child.href
                              ? "bg-blue-100 text-brand-blue font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          )}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
