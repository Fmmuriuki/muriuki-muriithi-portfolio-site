
import { Code, Database, Layout, Palette, FileCode, MonitorSmartphone } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <FileCode className="h-6 w-6" />,
      items: [
        { name: "HTML", level: 30 },
        { name: "CSS", level: 25 },
        { name: "JavaScript", level: 20 },
        { name: "Python", level: 15 },
      ],
    },
    {
      category: "Web Development",
      icon: <Layout className="h-6 w-6" />,
      items: [
        { name: "Responsive Design", level: 20 },
        { name: "Tailwind CSS", level: 25 },
        { name: "React", level: 10 },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: <Code className="h-6 w-6" />,
      items: [
        { name: "VS Code", level: 40 },
        { name: "Git", level: 20 },
        { name: "Command Line", level: 30 },
      ],
    },
    {
      category: "Design",
      icon: <Palette className="h-6 w-6" />,
      items: [
        { name: "Adobe Illustrator", level: 70 },
        { name: "UI/UX Basics", level: 35 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading mb-12 text-center">Skills & Expertise</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          As I begin my programming journey, I'm developing these skills while leveraging my existing expertise in creativity and self-learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex} 
              className="bg-background p-6 rounded-lg border border-border hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>

              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level < 30 ? 'Learning' : skill.level < 60 ? 'Intermediate' : 'Advanced'}
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-background p-6 md:p-8 rounded-lg border border-border">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <MonitorSmartphone className="h-6 w-6 text-primary" />
            <span>Other Relevant Skills</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Digital Marketing",
              "Business Management",
              "Computer Assembly",
              "Videography",
              "Photography",
              "Video Editing",
              "Beauty & Nail Technology",
              "Self Learning"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-secondary/50 dark:bg-secondary/30 py-3 px-4 rounded-md text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
