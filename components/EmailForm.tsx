"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Thanks! We'll keep you posted.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-[#6E6E73] text-lg">Thanks! We&apos;ll keep you posted.</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-md">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 rounded-xl border-[#D2D2D7] bg-white/80 text-base px-4"
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-12 px-6 rounded-xl bg-[#0071E3] text-white hover:bg-[#0077ED] text-base font-medium"
      >
        {status === "loading" ? "..." : "Notify Me"}
      </Button>
      {status === "error" && (
        <p className="text-red-500 text-sm mt-2">{message}</p>
      )}
    </form>
  );
}
