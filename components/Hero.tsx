"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    image: "/one.jpg",
    title: "Welcome to Lokpanta",
    subtitle:
      "A proud community in Umuchieze, Umunneochi LGA of Abia State",
  },
  {
    image: "/two.png",
    title: "Nkwo Market Life",
    subtitle: "A vibrant center of trade and culture",
  },
  {
    image: "/three.png",
    title: "Rich Cultural Heritage",
    subtitle: "Celebrating traditions like Iri Ji",
  },
];

export default function Hero() {
  return (
    <section className="w-full h-[92vh] mt-16">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Stronger Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative z-10 text-center px-4 max-w-3xl">
                
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="mt-5 text-lg md:text-2xl text-gray-200 leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  
                  {/* Primary */}
                  <Link href="/communities">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-7 py-3 text-base">
                      Explore Communities
                    </Button>
                  </Link>

                  {/* Secondary (FIXED VISIBILITY) */}
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-white text-white bg-transparent hover:bg-white hover:text-black font-semibold px-7 py-3 text-base"
                    >
                      Learn More
                    </Button>
                  </Link>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}