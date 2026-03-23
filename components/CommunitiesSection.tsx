"use client";

import { communities } from "@/config/communities";
import CommunityCard from "./CommunityCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CommunitiesSection() {
  return (
    <section className="py-16 px-5 sm:px-6 md:px-10 bg-gray-50">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore Our Communities
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Discover the unique communities that make up Lokpanta, each with its
          own identity, culture, and story.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {communities.map((community) => (
          <CommunityCard key={community.slug} {...community} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link href="/communities">
          <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 font-semibold">
            View All Communities
          </Button>
        </Link>
      </div>
    </section>
  );
}