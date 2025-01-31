import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-6 w-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-600 text-lg mb-6">
              `The team went above and beyond our
              expectations. The decorations were
              absolutely stunning and exactly what
              we envisioned for our special day!`
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h4 className="font-semibold">
                  Sarah Johnson
                </h4>
                <p className="text-gray-500">
                  Wedding Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
