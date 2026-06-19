"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#E8E8ED]"
    >
      <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-[#0071E3]" />
      </div>
      <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">{title}</h3>
      <p className="text-[#6E6E73] leading-relaxed">{description}</p>
    </motion.div>
  );
}
