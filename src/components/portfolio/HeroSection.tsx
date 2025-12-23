import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Mail, Linkedin, Github, Sparkles } from "lucide-react";
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
              <AvatarImage src="/Suneeta.jpeg" alt="Suneeta Modekurty" className="object-cover" style={{ objectPosition: 'center 35%' }} />
              <AvatarFallback className="flex items-center justify-center bg-primary/10">
                <img src={smLogo} alt="SM Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
              </AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="mb-8 text-foreground font-light">
            <SignatureAnimation 
              text="Suneeta Modekurty" 
              className="block font-bold mb-4 signature-animation"
            />
            <span className="block text-2xl md:text-3xl text-muted-foreground">Quantifying AI Governance Risk</span>
          </h1>
          
        </div>

      </div>
    </section>
  );
};

export default HeroSection;