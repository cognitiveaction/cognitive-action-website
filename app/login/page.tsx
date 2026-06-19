"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/home");
    } else {
      setShake(true);
      setError("Invalid access code");
      setTimeout(() => setShake(false), 500);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <div className="flex justify-center mb-8">
          <Brain className="w-10 h-10 text-[#0071E3]" />
        </div>

        <motion.form
          onSubmit={handleSubmit}
          animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <label className="block text-sm font-medium text-[#1D1D1F]">
            Enter access code
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 rounded-xl border-[#D2D2D7] text-base px-4"
            placeholder="Access code"
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-[#0071E3] text-white hover:bg-[#0077ED] text-base font-medium"
          >
            {loading ? "..." : "Enter"}
          </Button>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
        </motion.form>
      </motion.div>
    </div>
  );
}
