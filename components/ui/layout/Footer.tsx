import Link from "next/link";
import { navLinks } from "@/config/navLinks";
import { communities } from "@/config/communities";

import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Lokpanta</h2>
          <p className="mt-4 text-sm leading-relaxed">
            A vibrant community in Umuchieze, Umunneochi LGA of Abia State,
            Nigeria. Rich in culture, unity, and heritage.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-5 text-lg">
            <a href="#"><FiFacebook /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiInstagram /></a>
            <a href="mailto:example@email.com"><FiMail /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks
              .filter((item) => item.href)
              .map((item) => (
                <li key={item.label}>
                  <Link href={item.href!} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Communities */}
        <div>
          <h3 className="text-white font-semibold mb-4">Communities</h3>
          <ul className="space-y-2 text-sm">
            {communities.map((community) => (
              <li key={community.slug}>
                <Link
                  href={`/communities/${community.slug}`}
                  className="hover:text-white"
                >
                  {community.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">Lokpanta, Umuchieze</p>
          <p className="text-sm mt-2">Umunneochi LGA, Abia State</p>
          <p className="text-sm mt-2">Nigeria</p>

          <p className="text-sm mt-4">
            Email: example@email.com
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Lokpanta. All rights reserved.
      </div>
    </footer>
  );
}