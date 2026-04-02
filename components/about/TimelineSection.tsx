"use client";

import { timeline } from "@/config/timeline";
import { motion } from "framer-motion";

export default function TimelineSection() {
  return (
    <section className="py-20 px-5 sm:px-6 md:px-10 bg-white">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Journey Through Time
        </h2>
        <p className="mt-3 text-gray-600">
          A timeline of the history and evolution of Lokpanta.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative mt-16 max-w-5xl mx-auto">
        
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 -translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                
                {/* Content */}
                <div className="w-full md:w-1/2 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <span className="text-green-700 font-bold text-sm">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex items-center justify-center w-10">
                  <div className="w-4 h-4 bg-green-700 rounded-full border-4 border-white shadow" />
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}