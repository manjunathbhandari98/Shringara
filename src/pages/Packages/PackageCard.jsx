/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Star,
  Sparkles,
  Crown,
} from "lucide-react";

const PackageCard = ({ pkg, index }) => {
  const iconMap = {
    star: <Star className="w-6 h-6" />,
    sparkles: <Sparkles className="w-6 h-6" />,
    crown: <Crown className="w-6 h-6" />,
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-b ${pkg.color} p-8 shadow-lg transition-all duration-300 hover:shadow-xl`}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />

      <div className="flex items-center gap-4 mb-6">
        <div className="rounded-full bg-white p-3 shadow-md">
          {iconMap[pkg.icon]}
        </div>
        <div>
          <h3 className="text-2xl font-bold">
            {pkg.title}
          </h3>
          <p className="text-gray-600">
            {pkg.description}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-bold">
          ₹{pkg.price.toLocaleString()}
        </span>
      </div>

      <ul className="mb-8 space-y-4">
        {pkg.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-3"
          >
            <Check className="h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      <button className="w-full rounded-lg bg-black py-3 text-white transition-colors hover:bg-gray-800">
        Book Now
      </button>
    </motion.div>
  );
};

export default PackageCard;
