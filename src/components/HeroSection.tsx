
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background"></div>
        <div className="h-full w-full bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <Avatar className="w-48 h-48 border-4 border-primary/50">
              <AvatarImage 
                src="/lovable-uploads/928722d7-0f77-4898-bb74-a076256e24ce.png" 
                alt="Felix Muriuki Muriithi" 
                className="object-cover"
              />
              <AvatarFallback>FM</AvatarFallback>
            </Avatar>
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-primary mb-4 font-semibold animate-fade-in">Hello, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              Felix Muriuki Muriithi
            </h1>
            <h2 className="text-2xl md:text-4xl text-muted-foreground font-medium mb-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
              Aspiring Software Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-up" style={{ animationDelay: "600ms" }}>
              Embarking on a new journey into web development and Python programming. 
              Passionate about continuous learning and eager to build impactful projects.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 animate-fade-up" style={{ animationDelay: "800ms" }}>
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
