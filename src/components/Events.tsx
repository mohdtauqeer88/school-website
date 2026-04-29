import React from "react";
import { Clock } from "lucide-react";
import { Section } from "./Section";
import { EVENTS } from "../config";

export function Events() {
  return (
    <Section
      id="events"
      title="Upcoming Events"
      subtitle="Calendar"
      className="bg-white"
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {EVENTS.map((event, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-6 bg-white border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-row md:flex-col items-center justify-center bg-muted/50 rounded-xl px-6 py-4 min-w-[120px] text-center border border-border">
              <span className="text-3xl font-serif font-bold text-primary mr-2 md:mr-0">
                {event.date}
              </span>
              <span className="text-sm font-bold text-secondary tracking-widest">
                {event.month}
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-secondary mb-2">
                {event.title}
              </h4>
              <div className="flex items-center text-sm font-medium text-primary mb-3">
                <Clock className="w-4 h-4 mr-2" /> {event.time}
              </div>
              <p className="text-muted-foreground text-sm">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
