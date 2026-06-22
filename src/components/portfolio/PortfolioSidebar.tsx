import { useState, useEffect } from "react";
import {
  User,
  Briefcase,
  Award,
  Mail,
  Linkedin,
  Github,
  Home,
  AlertCircle,
  Mic
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
  { id: "problem", title: "The Problem", icon: AlertCircle },
  { id: "how-i-help", title: "How I Help", icon: Briefcase },
  { id: "credentials", title: "Credentials", icon: Award },
  { id: "events", title: "Events", icon: Mic },
  { id: "about", title: "About", icon: User },
  { id: "contact", title: "Get in Touch", icon: Mail },
];

export function PortfolioSidebar() {
  const { state } = useSidebar();
  const [activeSection, setActiveSection] = useState("hero");
  const isCollapsed = state === "collapsed";

  useEffect(() => {
    // The page scrolls inside the <main> container, not the window, so track
    // active section via each section's position relative to the viewport.
    let raf = 0;
    const handleScroll = () => {
      raf = 0;
      // A section becomes "active" once its top scrolls above this line
      // (~40% down the viewport) — i.e., when it dominates the upper half of
      // the screen — rather than only when its very top reaches the top edge.
      const line = (window.innerHeight || document.documentElement.clientHeight) * 0.4;
      let current = portfolioSections[0]?.id;
      for (const item of portfolioSections) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) {
          current = item.id;
        }
      }
      if (current) setActiveSection(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(handleScroll);
    };

    handleScroll();
    // capture:true so this also catches scroll from the inner <main> scroller.
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true } as EventListenerOptions);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
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
                <p className="text-sm text-sidebar-foreground/70">Quantifying AI Risk</p>
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
                  onClick={() => window.open('https://www.linkedin.com/in/smodekurty', '_blank')}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 hover:bg-sidebar-accent text-sidebar-foreground"
                  onClick={() => window.open('https://github.com/sanjeevaniai', '_blank')}
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 hover:bg-sidebar-accent text-sidebar-foreground"
                  onClick={() => window.open('https://x.com/sanjeevaniai', '_blank')}
                >
                  <span className="w-4 h-4 font-bold text-xs flex items-center justify-center">𝕏</span>
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