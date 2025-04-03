import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 dark:bg-secondary/10 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-6"></div>
          
          <div className="flex items-center gap-4 mb-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
               href="mailto:fmwmuriuki@gmail.com" 
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li><a href="#home" className="text-sm hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm hover:text-primary transition-colors">About</a></li>
              <li><a href="#education" className="text-sm hover:text-primary transition-colors">Education</a></li>
              <li><a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#interests" className="text-sm hover:text-primary transition-colors">Interests</a></li>
              <li><a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <div className="text-sm text-muted-foreground text-center">
            <p>© {currentYear} Felix Muriuki Muriithi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
