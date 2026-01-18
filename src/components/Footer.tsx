import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Chops by Nefo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">CHOPS by NEFO</h3>
                <p className="text-xs text-secondary italic">The Delight is in the Taste</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Premium pastries, cakes, and catering services for all your special occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Order Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Banana Bread</li>
              <li>Zobo Drink</li>
              <li>Pastries & Small Chops</li>
              <li>Custom Cakes</li>
              <li>Indoor Catering</li>
              <li>Outdoor Catering</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <WhatsAppIcon className="w-5 h-5 text-secondary" />
                <a href="https://wa.me/2348093958707" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  08093958707
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:08168968952" className="hover:text-white">
                  08168968952
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <InstagramIcon className="w-5 h-5 text-secondary" />
                <a href="https://instagram.com/chops_by_nefo" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  @chops_by_nefo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Chops by Nefo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
