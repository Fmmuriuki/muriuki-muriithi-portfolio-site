
import { Brain, Database, Code, Monitor, Server, Lock, Smartphone, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function InterestsSection() {
  const interests = [
    {
      title: "Continuous Learning",
      description: "Constantly improving my skills, from machine learning and AI to web development.",
      icon: <Brain className="h-12 w-12 text-primary" />,
    },
    {
      title: "Problem-Solving",
      description: "I love using code to solve real-world problems and make a meaningful impact.",
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
    },
    {
      title: "Full-Stack Development",
      description: "Aiming to master both front-end and back-end development to create complete solutions.",
      icon: <Code className="h-12 w-12 text-primary" />,
    },
    {
      title: "UX & Design",
      description: "Understanding how user-friendly interfaces and design play a vital role in development.",
      icon: <Monitor className="h-12 w-12 text-primary" />,
    },
    {
      title: "Mobile Development",
      description: "Exploring how to build apps for Android and iOS to reach wider audiences.",
      icon: <Smartphone className="h-12 w-12 text-primary" />,
    },
    {
      title: "Cloud Computing",
      description: "Eager to learn about deploying and managing applications on cloud platforms.",
      icon: <Server className="h-12 w-12 text-primary" />,
    },
    {
      title: "Data & ML",
      description: "Fascinated by the power of data and machine learning to build intelligent systems.",
      icon: <Database className="h-12 w-12 text-primary" />,
    },
    {
      title: "Cybersecurity",
      description: "Ensuring that systems and data are secure, protecting users in this digital age.",
      icon: <Lock className="h-12 w-12 text-primary" />,
    },
  ];

  return (
    <section id="interests" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading mb-12 text-center">My Interests</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          This new journey in programming excites me, and my passion lies in becoming an expert in everything related to programming.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <Card 
              key={index} 
              className="bg-background border-2 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {interest.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{interest.title}</h3>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
