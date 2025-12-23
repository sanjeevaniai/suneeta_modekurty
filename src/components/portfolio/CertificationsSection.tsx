import Section from "./Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Star, Award } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      category: "AI & Data Science",
      icon: <Shield className="w-6 h-6" />,
      certs: [
        "AI Security and Governance, DSPM – Securiti.ai",
        "Generative AI: Fundamentals, Applications, and Challenges – Coursera",
        "Machine Learning: Data Science for Climate Change (Energy Efficiency of Buildings) – Omdena",
        "Data Engineering - Databricks"
      ]
    },
    {
      category: "Compliance & Privacy",
      icon: <Award className="w-6 h-6" />,
      certs: [
        "NIST 800-53r5: Introduction to Security and Privacy Controls – LinkedIn",
        "Building a HIPAA Compliance Program – LinkedIn",
        "GDPR Compliance – LinkedIn",
        "Implementing the NIST Privacy Framework – LinkedIn",
        "Building and Auditing a Cybersecurity Program – LinkedIn"
      ]
    },
    {
      category: "Product Management",
      icon: <Star className="w-6 h-6" />,
      certs: [
        "CSPO (Certified Scrum Product Owner)"
      ]
    }
  ];

  return (
    <Section 
      id="certifications" 
      title="Certifications" 
      subtitle="Professional credentials and continuous skill development"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((category, index) => (
          <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="text-primary">
                  {category.icon}
                </div>
                <span className="text-lg">{category.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.certs.map((cert, certIndex) => (
                  <Badge 
                    key={certIndex} 
                    variant="secondary" 
                    className="w-full justify-start p-3 h-auto text-left"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default CertificationsSection;