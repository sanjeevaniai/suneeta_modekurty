import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Mail, Linkedin, Github, Sparkles, ArrowRight } from "lucide-react";
import smLogo from "@/assets/sm-logo.png";
import SignatureAnimation from "./SignatureAnimation";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Unique Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 animate-spin" style={{ animationDuration: "60s" }}></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-12 animate-fade-in">
          {/* Profile Image */}
          <div className="mt-12 mb-8 flex justify-center">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20 shadow-elegant">
              <AvatarImage src="/Suneeta-new.png" alt="Suneeta Modekurty" className="object-cover" style={{ objectPosition: 'center 35%' }} />
              <AvatarFallback className="flex items-center justify-center bg-primary/10">
                <img src={smLogo} alt="SM Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="mb-8 text-foreground font-light">
            {/* Name */}
            <SignatureAnimation
              text="Suneeta Modekurty"
              className="block font-bold mb-4 signature-animation"
            />
            {/* Eyebrow */}
            <p className="block text-sm md:text-base uppercase tracking-[0.25em] text-primary font-semibold mb-6">
              AI Governance Advisor
            </p>
            {/* The single H1 */}
            <h1 className="block text-3xl md:text-5xl font-bold text-gradient-animated mb-6 max-w-4xl mx-auto leading-tight">
              Quantifying AI Risk — so leaders can trust what their AI tells them.
            </h1>
            {/* Sub-headline */}
            <p className="block text-xl md:text-2xl font-semibold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
              Measure your AI risk, mitigate it, and prove you did, before regulators, auditors, or the board ask
            </p>
            {/* Positioning line */}
            <p className="block text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              I turn "is our AI safe?" into a defensible number — for regulated organizations that can't afford to get it wrong
            </p>
            {/* Proof line — O-1A first */}
            <p className="block text-base md:text-lg text-muted-foreground/80 max-w-3xl mx-auto">
              O-1A visa for extraordinary ability in AI, data science &amp; bioinformatics · ISO 42001 Lead Auditor · Master's in Bioinformatics · O'Reilly instructor
            </p>
          </div>

          <div className="flex justify-center">
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

      </div>
    </section>
  );
};

export default HeroSection;