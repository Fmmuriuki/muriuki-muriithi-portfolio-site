
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function EducationSection() {
  const education = [
    {
      title: "Web Development & Python",
      institution: "PLP Academy",
      period: "2025 - Present",
      status: "Currently Pursuing",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
    },
    {
      title: "Videography, Photography & Editing",
      institution: "Daystar University",
      period: "Short Course",
      status: "Completed",
      icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
      title: "Secondary Education",
      institution: "Mavoko Secondary School",
      period: "Completed",
      status: "Graduated",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
    },
  ];

  const certifications = [
    "Digital Marketing",
    "Beauty & Nail Technology",
    "Videography, Photography & Editing",
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading mb-12 text-center">Education & Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {education.map((item, index) => (
            <Card key={index} className="bg-background border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {item.icon}
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.institution}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {item.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/50 dark:bg-secondary/10 rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4">Additional Certifications</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
