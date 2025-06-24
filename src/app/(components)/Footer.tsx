import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Mail, label: "Email" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
];

const navLinks = [
  { href: "#about", label: "About us" },
  { href: "#coaching", label: "Coaching" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#privacy", label: "Privacy policy" },
  { href: "#blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Logo */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-medium tracking-wide">Fair-Brand LOGO</h2>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-5xl lg:text-4xl font-bold tracking-tight leading-tight mb-12">
            GET STARTED TO YOUR BUSINESS
          </h3>

          {/* Email Form */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center bg-white rounded-full p-2 shadow-lg">
              <div className="flex items-center pl-4 pr-2">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="email"
                placeholder="Enter your mail"
                className="flex-1 border-0 text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 flex items-center gap-2">
                Try now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4 bg-white rounded-full px-8 py-6">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                className="text-black hover:text-gray-600 transition-colors"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-white hover:text-black hover:bg-white transition-colors border border-white rounded-[1rem] px-7 py-2 hover:border-white/40 text-lg"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
