"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-20 px-5 sm:px-6 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/about.jpg"
            alt="Lokpanta community"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Lokpanta
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Lokpanta is a vibrant community in Umuchieze, within Umunneochi
            Local Government Area of Abia State, Nigeria. It is known for its
            strong cultural heritage, unity among its people, and a deep sense
            of identity passed down through generations.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            The community is made up of several sub-communities including
            Umudi, Ukomi, Amaekwuru, Uru, and Ihite. These communities work
            together to preserve traditions, promote development, and maintain
            a peaceful environment for growth.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              🌍 Language: <span className="font-semibold">Igbo</span>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              🛒 Market Day: <span className="font-semibold">Nkwo</span>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              🎉 Festival: <span className="font-semibold">Iri Ji</span>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              📍 Location: <span className="font-semibold">Abia State</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link href="/about">
              <Button className="bg-green-700 hover:bg-green-800 text-white px-7 py-3 font-semibold">
                Learn More About Lokpanta
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}