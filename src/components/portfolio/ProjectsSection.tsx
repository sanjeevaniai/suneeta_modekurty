import Section from "./Section";
import ContentCard from "./ContentCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DeLARSify",
      description: "AI-powered survivorship platform designed to help patients manage Low Anterior Resection Syndrome (LARS) after rectal cancer surgery. Combines gut microbiome data, patient-reported outcomes, and wearable data through a governance-first AI engine to deliver personalized recommendations and predictive insights.",
      tags: ["AI/ML", "Healthcare", "Patent Pending", "Survivorship Platform"],
      status: "Patent Pending",
      impact: "U.S. Provisional Application No. 63/774,518",
      duration: "March 2025",
      organization: "Independent Project",
      website: "https://delarsify.netlify.app/"
    },
    {
      title: "Cancer Research - Oxaliplatin-Induced Peripheral Neuropathy",
      description: "Conducted colorectal cancer research on oxaliplatin-induced peripheral neuropathy with findings published at ASCO. Applied single-cell analysis for PDAC, identifying potential therapeutic targets for pancreatic cancer treatment.",
      tags: ["Bioinformatics", "Cancer Research", "Single-cell Analysis", "PDAC"],
      status: "Published Research",
      impact: "ASCO Publication",
      duration: "Apr 2023 – Apr 2025",
      organization: "WashU School of Medicine"
    },
    {
      title: "AI/ML Diabetes Prediction Model",
      description: "Led a team of 5 on an AI/ML project forecasting likelihood of diabetes based on age, gender, and lifestyle factors. Conducted live sessions on bioinformatics data science, bridging research methods with applied data science.",
      tags: ["Machine Learning", "Healthcare AI", "Team Leadership", "Data Science"],
      status: "Completed",
      impact: "Actionable health insights",
      duration: "Aug 2024 – Dec 2024",
      organization: "SuperDataScience"
    },
    {
      title: "AI & Data Science Career Mentorship Program",
      description: "Served as instructor and mentor for 12 job seekers transitioning into careers in AI, data science, analytics, and business intelligence. Designed comprehensive training sessions covering the full data science pipeline.",
      tags: ["Education", "Mentorship", "Career Development", "AI Training"],
      status: "Ongoing Success",
      impact: "12 career transitions",
      duration: "Aug 2022 – Aug 2024",
      organization: "ATLytiCS Inc."
    }
  ];

  return (
    <Section 
      id="projects" 
      title="Key Projects" 
      subtitle="Innovation-driven solutions with measurable impact"
      background="gradient"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ContentCard
            key={index}
            title={project.title}
            subtitle={project.organization}
            description={project.description}
            date={project.duration}
            tags={project.tags}
            className="h-full"
          >
            <div className="space-y-3 mt-4">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">Status:</span>
                <span className="text-primary">{project.status}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">Impact:</span>
                <span className="text-accent font-medium">{project.impact}</span>
              </div>
              {project.website && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-3"
                  onClick={() => window.open(project.website, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Project
                </Button>
              )}
            </div>
          </ContentCard>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
