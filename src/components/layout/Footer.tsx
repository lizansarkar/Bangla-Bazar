import Link from "next/link";
import {
  Globe,
  Camera,
  Video,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="Bangla Bazar Logo"
                  className="h-6 md:h-12 w-auto"
                />
              </Link>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              বাংলাদেশের বিশ্বস্ত অনলাইন মার্কেটপ্লেস। আমরা নিশ্চিত করি মানসম্মত
              পণ্য, নিরাপদ লেনদেন ও দ্রুত ডেলিভারি।
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Globe className="w-4 h-4 text-slate-300 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4 text-slate-300 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <Video className="w-4 h-4 text-slate-300 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-slate-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-3">
              {[
                { label: "হোম", href: "/" },
                { label: "অফার", href: "/offers" },
                { label: "ক্যাটাগরি", href: "/categories" },
                { label: "আমাদের সম্পর্কে", href: "/about" },
                { label: "যোগাযোগ", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              গ্রাহক সেবা
            </h4>
            <ul className="space-y-3">
              {[
                { label: "অর্ডার ট্র্যাক করুন", href: "/track" },
                { label: "রিটার্ন পলিসি", href: "/returns" },
                { label: "ডেলিভারি তথ্য", href: "/delivery" },
                { label: "সচরাচর জিজ্ঞাসা", href: "/faq" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              যোগাযোগ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  ১২৩, গুলশান এভিনিউ, ঢাকা-১২১২, বাংলাদেশ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+8801700000000"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  +৮৮০ ১৭০০-০০০০০০
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:support@banglabazar.com"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  support@banglabazar.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  সকাল ৯:০০ - রাত ১০:০০ (সপ্তাহে ৭ দিন)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} বাংলাবাজার। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">
              আমরা গ্রহণ করি
            </span>
            <div className="flex items-center gap-2">
              <div className="h-8 px-3 bg-white/10 rounded-md flex items-center justify-center text-xs font-bold text-pink-400">
                bKash
              </div>
              <div className="h-8 px-3 bg-white/10 rounded-md flex items-center justify-center text-xs font-bold text-orange-400">
                Nagad
              </div>
              <div className="h-8 px-3 bg-white/10 rounded-md flex items-center justify-center text-xs font-bold text-blue-400">
                Visa
              </div>
              <div className="h-8 px-3 bg-white/10 rounded-md flex items-center justify-center text-xs font-bold text-yellow-400">
                MC
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
