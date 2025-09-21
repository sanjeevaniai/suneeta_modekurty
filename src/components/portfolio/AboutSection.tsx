import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Passionate professional dedicated to excellence and innovation"
    >
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          My journey began at the intersection of chemistry and education, where I discovered my passion for both scientific discovery and the transformative power of teaching. As an educator, I realized that truly empowering students required a deeper understanding of how we learn and grow. This insight led me to psychology, fundamentally changing my approach to education and enabling me to create personalized learning experiences that unlock each student's unique potential.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Driven by curiosity and a desire to make broader impact, I expanded into bioinformatics and data science, where I witnessed firsthand how data can revolutionize scientific research and improve human lives. This evolution naturally progressed into my current focus areas: artificial intelligence, governance, responsible AI, and risk management, where I'm dedicated to building technology that prioritizes ethics, transparency, and human-centered design.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          My contributions to AI, data science, and cancer research have been recognized through the O-1A visa for individuals with extraordinary ability, along with Data Science and AI Leadership awards. However, my story extends far beyond professional achievements. When I moved to the United States in 2018 to pursue my PhD and launch innovative products, an unexpected cancer diagnosis altered my trajectory. While challenging, this experience clarified my vision and accelerated my entrepreneurial path.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          As a cancer survivor and startup founder, I'm now more committed than ever to developing solutions that drive meaningful innovation while keeping humanity at the center. I believe the future of technology depends not only on what we create, but on how responsibly we create it. My work bridges science, psychology, and data to ensure AI serves people, enhancing human potential rather than replacing it.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <Card className="text-center p-6 shadow-card border-0">
            <CardContent className="p-0">
              <User className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h4 className="font-semibold mb-2">Leadership</h4>
              <p className="text-sm text-muted-foreground">Inspiring teams to achieve excellence</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-card border-0">
            <CardContent className="p-0">
              <Target className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h4 className="font-semibold mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">Driving breakthrough solutions</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-card border-0">
            <CardContent className="p-0">
              <Heart className="w-8 h-8 mx-auto mb-3 text-destructive" />
              <h4 className="font-semibold mb-2">Impact</h4>
              <p className="text-sm text-muted-foreground">Creating meaningful change</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;