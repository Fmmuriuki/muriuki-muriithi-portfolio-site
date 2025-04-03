
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ProjectsSection() {
  // Placeholder projects for future development
  const projects = [
    {
      title: "Portfolio Website",
      description: "My first web development project - this personal portfolio website built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["HTML", "CSS", "React", "Tailwind"],
      status: "In Progress",
    },
    {
      title: "Task Manager Application",
      description: "A simple task management application to track daily tasks and priorities. (Future Project)",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["React", "Python", "Backend"],
      status: "Planned",
    },
    {
      title: "E-commerce Store",
      description: "An online store with product listings, cart functionality and user accounts. (Future Project)",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Full Stack", "Database", "UI/UX"],
      status: "Planned",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading mb-12 text-center">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          This is my first time diving into programming, and I'm excited to begin this journey. Below are current and future projects I plan to develop.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    project.status === "In Progress" 
                      ? "bg-amber-500/20 text-amber-600 dark:text-amber-400" 
                      : "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between p-6 pt-0">
                <Button variant="outline" size="sm" disabled={project.status === "Planned"}>
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" disabled={project.status === "Planned"}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
