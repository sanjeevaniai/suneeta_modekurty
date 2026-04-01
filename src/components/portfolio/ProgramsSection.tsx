import { useState } from "react";
import Section from "./Section";
import ContentCard from "./ContentCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight,
  GraduationCap,
  Users,
  BookOpen,
  Shield,
  Mic,
  PenTool,
  Gavel,
  Lock,
  ExternalLink,
  Star,
  Calendar,
  MapPin,
} from "lucide-react";

const FORMAT_BADGES = {
  live: (
    <Badge className="bg-red-500/10 text-red-600 border-red-200 text-xs">
      <Mic className="w-3 h-3 mr-1" /> Live Instruction
    </Badge>
  ),
  handsOn: (
    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 text-xs">
      Hands-on
    </Badge>
  ),
};

const LOCKED_TABS = ["courses", "trainings", "workshops", "authorship", "judging"] as const;

const LockedOverlay = () => (
  <div className="mt-8 flex flex-col items-center justify-center py-20 text-center">
    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
      <Lock className="w-8 h-8 text-muted-foreground" />
    </div>
    <p className="text-muted-foreground">
      This section is currently locked.
    </p>
  </div>
);

const ProgramsSection = () => {
  const [letterDialogOpen, setLetterDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [letterUnlocked, setLetterUnlocked] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordSubmit = () => {
    if (password === "washu2026") {
      setLetterUnlocked(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  // ─── COURSES ───
  const courses = [
    {
      title: "AI Governance and Trust Scoring",
      provider: "O'Reilly Media",
      date: "June 2026",
      description:
        "Nationally listed live training course covering AI governance frameworks, trust scoring methodologies, and building quantitative governance systems. Learn how to measure, score, and report AI trustworthiness across EU AI Act, NIST AI RMF, and ISO 42001.",
      audience: "AI practitioners, governance professionals, compliance teams",
      duration: "Live session",
      tags: ["O'Reilly Media", "AI Governance", "Trust Scoring", "EU AI Act"],
      formats: ["live"],
    },
  ];

  // ─── TRAININGS ───
  const trainings = [
    {
      title: "AI Governance Awareness",
      description:
        "Understand the regulatory landscape including EU AI Act, NIST AI RMF, and ISO/IEC 42001. Learn what AI governance means for your organization and how to build accountability structures.",
      audience: "Executives, boards, and compliance teams",
      duration: "Half-day or full-day",
      tags: ["Executive Education", "Compliance", "Leadership"],
      icon: Shield,
      formats: ["live"],
    },
    {
      title: "AI Literacy Fundamentals",
      description:
        "Meet EU AI Act Article 4 requirements. Build organization-wide understanding of AI capabilities, limitations, and responsible use. Practical exercises and real-world scenarios.",
      audience: "Employees at all levels",
      duration: "2-4 hours",
      tags: ["AI Literacy", "EU AI Act", "Organization-wide"],
      icon: Users,
      formats: ["live", "handsOn"],
    },
    {
      title: "ISO 42001 Foundation",
      description:
        "Introduction to the AI Management System standard. Understanding requirements, implementation approach, and certification preparation.",
      audience: "Quality managers, AI teams, compliance professionals",
      duration: "1-2 days",
      tags: ["ISO 42001", "Certification", "Management System"],
      icon: GraduationCap,
      formats: ["live", "handsOn"],
    },
  ];

  // ─── WORKSHOPS ───
  const workshops = [
    {
      title: "EU AI Act Readiness Workshop",
      description:
        "Practical preparation for August 2026 enforcement. Risk classification, documentation requirements, compliance gap analysis, and remediation roadmap.",
      audience: "Organizations with AI systems serving EU markets",
      duration: "Full-day workshop",
      tags: ["EU AI Act", "Compliance", "Gap Analysis", "Remediation"],
      formats: ["live", "handsOn"],
    },
    {
      title: "METRIS Trust Scoring Workshop",
      description:
        "Hands-on workshop using the METRIS platform to assess AI systems against 1,481 checkpoints across 50+ jurisdictions. Participants work with real scenarios to produce quantitative trust scores.",
      audience: "AI teams, risk managers, compliance professionals",
      duration: "Half-day",
      tags: ["METRIS", "Trust Scoring", "Quantitative Governance", "Risk Assessment"],
      formats: ["live", "handsOn"],
    },
  ];

  // ─── SPEAKING ───
  const speakingEngagements = [
    {
      title: "AI Systems Design, Deployment & Responsible Governance",
      event: "Center for Experiential Learning",
      organization: "Washington University in St. Louis — Olin Business School",
      date: "April 3, 2026",
      status: "upcoming" as const,
      description:
        "Invited to present to students from across Washington University on how AI systems are designed, deployed, and governed responsibly. Sharing experience as founder of Sanjeevani AI and CELect St. Louis program participant.",
      hasLetter: true,
      tags: ["WashU", "AI Governance", "Responsible AI", "Experiential Learning"],
    },
  ];

  // ─── AUTHORSHIP ───
  const authorshipItems = [
    {
      title: "The AI-Human Synergy: A Data Scientist's Vision for the Future",
      type: "Published Book",
      publisher: "Amazon (Kindle)",
      year: "2024",
      description:
        "A visionary exploration of how artificial intelligence and human intelligence can work together to create a better future, written from a data scientist's perspective.",
      link: "https://www.amazon.com/AI-Human-Synergy-Scientists-Vision-Future-ebook/dp/B0DF8XFW1N",
      tags: ["Amazon", "AI", "Human Intelligence", "Published"],
    },
    {
      title: "Quantitative Governance as Code",
      type: "Upcoming Book",
      publisher: "In Development",
      year: "2026",
      description:
        "A forthcoming book on embedding AI governance frameworks directly into code and automated systems, translating compliance requirements into programmable, auditable governance pipelines.",
      tags: ["AI Governance", "Governance as Code", "Upcoming"],
    },
    {
      title: "A.I.N.S.T.E.I.N. Newsletter",
      type: "Newsletter",
      publisher: "Sanjeevani AI",
      year: "Ongoing",
      description:
        "Artificial Intelligence Norms, Standards, Trust, Ethics, Integrity & Navigation — insights on AI governance, responsible AI, and navigating the evolving regulatory landscape.",
      link: "https://ainstein.sanjeevaniai.com",
      tags: ["Newsletter", "AI Governance", "Responsible AI"],
    },
  ];

  // ─── JUDGING ───
  const judgingItems = [
    {
      title: "MBA Student Evaluator — CELect Experiential Learning Program",
      organization: "Washington University in St. Louis — Olin Business School",
      date: "2025 - 2026",
      description:
        "Evaluated MBA students at WashU Olin Business School as part of the CELect experiential learning program. Assessed student projects on AI strategy, governance frameworks, and business applications of responsible AI.",
      tags: ["WashU", "MBA", "CELect", "AI Strategy", "Evaluation"],
    },
  ];

  return (
    <Section
      id="programs"
      title="Programs"
      subtitle="Courses, training, workshops, speaking engagements, authorship, and judging"
    >
      <Tabs defaultValue="speaking" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/50 p-2 rounded-xl">
          <TabsTrigger value="courses" className="flex items-center gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <GraduationCap className="w-4 h-4" /> Courses <Lock className="w-3 h-3 ml-1 opacity-50" />
          </TabsTrigger>
          <TabsTrigger value="trainings" className="flex items-center gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Shield className="w-4 h-4" /> Trainings <Lock className="w-3 h-3 ml-1 opacity-50" />
          </TabsTrigger>
          <TabsTrigger value="workshops" className="flex items-center gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <BookOpen className="w-4 h-4" /> Workshops <Lock className="w-3 h-3 ml-1 opacity-50" />
          </TabsTrigger>
          <TabsTrigger value="speaking" className="flex items-center gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Mic className="w-4 h-4" /> Speaking
          </TabsTrigger>
          <TabsTrigger value="authorship" className="flex items-center gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <PenTool className="w-4 h-4" /> Authorship
          </TabsTrigger>
          <TabsTrigger value="judging" className="flex items-center gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Gavel className="w-4 h-4" /> Judging <Lock className="w-3 h-3 ml-1 opacity-50" />
          </TabsTrigger>
        </TabsList>

        {/* ─── COURSES TAB (LOCKED) ─── */}
        <TabsContent value="courses" className="mt-8">
          <LockedOverlay />
        </TabsContent>

        {/* ─── TRAININGS TAB (LOCKED) ─── */}
        <TabsContent value="trainings" className="mt-8">
          <LockedOverlay />
        </TabsContent>

        {/* ─── WORKSHOPS TAB (LOCKED) ─── */}
        <TabsContent value="workshops" className="mt-8">
          <LockedOverlay />
        </TabsContent>

        {/* ─── SPEAKING TAB ─── */}
        <TabsContent value="speaking" className="mt-8">
          <div className="grid gap-6">
            {speakingEngagements.map((engagement, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {engagement.status === "upcoming" && (
                          <Badge className="bg-primary text-primary-foreground animate-pulse">
                            Upcoming
                          </Badge>
                        )}
                        {engagement.status === "ongoing" && (
                          <Badge variant="secondary">Ongoing</Badge>
                        )}
                        {FORMAT_BADGES.live}
                      </div>
                      <CardTitle className="text-lg mb-1">{engagement.title}</CardTitle>
                      <p className="text-base font-medium text-primary">{engagement.organization}</p>
                      <p className="text-sm text-muted-foreground">{engagement.event}</p>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      <Calendar className="w-3 h-3 mr-1" />
                      {engagement.date}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    {engagement.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {engagement.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {engagement.hasLetter && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-auto"
                        onClick={() => {
                          setLetterDialogOpen(true);
                          setLetterUnlocked(false);
                          setPassword("");
                          setPasswordError(false);
                        }}
                      >
                        <Lock className="w-3 h-3 mr-1.5" />
                        View Engagement Letter
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ─── AUTHORSHIP TAB ─── */}
        <TabsContent value="authorship" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card border-0 hover:shadow-elegant transition-smooth h-full flex flex-col">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/ai-human-synergy-cover.png"
                  alt="The AI-Human Synergy book cover"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-white">Published</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg leading-tight">
                  The AI-Human Synergy: A Data Scientist's Vision for the Future
                </CardTitle>
                <p className="text-sm font-medium text-primary">Amazon (Kindle) · 2024</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  A visionary exploration of how artificial intelligence and human intelligence can work together to create a better future, written from a data scientist's perspective.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open("https://www.amazon.com/AI-Human-Synergy-Scientists-Vision-Future-ebook/dp/B0DF8XFW1N", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Amazon
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ─── JUDGING TAB (LOCKED) ─── */}
        <TabsContent value="judging" className="mt-8">
          <LockedOverlay />
        </TabsContent>
      </Tabs>

      {/* ─── INSTRUCTOR SECTION ─── */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Instructor</h3>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Avatar className="w-24 h-24 border-4 border-primary/20 shadow-elegant">
              <AvatarImage
                src="/Suneeta-new.png"
                alt="Suneeta Modekurty"
                className="object-cover"
                style={{ objectPosition: "center 35%" }}
              />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-semibold mb-3">Suneeta Modekurty</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  • ISO/IEC 42001 Lead Auditor (fewer than 500 worldwide)
                </p>
                <p>• O-1A Visa for Extraordinary Ability in AI/ML</p>
                <p>
                  • Approved O'Reilly Media Live Training Instructor
                </p>
                <p>
                  • 25 years in regulated industries (healthcare, fintech, life sciences)
                </p>
                <p>
                  • Founder & CEO,{" "}
                  <a
                    href="https://sanjeevaniai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    SANJEEVANI AI
                  </a>
                </p>
                <p>• Builder of METRIS and DeLARSify</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="text-center mt-12">
        <Button
          size="lg"
          variant="default"
          onClick={() =>
            window.open("https://calendar.notion.so/meet/siaai/0619", "_blank")
          }
          className="group"
        >
          Book a Call
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* ─── PASSWORD-LOCKED LETTER DIALOG ─── */}
      <Dialog open={letterDialogOpen} onOpenChange={setLetterDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Engagement Letter
            </DialogTitle>
            <DialogDescription>
              This document is password-protected. Please enter the access code to view.
            </DialogDescription>
          </DialogHeader>
          {!letterUnlocked ? (
            <div className="space-y-4 pt-2">
              <Input
                type="password"
                placeholder="Enter access code"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
                className={passwordError ? "border-red-500" : ""}
              />
              {passwordError && (
                <p className="text-sm text-red-500">
                  Incorrect access code. Please try again.
                </p>
              )}
              <Button onClick={handlePasswordSubmit} className="w-full">
                Unlock
              </Button>
            </div>
          ) : (
            <div className="pt-2">
              <img
                src="/washu-letter.png"
                alt="WashU Engagement Letter"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
};

export default ProgramsSection;
