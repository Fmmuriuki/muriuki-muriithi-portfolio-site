
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { InterestsSection } from "@/components/InterestsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PortfolioSlider } from "@/components/PortfolioSlider"; // Import the new component
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FadeInSection } from "@/components/FadeInSection";

const Index = () => {
  // Initialize the page with dark mode
  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection />
      
      <FadeInSection>
        <AboutSection />
      </FadeInSection>
      
      <FadeInSection>
        <EducationSection />
      </FadeInSection>
      
      <FadeInSection>
        <SkillsSection />
      </FadeInSection>
      
      <FadeInSection>
        <InterestsSection />
      </FadeInSection>
      
      <FadeInSection>
        <ProjectsSection />
      </FadeInSection>
      
      <FadeInSection>
        <PortfolioSlider /> {/* Add the new component right after ProjectsSection */}
      </FadeInSection>
      
      <FadeInSection>
        <ContactSection />
      </FadeInSection>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
