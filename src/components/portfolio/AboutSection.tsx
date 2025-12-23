import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="AI governance expert, healthcare AI innovator, and cancer researcher"
    >
      <div className="space-y-8">
        {/* Main About Me Content */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Suneeta Modekurty is an AI governance expert, healthcare AI innovator, and cancer researcher. Her work spans the development of AI systems to the frameworks that govern them responsibly.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            As Founder and CEO of <a href="https://sanjeevaniai.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SANJEEVANI AI</a>, she has built two AI platforms addressing critical gaps.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground">METRIS</strong> is the first platform to quantify AI governance risk in dollars, not adjectives. Employing 17 specialized AI agents, METRIS evaluates systems against 1,481 checkpoints spanning 50+ jurisdictions including the EU AI Act, NIST AI RMF, and ISO/IEC 42001. In production, the platform has completed 1,500+ assessments analyzing 43,000+ documents with 0.89 correlation to expert judgment.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground">DeLARSify</strong> is the first multi-modal AI platform for Low Anterior Resection Syndrome, affecting 150,000+ patients annually after colorectal cancer surgery. The platform analyzes microbiome, genetics, symptoms, and behavior to predict, manage, and discover treatments, achieving 75%+ pre-surgery prediction accuracy.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Her cancer research on the effects of Oxaliplatin on colorectal cancer patients has been accepted by ASCO. Additional publications include arXiv, endorsed by IBM Research, and Zenodo.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Suneeta holds ISO/IEC 42001 Lead Auditor certification, one of fewer than 500 worldwide qualified to audit AI management systems. She was granted the O-1A visa for extraordinary ability in AI/ML.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Beyond building platforms, she delivers AI Governance Awareness and Literacy Training for enterprises navigating EU AI Act compliance, helping organizations build internal capability before the August 2026 enforcement deadline.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Her work has been recognized through selection to Washington University's CELect-STL program for innovative ventures and acceptance into Founder Institute Core starting April 2025.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            She is currently developing an O'Reilly book titled <em>Quantitative Governance as Code</em> and speaks on AI governance at international conferences.
          </p>
        </div>

        {/* The Path Here Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">The Path Here</h3>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey began at the intersection of chemistry and education, where I discovered my passion for both scientific discovery and the transformative power of teaching. As an educator, I realized that truly empowering students required a deeper understanding of how we learn and grow. This insight led me to psychology, fundamentally changing my approach to education and enabling me to create personalized learning experiences that unlock each student's unique potential.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Driven by curiosity and a desire to make broader impact, I expanded into bioinformatics and data science, where I witnessed firsthand how data can revolutionize scientific research and improve human lives. This evolution naturally progressed into my current focus areas: artificial intelligence, governance, responsible AI, and risk management, where I am dedicated to building technology that prioritizes ethics, transparency, and human-centered design.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My contributions to AI, data science, and cancer research have been recognized through the O-1A visa for individuals with extraordinary ability, along with Data Science and AI Leadership awards. However, my story extends far beyond professional achievements. When I moved to the United States in 2016 to pursue my PhD and launch innovative products, an unexpected cancer diagnosis altered my trajectory. While challenging, this experience clarified my vision and accelerated my entrepreneurial path.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              As a cancer survivor and startup founder, I am now more committed than ever to developing solutions that drive meaningful innovation while keeping humanity at the center. I believe the future of technology depends not only on what we create, but on how responsibly we create it. My work bridges science, psychology, and data to ensure AI serves people, enhancing human potential rather than replacing it.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;