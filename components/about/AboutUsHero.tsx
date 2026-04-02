"use client";

import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutHero() {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      
      {/* Background Image (Parallax) */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      >
        <Image
          src="/one.jpg"
          alt="Lokpanta community"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-5">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-300 mb-3 animate-fadeIn">
          <Link href="/" className="hover:text-white">
            Home
          </Link>{" "}
          / <span className="text-white">About</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight animate-fadeIn delay-100">
          About Lokpanta
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-200 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed animate-fadeIn delay-200">
          Discover the history, culture, and people of a vibrant community in
          Umuchieze, Umunneochi LGA of Abia State.
        </p>

        {/* CTA */}
        <div className="mt-6 animate-fadeIn delay-300">
          <Link href="/communities">
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition">
              Explore Communities
            </button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 text-white text-sm animate-bounce">
          <ArrowDownIcon />
        </div>

      </div>
    </section>
  );
}