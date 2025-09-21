"use client";

import { useSelector } from "react-redux";
import { Bell, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
// import { useAuth } from "@/features/auth/hooks/useAuth";

export function AdminHeader() {
  // const { user, logout } = useAuth();

  // const handleLogout = () => {
  //   logout();
  // };

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-end px-6 py-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Bell className="w-5 h-5" />
          </Button>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            // onClick={handleLogout}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </div>
    </header>
  );
}
