/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion } from "framer-motion";

const ImageCard = ({ image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="relative overflow-hidden rounded-xl group"
    >
      <img
        src={image.imageUrl}
        alt={image.title}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">
            {image.title}
          </h3>
          <p className="text-sm text-white/80">
            {image.services.name}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageCard;
