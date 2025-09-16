"use client";

import { Linkedin, Mail, Facebook, Instagram } from "lucide-react";

export default function SocialIcons() {
  const socialLinks = [
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Mail, href: "#", label: "Email" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="flex items-center space-x-6">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="w-14 h-14 bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white shadow-lg"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}
