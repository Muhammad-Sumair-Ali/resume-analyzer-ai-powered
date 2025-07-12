import React from "react";
import { motion } from "motion/react";
import { Zap } from "lucide-react";
import Link from "next/link";
const Logo = () => {
  return (
    <>
        <Link href={"/"}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-2"
      >
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Resume Analyzer
          </span>
      </motion.div>
        </Link>
    </>
  );
};

export default Logo;
