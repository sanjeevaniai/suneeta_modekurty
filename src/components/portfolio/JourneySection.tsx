import Section from "./Section";
import ContentCard from "./ContentCard";

const JourneySection = () => {
  const journeyMilestones = [
    {
      year: "2025",
      title: "Founder & AI Governance Expert",
      description: "Founder and CEO of Sanjeevani AI. Built METRIS, the first platform to quantify AI governance risk in dollars, with 1,500+ assessments across 50+ jurisdictions. Built DeLARSify, a multi-modal AI platform for cancer patients with LARS. Obtained ISO/IEC 42001 Lead Auditor certification. Selected for Washington University CELect-STL program. Accepted into Founder Institute Core. Delivering AI Governance Awareness and Literacy Training for enterprises preparing for EU AI Act compliance.",
      highlight: true
    },
    {
      year: "2022-2024",
      title: "Senior AI Consultant",
      description: "Delivered enterprise AI solutions at First American with $5M annual savings and Centene with $500M+ compliance savings. Led global teams and implemented Responsible AI frameworks. Published cancer research on Oxaliplatin effects accepted by ASCO. Began building METRIS and DeLARSify.",
    },
    {
      year: "2018-2021",
      title: "Research, Cancer, and Reinvention",
      description: "Joined Washington University School of Medicine as Research Data Scientist. Accepted into PhD program. Diagnosed with cancer. Lost both parents. Made the decision to leave H-1B employment and apply for O-1A visa for extraordinary ability. The visa was approved without question. Advanced bioinformatics research at WashU and IUPUI, improving cancer diagnostics by 18% with CNN models.",
    },
    {
      year: "2020",
      title: "MS in Bioinformatics and Data Science",
      description: "Completed thesis titled 'Integrated Correlation Analysis of Proteomics and Transcriptomics Data in Alzheimer's Disease' at Indiana University. Established expertise in AI/ML and biological data analysis.",
    },
    {
      year: "2016",
      title: "Arrived in the United States",
      description: "Came to America with a dream to earn a PhD and become an entrepreneur. Already held four degrees from India: Bachelor's in Chemistry, Bachelor's in Education, Master's in Chemistry, Master's in Psychology.",
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