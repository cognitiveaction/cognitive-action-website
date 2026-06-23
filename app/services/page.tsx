"use client";

import { Target, PenTool, Layers, Database, Settings, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    icon: Target,
    title: "Strategy & Business Value",
    description:
      "First-principles assessment of your organization's AI-native potential. We define the precise destination and map the value — not generic roadmaps, but a transformation blueprint tied to measurable business outcomes. Includes executive alignment, opportunity sizing, and investment case development.",
  },
  {
    icon: PenTool,
    title: "Blueprinting",
    description:
      "Detailed architectural and process design for your AI-native future state. We map your current workflows, data landscape, and application ecosystem, then design the target operating model. Every constraint is accounted for — regulatory, technical, organizational — so the path forward is clear and actionable.",
  },
  {
    icon: Layers,
    title: "Platform Build & Customization",
    description:
      "We build your Intelligence Control Layer — the orchestration substrate where your organization's learning compounds over time. This layer connects to your existing data sources, enterprise applications, and cloud infrastructure. Mix and match LLMs for different purposes. Use any cloud provider. Your differentiating DNA — the art of how you do what you do — is encoded into this intelligence layer, creating compounding advantage.",
  },
  {
    icon: Database,
    title: "Data Engineering & Ontology Development",
    description:
      "Your AI is only as powerful as the data foundation beneath it. We engineer robust data pipelines, connect to existing storage systems, and develop ontologies that capture your domain's unique knowledge structure. This ensures your Intelligence Control Layer understands your business context deeply — not just data, but meaning.",
  },
  {
    icon: Settings,
    title: "Managed Operations as a Service",
    description:
      "We don't just build and walk away. Our managed operations offering keeps your AI platform running at peak performance — security hardened, policy-compliant, financially optimized, and continuously evaluated. Full observability, FinOps, evaluation frameworks, and model governance included. Available as SaaS or a build-and-operate engagement model.",
  },
  {
    icon: Users,
    title: "Change Management",
    description:
      "Technology alone doesn't transform an enterprise — people do. We design and execute change management programs that drive adoption from the boardroom to the front line. This includes stakeholder engagement, role-based training, communications planning, and readiness assessments to ensure your workforce embraces AI as a force multiplier, not a disruption. Sustained transformation requires sustained commitment — we embed the habits, incentives, and feedback loops that make AI-native ways of working stick.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <AnimatedSection className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-[#6E6E73] max-w-2xl mx-auto">
            End-to-end capabilities to take you from vision to an operating AI-native enterprise.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <Footer />
    </div>
  );
}
