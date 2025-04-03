
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/4c784671-5e29-469e-bb9e-d56aa91bac8d.png" 
                  alt="Felix Muriuki working on laptop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-lg shadow-lg">
                <p className="font-bold text-primary">2025</p>
                <p className="text-sm">Journey Begins</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="section-heading">About Me</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              My New Journey As a Developer
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Born and raised in Kenya, my journey has been anything but ordinary. Life has taken me through winding paths, 
                filled with struggles, breakthroughs, and moments of unwavering faith.
              </p>
              
              <p>
                After high school, I had the opportunity to study a short course in videography, photography, and editing at 
                Daystar University. Though it lasted only a week, it ignited a passion for creativity.
              </p>
              
              <p>
                I taught myself computer assembling from scratch, mastering every component with my own hands. Later, I ventured 
                into beauty, makeup, and nail technology, skills I learned purely through self-determination.
              </p>
              
              <p>
                By mid-2024, a strong desire to pursue web development and Python began stirring within me. For months, I tirelessly 
                searched for scholarships. Then, one midnight, I opened my email and there it was. A message from PLP Academy. 
                I had been selected!
              </p>
              
              <p>
                What I had long desired since 2010 was finally manifesting in 2025. It reminded me that dreams don't die, they wait 
                for the right time. I have never been a developer before, but I've always admired those in the field.
              </p>
              
              <p className="font-medium text-foreground">
                This is just the beginning of my story. I am proof that persistence, faith, and the courage to start again can turn dreams into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
