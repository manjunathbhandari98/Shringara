import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { additionalServices } from "./additionalServices";

const CustomPackageBuilder = () => {
  const { register, watch } = useForm();
  const selectedServices = watch();

  const calculateTotal = () => {
    return Object.entries(
      selectedServices
    ).reduce((total, [key, value]) => {
      if (value) {
        const service = additionalServices.find(
          (s) => s.id === key
        );
        return total + (service?.price || 0);
      }
      return total;
    }, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl text-black bg-gradient-to-b from-gray-100 to-gray-50 p-8 shadow-lg"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="rounded-full bg-white p-3 shadow-md">
          <Plus className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">
            Custom Package
          </h3>
          <p className="text-gray-600">
            Build your perfect package
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {additionalServices.map((service) => (
          <motion.label
            key={service.id}
            className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 cursor-pointer hover:bg-white transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="checkbox"
              {...register(service.id)}
              className="h-5 w-5 rounded border-gray-300 text-rose-500 focus:ring-rose-500"
            />
            <span className="flex-1">
              {service.label}
            </span>
            <span className="font-semibold">
              ₹{service.price.toLocaleString()}
            </span>
          </motion.label>
        ))}
      </div>

      <div className="mb-8 flex justify-between items-center">
        <span className="text-lg font-semibold">
          Total
        </span>
        <span className="text-3xl font-bold">
          ₹{calculateTotal().toLocaleString()}
        </span>
      </div>

      <button className="w-full rounded-lg bg-rose-500 py-3 text-white transition-colors hover:bg-rose-600">
        Get Quote
      </button>
    </motion.div>
  );
};

export default CustomPackageBuilder;
