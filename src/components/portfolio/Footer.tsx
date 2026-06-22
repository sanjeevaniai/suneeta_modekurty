import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, Twitter, BookOpen, ArrowRight } from "lucide-react";

const BOOKING_URL = "https://calendar.notion.so/meet/siaai/0619";
const LINKEDIN_URL = "https://www.linkedin.com/in/smodekurty";
const AINSTEIN_URL = "https://ainstein.sanjeevaniai.com";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground hero-gradient">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Final CTA */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-animated-light">
          Let's measure what your AI risk actually is making it, mitigate it, and prove you did, before regulators, auditors, or the board ask
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
          If you're accountable for AI in a regulated organization, the first conversation is free —
          and useful either way
        </p>

        <Button
          size="lg"
          variant="secondary"
          onClick={() => window.open(BOOKING_URL, "_blank")}
          className="group"
        >
          Book a Call
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Connect — descriptive, crawlable text links */}
        <p className="text-base md:text-lg opacity-90 mt-12">
          Connect on{" "}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 hover:opacity-100"
          >
            LinkedIn
          </a>{" "}
          · Read my newsletter,{" "}
          <a
            href={AINSTEIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 hover:opacity-100"
          >
            A.I.N.S.T.E.I.N.
          </a>
        </p>

        {/* Social links — real anchors (crawlable) */}
        <div className="flex justify-center gap-4 mt-6">
          <Button asChild variant="ghost-hero" size="icon">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Suneeta Modekurty on LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="ghost-hero" size="icon">
            <a href={AINSTEIN_URL} target="_blank" rel="noopener noreferrer" aria-label="A.I.N.S.T.E.I.N. newsletter">
              <BookOpen className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="ghost-hero" size="icon">
            <a href="https://github.com/sanjeevaniai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="ghost-hero" size="icon">
            <a href="https://x.com/sanjeevaniai" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="ghost-hero" size="icon">
            <a href="mailto:suneeta@sanjeevaniai.com" aria-label="Email Suneeta Modekurty">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <Separator className="my-12 bg-white/20" />

        <p className="text-sm opacity-75">
          &copy; 2026 Suneeta Modekurty · Quantifying AI Risk · St. Louis.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
