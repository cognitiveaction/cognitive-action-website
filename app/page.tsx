"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import Link from "next/link";
import { EmailForm } from "@/components/EmailForm";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center gap-8 max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Brain className="w-16 h-16 text-[#0071E3]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F]"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-[#6E6E73]"
        >
          The core team is building the platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full flex justify-center"
        >
          <EmailForm />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6"
      >
        <Link
          href="/login"
          className="text-xs text-[#86868B] hover:text-[#6E6E73] transition-colors"
        >
          Team Access &rarr;
        </Link>
      </motion.div>
    </div>
  );
}
