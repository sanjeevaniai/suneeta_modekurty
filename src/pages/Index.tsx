import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { PortfolioSidebar } from "@/components/portfolio/PortfolioSidebar";
import Reveal from "@/components/portfolio/Reveal";
import HeroSection from "@/components/portfolio/HeroSection";
import ProblemSection from "@/components/portfolio/ProblemSection";
import HowIHelpSection from "@/components/portfolio/HowIHelpSection";
import CredentialsSection from "@/components/portfolio/CredentialsSection";
import EventsSection from "@/components/portfolio/EventsSection";
import AboutSection from "@/components/portfolio/AboutSection";
import Footer from "@/components/portfolio/Footer";

// --- Deferred to v2 (files kept on disk, intentionally unmounted) ---
// JourneySection, ExperienceSection, EducationSection, CertificationsSection,
// ProjectsSection, PublicationsSection, ProgramsSection, BooksSection,
// AchievementsSection, BlogSection — these return in a deeper "More" area later.


const Index = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <PortfolioSidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          {/* Sidebar Toggle - Mobile */}
          <div className="fixed top-4 left-4 z-50 lg:hidden">
            <SidebarTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg w-12 h-12 rounded-full flex items-center justify-center">
              <Menu className="w-6 h-6" />
            </SidebarTrigger>
          </div>

          {/* Book a Call Button - Left side next to sidebar (desktop) */}
          <div className="fixed top-24 left-[272px] z-50 hidden lg:block">
            <Button
              size="lg"
              variant="default"
              onClick={() => window.open('https://calendar.notion.so/meet/siaai/0619', '_blank')}
              className="shadow-lg"
            >
              Book a Call
            </Button>
          </div>

          {/* Book a Call Button - Mobile (floating bottom right) */}
          <div className="fixed bottom-6 right-6 z-50 lg:hidden">
            <Button
              size="lg"
              variant="default"
              onClick={() => window.open('https://calendar.notion.so/meet/siaai/0619', '_blank')}
              className="shadow-lg rounded-full px-6 py-3 text-sm font-semibold"
            >
              Book a Call
            </Button>
          </div>

          <HeroSection />
          <Reveal><ProblemSection /></Reveal>

          {/* v2 SLOT — named framework block goes here (above "How I Help"). Intentionally empty for now.
              This is where the productized "AI Risk Baseline Assessment" (deliverables + timeframe)
              returns once the validation conversations show what the assessment should actually be. */}

          <Reveal><HowIHelpSection /></Reveal>
          <Reveal><CredentialsSection /></Reveal>
          <Reveal><EventsSection /></Reveal>
          <Reveal><AboutSection /></Reveal>
          <Reveal><Footer /></Reveal>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
