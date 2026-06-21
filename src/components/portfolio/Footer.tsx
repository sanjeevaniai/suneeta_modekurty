import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, Twitter, ArrowRight } from "lucide-react";

const BOOKING_URL = "https://calendar.notion.so/meet/siaai/0619";

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

        {/* Social links */}
        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="ghost-hero"
            size="icon"
            onClick={() => window.open("https://www.linkedin.com/in/smodekurty/", "_blank")}
          >
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost-hero"
            size="icon"
            onClick={() => window.open("https://github.com/sanjeevaniai", "_blank")}
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost-hero"
            size="icon"
            onClick={() => window.open("https://x.com/sanjeevaniai", "_blank")}
          >
            <Twitter className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost-hero"
            size="icon"
            onClick={() => window.open("mailto:suneeta@sanjeevaniai.com", "_blank")}
          >
            <Mail className="w-5 h-5" />
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
