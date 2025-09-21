import Section from "./Section";
import ContentCard from "./ContentCard";

const EducationSection = () => {
const education = [
    {
      degree: "MS in Bioinformatics & Data Science",
      institution: "Indiana University, Indianapolis",
      date: "2020",
      description: "Advanced studies in AI/ML applications for biological data analysis, statistical modeling, and computational genomics."
    },
    {
      degree: "MA Psychology",
      institution: "University in India",
      date: "Previous",
      description: "Graduate studies in psychology providing foundation for understanding human behavior and decision-making."
    },
    {
      degree: "MS Analytical Chemistry & B.Sc. Chemistry",
      institution: "Universities in India",
      date: "Previous",
      description: "Strong analytical and research foundation in chemistry with laboratory experience and quantitative analysis."
    }
  ];

  return (
    <Section 
      id="education" 
      title="Education" 
      subtitle="Academic excellence and continuous learning"
      background="gradient"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map((edu, index) => (
          <ContentCard
            key={index}
            title={edu.degree}
            subtitle={edu.institution}
            date={edu.date}
            description={edu.description}
            className="h-full"
          />
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;