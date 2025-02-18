import React, {
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode =
    searchParams.get("mode") || "login"; // Default to login
  const [isLogin, setIsLogin] = useState(
    mode === "login"
  );

  // Sync state when URL query changes
  useEffect(() => {
    setIsLogin(mode === "login");
  }, [mode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6 relative overflow-hidden">
      {/* Floating Light Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-800 bg-opacity-30 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700"
      >
        {isLogin ? <Login /> : <Signup />}
        <p className="text-center mt-4">
          {isLogin
            ? "New user?"
            : "Already have an account?"}{" "}
          <a
            href={`/auth?mode=${
              isLogin ? "signup" : "login"
            }`}
            className="text-yellow-500 cursor-pointer hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
