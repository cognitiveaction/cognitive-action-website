"use client";

import { User, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-32 text-center">
        <AnimatedSection>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-[#6E6E73] max-w-3xl mx-auto leading-relaxed">
            We believe every enterprise has a unique intelligence DNA.
            Our mission is to unlock it.
          </p>
        </AnimatedSection>
      </section>

      {/* Team */}
      <section className="bg-[#F5F5F7] py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-4">Our Team</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <StaggerItem>
              <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#E8E8ED]">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#0071E3] flex items-center justify-center mx-auto mb-5">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1D1D1F]">Ragu Gurumurthy</h3>
                <p className="text-[#6E6E73] mt-1">Founder & CEO</p>
              </div>
            </StaggerItem>

            {[1, 2].map((i) => (
              <StaggerItem key={i}>
                <div className="bg-white/50 rounded-2xl p-6 md:p-8 text-center border border-dashed border-[#D2D2D7]">
                  <div className="w-20 h-20 rounded-full bg-[#F5F5F7] flex items-center justify-center mx-auto mb-5">
                    <Users className="w-8 h-8 text-[#D2D2D7]" />
                  </div>
                  <p className="text-[#86868B] font-medium">More team members</p>
                  <p className="text-[#86868B] text-sm mt-1">coming soon</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <AnimatedSection className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-4">Our Approach</h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <StaggerItem>
            <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">First-Principles Thinking</h3>
            <p className="text-[#6E6E73] leading-relaxed">
              We don&apos;t apply templates. Every engagement starts by understanding
              what it fundamentally means for your specific organization to become
              AI-native. The destination is as unique as your business.
            </p>
          </StaggerItem>
          <StaggerItem>
            <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">Mass Customization</h3>
            <p className="text-[#6E6E73] leading-relaxed">
              We use a consistent, proven solutioning process — but tailor it completely
              to each client. Pre-developed capabilities accelerate delivery while
              ensuring every solution reflects your unique requirements and constraints.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      <Footer />
    </div>
  );
}
