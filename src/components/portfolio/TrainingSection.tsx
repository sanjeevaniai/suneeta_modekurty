import Section from "./Section";
import ContentCard from "./ContentCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, BookOpen, Shield } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TrainingSection = () => {
  const courses = [
    {
      title: "AI Governance Awareness",
      description: "Understand the regulatory landscape including EU AI Act, NIST AI RMF, and ISO/IEC 42001. Learn what AI governance means for your organization and how to build accountability structures.",
      audience: "Executives, boards, and compliance teams",
      duration: "Half-day or full-day",
      tags: ["Executive Education", "Compliance", "Leadership"],
      icon: Shield
    },
    {
      title: "AI Literacy Fundamentals",
      description: "Meet EU AI Act Article 4 requirements. Build organization-wide understanding of AI capabilities, limitations, and responsible use. Practical exercises and real-world scenarios.",
      audience: "Employees at all levels",
      duration: "2-4 hours",
      tags: ["AI Literacy", "EU AI Act", "Organization-wide"],
      icon: Users
    },
    {
      title: "EU AI Act Readiness Workshop",
      description: "Practical preparation for August 2026 enforcement. Risk classification, documentation requirements, compliance gap analysis, and remediation roadmap.",
      audience: "Organizations with AI systems serving EU markets",
      duration: "Full-day workshop",
      tags: ["EU AI Act", "Compliance", "Workshop"],
      icon: BookOpen
    },
    {
      title: "ISO 42001 Foundation",
      description: "Introduction to the AI Management System standard. Understanding requirements, implementation approach, and certification preparation.",
      audience: "Quality managers, AI teams, compliance professionals",
      duration: "1-2 days",
      tags: ["ISO 42001", "Certification", "Management System"],
      icon: GraduationCap
    }
  ];

  return (
    <Section
      id="training"
      title="AI Governance Training"
      subtitle="Preparing organizations for the era of AI regulation"
    >
      <div className="space-y-12">
        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <ContentCard
              key={index}
              title={course.title}
              subtitle={course.audience}
              description={course.description}
              tags={course.tags}
              className="h-full"
            >
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <course.icon className="w-4 h-4" />
                  <span className="font-medium">Duration:</span>
                  <span>{course.duration}</span>
                </div>
              </div>
            </ContentCard>
          ))}
        </div>

        {/* Instructor Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Instructor</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <Avatar className="w-24 h-24 border-4 border-primary/20 shadow-elegant">
                <AvatarImage src="/Suneeta.jpeg" alt="Suneeta Modekurty" className="object-cover" style={{ objectPosition: 'center 35%' }} />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-semibold mb-3">Suneeta Modekurty</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>• ISO/IEC 42001 Lead Auditor (fewer than 500 worldwide)</p>
                  <p>• O-1A Visa for Extraordinary Ability in AI/ML</p>
                  <p>• 25 years in regulated industries (healthcare, fintech, life sciences)</p>
                  <p>• Founder & CEO, <a href="https://sanjeevaniai.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SANJEEVANI AI</a></p>
                  <p>• Builder of METRIS-Quantitative AI Governance Platform and DeLARSify</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="default"
            onClick={() => window.open('https://calendar.notion.so/meet/siaai/0619', '_blank')}
            className="group"
          >
            Book a Call
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default TrainingSection;

