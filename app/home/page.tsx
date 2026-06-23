"use client";

import { motion } from "framer-motion";
import { Target, ArrowRight, Sparkles, RefreshCw, Building2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Tailored for You",
    description: "Every solution is built around your unique business DNA.",
  },
  {
    icon: RefreshCw,
    title: "End-to-End",
    description: "From strategy through managed operations.",
  },
  {
    icon: Building2,
    title: "Your Platform, Your Choice",
    description: "Any LLM, any cloud, your preferences.",
  },
];

const steps = [
  "Discover & Assess",
  "Blueprint the Future State",
  "Build & Customize",
  "Integrate & Orchestrate",
  "Operate & Evolve",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F7] via-white to-[#EEF2FF]" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="w-8 h-8 text-[#0071E3]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6">
              Your Path to{" "}
              <span className="bg-gradient-to-r from-[#7B61FF] to-[#0071E3] bg-clip-text text-transparent">
                AI-Native
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6E6E73] max-w-2xl mx-auto mb-10 leading-relaxed">
              Every enterprise is unique. Your AI transformation should be too.
              We deliver mass-customized solutions — your DNA, amplified by intelligence.
            </p>
            <Link href="/services">
              <Button className="h-12 px-8 rounded-xl bg-[#0071E3] text-white hover:bg-[#0077ED] text-base font-medium gap-2">
                Explore Our Approach
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="text-center p-8">
                <div className="w-14 h-14 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-[#0071E3]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">{v.title}</h3>
                <p className="text-[#6E6E73]">{v.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* How We Work */}
      <section className="bg-[#F5F5F7] py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-4">How We Work</h2>
            <p className="text-lg text-[#6E6E73]">A proven path from vision to value.</p>
          </AnimatedSection>

          <StaggerContainer className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-4">
            {steps.map((step, i) => (
              <StaggerItem key={step} className="flex-1 w-full text-center md:text-center flex md:flex-col items-center gap-3 md:gap-0">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#0071E3] text-white flex items-center justify-center md:mx-auto md:mb-3 text-sm font-semibold">
                  {i + 1}
                </div>
                <p className="text-sm font-medium text-[#1D1D1F]">{step}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute" />
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
}
