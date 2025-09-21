import Section from "./Section";
import ContentCard from "./ContentCard";

const JourneySection = () => {
  const journeyMilestones = [
    {
      year: "2025",
      title: "AI Consultant & Thought Leader",
      description: "Leading AI governance consulting at SANJEEVANI AI and architecting advanced RAG systems at stealth startup. Recognized with AI Thought Leadership Award and O-1A Extraordinary Ability Visa.",
      highlight: true
    },
    {
      year: "2022-2024",
      title: "Senior AI Consultant Era",
      description: "Delivered enterprise AI solutions at First American ($5M annual savings) and Centene ($500M+ compliance savings). Led global teams and implemented Responsible AI frameworks.",
    },
    {
      year: "2018-2021",
      title: "Research & Innovation Phase",
      description: "Advanced bioinformatics research at WashU and IUPUI, improving cancer diagnostics by 18% with CNN models and accelerating NIH deliverables through genomics analysis.",
    },
    {
      year: "2020",
      title: "Academic Foundation",
      description: "Completed MS in Bioinformatics & Data Science at Indiana University, establishing expertise in AI/ML and biological data analysis.",
    }
  ];

  return (
    <Section 
      id="journey" 
      title="My Journey" 
      subtitle="A timeline of growth, learning, and achievement"
      background="gradient"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>
        
        <div className="space-y-8">
          {journeyMilestones.map((milestone, index) => (
            <div key={index} className="flex gap-8 items-start">
              {/* Timeline dot */}
              <div className="hidden md:flex w-16 h-16 rounded-full bg-white shadow-elegant items-center justify-center shrink-0 relative z-10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent"></div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <ContentCard
                  title={milestone.title}
                  date={milestone.year}
                  description={milestone.description}
                  className={milestone.highlight ? "ring-2 ring-primary/20" : ""}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default JourneySection;