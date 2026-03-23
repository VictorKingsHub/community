"use client";

import { heritageItems } from "@/config/heritage";
import HeritageCard from "./HeritageCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeritageSection() {
  return (
    <section className="py-16 px-5 sm:px-6 md:px-10 bg-white">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Heritage
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Explore the culture, traditions, education, and history that define
          Lokpanta and its people.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {heritageItems.map((item) => (
          <HeritageCard key={item.slug} {...item} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link href="/heritage">
          <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 font-semibold">
            Explore Heritage
          </Button>
        </Link>
      </div>

    </section>
  );
}