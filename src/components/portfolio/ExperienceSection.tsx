import Section from "./Section";
import ContentCard from "./ContentCard";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Founder & CEO",
      company: "SANJEEVANI AI",
      date: "Aug 2025 - Present",
      description: "Developed METRIS, the first platform to quantify AI governance risk in dollars with 17 specialized agents evaluating 1,481 checkpoints across 50+ jurisdictions. Built DeLARSify, a multi-modal AI platform for LARS patients achieving 75%+ pre-surgery prediction accuracy. Delivering AI Governance Awareness and Literacy Training for enterprises preparing for EU AI Act compliance. ISO/IEC 42001 Lead Auditor certified. Selected for Washington University CELect-STL program and Founder Institute Core.",
      tags: ["AI Governance", "METRIS", "DeLARSify", "EU AI Act", "ISO 42001", "Executive Training", "Healthcare AI"]
    },
    {
      title: "AI Architect",
      company: "Stealth AI Startup",
      date: "Feb 2025 - Present",
      description: "Implemented adaptive RAG pipelines reducing hallucination rates by 30%. Fine-tuned foundation models with LoRA adapters achieving 40% lower GPU costs. Delivered MVP in 90 days.",
      tags: ["RAG Systems", "LLM Fine-tuning", "LoRA/QLoRA", "MVP Development"]
    },
    {
      title: "Senior AI Consultant",
      company: "First American",
      date: "Sep 2023 - Feb 2025",
      description: "Deployed GPT-4 + OCR pipeline cutting document review time by 60% and saving $5M annually. Built LLM-powered RAG automation achieving 80% underwriting automation.",
      tags: ["GPT-4", "OCR", "Automation", "Underwriting", "Legal Tech"]
    },
    {
      title: "Senior AI & Data Science Consultant",
      company: "Centene",
      date: "Aug 2022 - Aug 2023",
      description: "Delivered predictive analytics reducing inefficiencies by 18%, contributing to $500M+ compliance savings. Applied transformer models for Medicaid claims anomaly detection.",
      tags: ["Predictive Analytics", "Healthcare", "Compliance", "Medicaid", "Claims Processing"]
    }
  ];

  return (
    <Section 
      id="experience" 
      title="Professional Experience" 
      subtitle="Building excellence through diverse roles and responsibilities"
    >
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <ContentCard
            key={index}
            title={exp.title}
            subtitle={exp.company}
            date={exp.date}
            description={exp.description}
            tags={exp.tags}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button 
          size="lg" 
          variant="default"
          onClick={() => window.open('/resume.pdf', '_blank')}
        >
          <FileText className="w-4 h-4 mr-2" />
          View PDF Resume
        </Button>
      </div>
    </Section>
  );
};

export default ExperienceSection;