import React from "react";
import { Users, BookOpen, Info, Trophy, MapPin } from "lucide-react";
import { Section } from "./Section";

const FACILITIES = [
  {
    title: "Smart Classrooms",
    desc: "Spacious, well-ventilated rooms equipped with smart boards and ergonomic seating for interactive learning.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Advanced Laboratories",
    desc: "Fully equipped Composite Science Lab and modern Computer Labs ensuring hands-on practical learning.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Extensive Library",
    desc: "A vast, quiet repository of books, encyclopedias, and digital resources fostering a reading culture.",
    icon: <Info className="w-6 h-6" />,
  },
  {
    title: "Sports Complex",
    desc: "Expansive green playground, specialized courts, and dedicated coaches for physical education.",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: "Safe Transport",
    desc: "GPS and CCTV enabled school buses with female attendants covering major city routes.",
    icon: <MapPin className="w-6 h-6" />,
  },
];

export function Facilities() {
  return (
    <Section
      id="facilities"
      title="World-Class Facilities"
      subtitle="Campus Life"
      className="bg-muted"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          {FACILITIES.map((fac, i) => (
            <div
              key={i}
              className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                {fac.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-2 font-serif">
                  {fac.title}
                </h4>
                <p className="text-muted-foreground text-sm">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 h-full">
          <img
            src="images/library.png"
            alt="Library"
            className="rounded-2xl object-cover w-full h-64 md:h-full shadow-lg"
          />
          <div className="grid grid-rows-2 gap-4 h-full">
            <img
              src="images/lab.png"
              alt="Science Lab"
              className="rounded-2xl object-cover w-full h-full shadow-lg"
            />
            <img
              src="images/sports.png"
              alt="Playground"
              className="rounded-2xl object-cover w-full h-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
