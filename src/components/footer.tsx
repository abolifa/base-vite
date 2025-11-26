"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full bg-slate-800 text-white pt-14 pb-6 mt-20"
      dir="rtl"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-14">
        {/* Company */}
        <div className="space-y-4">
          <img src="/meta/logo-red-icon.png" alt="Logo" className="w-32" />
          <p className="text-sm leading-relaxed text-gray-300">
            لاستيراد المواد الغذائية — الجودة، الالتزام، والخبرة في تقديم أفضل
            المنتجات للسوق الليبي.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">تواصل معنا</h3>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <a dir="ltr" href="tel:+218912186060" className="text-sm underline">
              +218 91 218 6060
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:info@watanalmajd.com.ly"
              className="text-sm underline"
            >
              info@watanalmajd.com.ly
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            <span className="text-sm text-gray-300">
              كرزاز - مصراته - ليبيا
            </span>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">روابط مهمة</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#hero" className="hover:underline">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                من نحن
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                منتجاتنا
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                اتصل بنا
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} شركة وطن المجد — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
