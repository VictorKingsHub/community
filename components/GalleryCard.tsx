import { galleryItems } from "@/config/gallery";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GallerySection() {
  return (
    <section className="py-20 px-5 sm:px-6 md:px-10 bg-gray-50">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Gallery
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          A glimpse into the life, culture, and events in Lokpanta.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative h-56 rounded-xl overflow-hidden group"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

            {/* Title */}
            <div className="absolute bottom-0 left-0 p-3 text-white">
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link href="/gallery">
          <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 font-semibold">
            View Full Gallery
          </Button>
        </Link>
      </div>

    </section>
  );
}