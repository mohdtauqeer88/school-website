import React from "react";
import { Star, BookOpen, Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Section } from "./Section";

const PROGRAMS = [
  {
    title: "Foundational Stage",
    grades: "Nursery, LKG, UKG",
    icon: <Star className="w-8 h-8 text-accent" />,
    desc: "A play-based approach focusing on motor skills, social interaction, and early cognitive development in a joyful, secure environment.",
    age: "Ages 3-6",
  },
  {
    title: "Preparatory Stage",
    grades: "Class 1 to 5",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    desc: "Building a strong conceptual foundation in core subjects while encouraging curiosity, creativity, and collaborative learning.",
    age: "Ages 6-11",
  },
  {
    title: "Middle Stage",
    grades: "Class 6 to 8",
    icon: <Trophy className="w-8 h-8 text-secondary" />,
    desc: "Comprehensive CBSE curriculum preparing students for higher education with advanced problem-solving, critical thinking, and practical skills.",
    age: "Ages 11-14",
  },
];

export function Classes() {
  return (
    <Section
      id="classes"
      title="Academic Journey"
      subtitle="Classes Offered"
      className="bg-white"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {PROGRAMS.map((prog, i) => (
          <Card
            key={i}
            className="border-border shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            <div className="h-2 w-full bg-gradient-to-r from-primary to-accent" />
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                  {prog.icon}
                </div>
                <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {prog.age}
                </div>
              </div>
              <h4 className="text-2xl font-serif font-bold text-secondary mb-2">
                {prog.title}
              </h4>
              <div className="text-primary font-bold text-sm uppercase tracking-wider mb-4 border-b border-border pb-4">
                {prog.grades}
              </div>
              <p className="text-muted-foreground leading-relaxed">{prog.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
