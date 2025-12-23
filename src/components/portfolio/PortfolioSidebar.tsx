import { useState, useEffect } from "react";
import {
  User,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  FileText,
  Trophy,
  PenTool,
  Mail,
  Linkedin,
  Github,
  Home,
  Shield
} from "lucide-react";
import smLogo from "@/assets/sm-logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const portfolioSections = [
  { id: "hero", title: "Home", icon: Home },
  { id: "about", title: "About", icon: User },
  { id: "journey", title: "Journey", icon: MapPin },
  { id: "experience", title: "Experience", icon: Briefcase },
  { id: "education", title: "Education", icon: GraduationCap },
  { id: "certifications", title: "Certifications", icon: Award },
  { id: "projects", title: "Projects", icon: BookOpen },
  { id: "publications", title: "Publications", icon: FileText },
  { id: "training", title: "Training", icon: Shield },
  { id: "books", title: "Books", icon: PenTool },
  { id: "achievements", title: "Awards", icon: Trophy },
  { id: "newsletter", title: "NewsLetter", icon: PenTool },
];

export function PortfolioSidebar() {
  const { state } = useSidebar();
  const [activeSection, setActiveSection] = useState("hero");
  const isCollapsed = state === "collapsed";

  useEffect(() => {
    const handleScroll = () => {
      const sections = portfolioSections.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(portfolioSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-sidebar text-sidebar-foreground">
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-sidebar-primary flex items-center justify-center overflow-hidden">
              <img src={smLogo} alt="SM Logo" className="w-10 h-10 object-contain" />
            </div>
            {!isCollapsed && (
              <div>
                <h3 className="font-bold text-lg text-sidebar-foreground">Suneeta Modekurty</h3>
                <p className="text-sm text-sidebar-foreground/70">AI Governance Expert</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup className="flex-1">
          <SidebarGroupLabel className="text-sidebar-foreground/60 px-6 py-3">
            {!isCollapsed ? "Portfolio Sections" : "Nav"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-3">
              {portfolioSections.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      transition-all duration-200 mb-1 rounded-lg
                      ${isActive(item.id)
                        ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg'
                        : 'hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground'
                      }
                      ${isCollapsed ? 'justify-center px-2' : 'justify-start px-4'}
                    `}
                  >
                    <item.icon className={`${isCollapsed ? 'w-5 h-5' : 'w-4 h-4 mr-3'}`} />
                    {!isCollapsed && <span className="font-medium">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Social Links */}
        {!isCollapsed && (
          <>
            <Separator className="bg-sidebar-border mx-6" />
            <div className="p-6">
              <h4 className="text-sm font-medium text-sidebar-foreground/60 mb-3">Connect</h4>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 hover:bg-sidebar-accent text-sidebar-foreground"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 hover:bg-sidebar-accent text-sidebar-foreground"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 hover:bg-sidebar-accent text-sidebar-foreground"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Sidebar Toggle */}
        <div className="p-3 border-t border-sidebar-border">
          <SidebarTrigger className="w-full justify-center hover:bg-sidebar-accent text-sidebar-foreground" />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}