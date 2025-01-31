/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-black rounded-xl p-8 shadow-lg"
    >
      <Quote className="w-10 h-10 text-rose-300 mb-4" />
      <p className="text-gray-600 mb-6 italic">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">
            {testimonial.name}
          </h4>
          <div className="flex gap-1">
            {Array.from({
              length: testimonial.rating,
            }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-current text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
