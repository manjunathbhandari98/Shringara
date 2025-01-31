import React from "react";
import {
  Heart,
  Sparkles,
  Clock,
} from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-16">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Customizable Designs
            </h3>
            <p className="text-gray-600">
              Tailored decorations that match your
              vision and style perfectly.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Professional Service
            </h3>
            <p className="text-gray-600">
              Dedicated team committed to making
              your event spectacular.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Timely Execution
            </h3>
            <p className="text-gray-600">
              Punctual setup and seamless
              coordination for your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
