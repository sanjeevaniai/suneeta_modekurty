import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { PortfolioSidebar } from "@/components/portfolio/PortfolioSidebar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import JourneySection from "@/components/portfolio/JourneySection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import PublicationsSection from "@/components/portfolio/PublicationsSection";
import TrainingSection from "@/components/portfolio/TrainingSection";
import BooksSection from "@/components/portfolio/BooksSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import BlogSection from "@/components/portfolio/BlogSection";
import Footer from "@/components/portfolio/Footer";


const Index = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <PortfolioSidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Sidebar Toggle */}
          <div className="fixed top-4 right-4 z-50 lg:hidden">
            <SidebarTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg w-12 h-12 rounded-full" />
          </div>

          {/* Book a Call Button - Left side next to sidebar (desktop) */}
          <div className="fixed top-24 left-[272px] z-50 hidden lg:block">
            <Button
              size="lg"
              variant="default"
              onClick={() => window.open('https://topmate.io/suneetamodekurty/', '_blank')}
              className="shadow-lg"
            >
              Book a Call
            </Button>
          </div>

          {/* Book a Call Button - Mobile */}
          <div className="fixed top-20 left-4 z-50 lg:hidden">
            <Button
              size="sm"
              variant="default"
              onClick={() => window.open('https://topmate.io/suneetamodekurty/', '_blank')}
              className="shadow-lg"
            >
              Book a Call
            </Button>
          </div>

          <HeroSection />
          <AboutSection />
          <JourneySection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
          <ProjectsSection />
          <PublicationsSection />
          <TrainingSection />
          <BooksSection />
          <AchievementsSection />
          <BlogSection />
          <Footer />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
