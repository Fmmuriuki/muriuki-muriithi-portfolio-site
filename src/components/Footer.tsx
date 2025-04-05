import { Facebook, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 dark:bg-secondary/10 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-6"></div>
          
          <div className="flex items-center gap-4 mb-6">
            <a 
              href="https://www.facebook.com/share/18uSR2dF4n/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Visit my Facebook profile"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/felix-m-muriuki-05257982" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://www.tiktok.com/@felix_amuray?_t=ZM-8vG8tnJcin9&_r=1" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Visit my TikTok profile"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-tiktok"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a 
              href="mailto:fmwmuriuki@gmail.com" 
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Send me an email"
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
