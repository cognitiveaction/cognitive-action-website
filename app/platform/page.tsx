"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Shuffle,
  Cloud,
  Fingerprint,
  TrendingUp,
  Shield,
  Key,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const principles = [
  { icon: Shuffle, title: "LLM Agnostic", description: "Use any model — mix and match for different tasks." },
  { icon: Cloud, title: "Cloud Agnostic", description: "Deploy on any provider or multi-cloud." },
  { icon: Fingerprint, title: "Your DNA", description: "Your unique processes and knowledge are encoded, not generic." },
  { icon: TrendingUp, title: "Compounding Intelligence", description: "The system learns and improves over time." },
  { icon: Shield, title: "Enterprise-Grade Harnesses", description: "Security, compliance, observability, eval, and configurable policy engines — all built in." },
  { icon: Key, title: "Ownership", description: "The platform is yours — we hand it over or operate it for you." },
];

const models = [
  { title: "SaaS", description: "We host and manage everything." },
  { title: "Build & Operate", description: "We build it in your environment and run it for you." },
  { title: "Build & Transfer", description: "We build it and hand over the keys." },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F5F5F7] via-white to-[#EEF2FF] py-16 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimatedSection>
            <Brain className="w-12 h-12 text-[#0071E3] mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] mb-6">
              The Intelligence Control Layer
            </h1>
            <p className="text-lg md:text-xl text-[#6E6E73] max-w-3xl mx-auto leading-relaxed">
              An orchestration substrate that sits on top of your existing enterprise
              applications and data sources — where your organization&apos;s learning
              compounds over time and your differentiating DNA is encoded.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <AnimatedSection>
          <div className="relative bg-[#F5F5F7] rounded-2xl md:rounded-3xl p-5 md:p-12">
            {/* ICL Layer */}
            <div className="bg-gradient-to-r from-[#7B61FF] to-[#0071E3] rounded-xl md:rounded-2xl p-4 md:p-6 text-white text-center mb-6 md:mb-8">
              <p className="text-xs md:text-sm font-medium opacity-80 mb-1">Orchestration</p>
              <p className="text-base md:text-xl font-bold">Intelligence Control Layer</p>
              <p className="text-xs md:text-sm opacity-80 mt-1">Your DNA &middot; Compounding Learning</p>
            </div>

            {/* Harnesses */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-6 md:mb-8">
              {["Access Management", "Model Catalog", "Storage Catalog", "FinOps", "Eval", "Connectors", "Policy Engines", "Applications Catalog"].map((h) => (
                <motion.div
                  key={h}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg md:rounded-xl p-2 md:p-3 text-center shadow-sm border border-[#E8E8ED]"
                >
                  <p className="text-[10px] md:text-xs font-medium text-[#6E6E73]">{h}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom: Apps + Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 border border-[#E8E8ED]">
                <p className="text-sm font-semibold text-[#1D1D1F] mb-3">Enterprise Apps</p>
                <div className="flex flex-wrap gap-2">
                  {["CRM", "ERP", "HRIS", "SCM", "Custom Apps"].map((app) => (
                    <span key={app} className="px-3 py-1 bg-[#F5F5F7] rounded-lg text-xs text-[#6E6E73]">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 border border-[#E8E8ED]">
                <p className="text-sm font-semibold text-[#1D1D1F] mb-3">Data Sources</p>
                <div className="flex flex-wrap gap-2">
                  {["Data Lake", "APIs", "Documents", "Streams"].map((src) => (
                    <span key={src} className="px-3 py-1 bg-[#F5F5F7] rounded-lg text-xs text-[#6E6E73]">
                      {src}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Key Principles */}
      <section className="bg-[#F5F5F7] py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-4">Key Principles</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#E8E8ED]">
                  <p.icon className="w-8 h-8 text-[#0071E3] mb-4" />
                  <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">{p.title}</h3>
                  <p className="text-[#6E6E73]">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Delivery Models */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <AnimatedSection className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-4">Delivery Models</h2>
          <p className="text-base md:text-lg text-[#6E6E73]">Choose the engagement model that fits your organization.</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {models.map((m) => (
            <StaggerItem key={m.title}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#F5F5F7] rounded-2xl p-6 md:p-8 text-center border border-[#E8E8ED]"
              >
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">{m.title}</h3>
                <p className="text-[#6E6E73]">{m.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <Footer />
    </div>
  );
}
