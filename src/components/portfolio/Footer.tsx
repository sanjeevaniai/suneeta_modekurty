import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, Twitter, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>suneeta@sanjeevaniai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Missouri, MO</span>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button 
                variant="ghost-hero" 
                size="icon"
                onClick={() => window.open('https://www.linkedin.com/in/smodekurty/', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost-hero" 
                size="icon"
                onClick={() => window.open('https://github.com/data-aficionado/', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost-hero" 
                size="icon"
                onClick={() => window.open('https://x.com/sanjeevaniai', '_blank')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost-hero" 
                size="icon"
                onClick={() => window.open('mailto:suneeta@sanjeevaniai.com', '_blank')}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <div className="space-y-3">
              {[
                "About", "Experience", "Education", "Projects", 
                "Publications", "Books", "Awards", "NewsLetter"
              ].map((link) => (
                <Button 
                  key={link}
                  variant="ghost-hero" 
                  className="block w-full justify-start p-0 h-auto font-normal"
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase().replace('newsletter', 'newsletter'));
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Professional Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Professional Focus</h3>
            <div className="space-y-4 text-sm opacity-90">
              <p>• Technology Leadership & Innovation</p>
              <p>• AI Ethics & Responsible Development</p>
              <p>• Quantum Computing Research</p>
              <p>• Digital Transformation Strategy</p>
              <p>• Academic Research & Publications</p>
              <p>• Thought Leadership & Speaking</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-12 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
          <p>&copy; 2024 Suneeta Modekurty. All rights reserved.</p>
          <div className="flex gap-6">
            <Button variant="ghost-hero" className="p-0 h-auto font-normal">
              Privacy Policy
            </Button>
            <Button variant="ghost-hero" className="p-0 h-auto font-normal">
              Terms of Service
            </Button>
            <Button variant="ghost-hero" className="p-0 h-auto font-normal">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;