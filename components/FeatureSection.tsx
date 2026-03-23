import { features } from "@/config/features";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="py-20 px-5 sm:px-6 md:px-10 bg-white">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What You Can Do
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          This platform is designed to connect, inform, and showcase everything
          about Lokpanta in one place.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

    </section>
  );
}