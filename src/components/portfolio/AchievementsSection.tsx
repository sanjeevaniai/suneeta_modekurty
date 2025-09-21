import Section from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      category: "Immigration & Recognition",
      icon: <Trophy className="w-8 h-8" />,
      color: "text-yellow-500",
      awards: [
        {
          title: "O-1A Visa for Extraordinary Ability",
          organization: "U.S. Citizenship and Immigration Services",
          year: "2025",
          description: "Granted for extraordinary ability in AI, Bioinformatics & Data Science - recognizing exceptional achievements and contributions to the field."
        }
      ]
    },
    {
      category: "Leadership & Innovation",
      icon: <Award className="w-8 h-8" />,
      color: "text-blue-500",
      awards: [
        {
          title: "AI Thought Leadership Award 2025",
          organization: "Leadership Federation",
          year: "2025",
          description: "Recognized for significant impact in Responsible AI and thought leadership in ethical AI development and implementation."
        }
      ]
    }
  ];

  return (
    <Section 
      id="achievements" 
      title="Achievements & Awards" 
      subtitle="Recognition for excellence, innovation, and impact"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((category, index) => (
          <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={category.color}>
                  {category.icon}
                </div>
                <span className="text-xl">{category.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {category.awards.map((award, awardIndex) => (
                  <div key={awardIndex} className="border-l-4 border-l-primary/30 pl-4">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="font-semibold text-base leading-tight">{award.title}</h4>
                      <Badge variant="secondary" className="shrink-0">{award.year}</Badge>
                    </div>
                    <p className="text-sm font-medium text-primary mb-2">{award.organization}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default AchievementsSection;