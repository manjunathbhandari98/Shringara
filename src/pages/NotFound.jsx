import React, { useEffect } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to home after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-9xl font-bold text-yellow-400"
      >
        404
      </motion.h1>
      <p className="text-2xl mt-4">
        Oops! The page you&lsquo;re looking for
        doesn&apos;t exist.
      </p>
      <p className="text-gray-400 mt-2">
        It might have been moved or deleted.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition"
        >
          🔙 Go Home
        </motion.button>
      </Link>

      {/* Animated Floating Element */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="mt-12 text-6xl"
      >
        🚀
      </motion.div>
    </div>
  );
};

export default NotFound;
