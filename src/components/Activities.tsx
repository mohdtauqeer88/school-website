import React from "react";
import { Card, CardContent } from "./ui/card";
import { Section } from "./Section";

const ACTIVITIES = [
  {
    title: "Sports & Athletics",
    desc: "Basketball, Football, Cricket, Athletics, and Indoor Games.",
    icon: "⚽",
  },
  {
    title: "Performing Arts",
    desc: "Classical and Western Dance, Vocal and Instrumental Music.",
    icon: "🎵",
  },
  {
    title: "Visual Arts",
    desc: "Painting, Sketching, Pottery, Craft, and Sculpture.",
    icon: "🎨",
  },
  {
    title: "Clubs & Societies",
    desc: "Robotics, Eco Club, Debate, Drama, and Literature Club.",
    icon: "🔬",
  },
];

export function Activities() {
  return (
    <Section
      id="activities"
      title="Beyond the Classroom"
      subtitle="Extracurriculars"
      className="bg-white"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACTIVITIES.map((activity, idx) => (
          <Card
            key={idx}
            className="border-border shadow-sm hover:shadow-md transition-shadow group text-center"
          >
            <CardContent className="p-8">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {activity.icon}
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3 font-serif">
                {activity.title}
              </h4>
              <p className="text-sm text-muted-foreground">{activity.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
