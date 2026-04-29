import React from "react";
import { CheckCircle2, Quote } from "lucide-react";
import { Section } from "./Section";

export function DirectorMessage() {
  return (
    <section className="py-16 bg-white border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <Quote className="w-12 h-12 text-muted-foreground/30" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary leading-snug">
              "Our mission is to cultivate not just successful students, but
              compassionate, resilient, and forward-thinking global citizens who
              will shape tomorrow."
            </h3>
            <div>
              <p className="font-bold text-lg text-primary">
                CMM English School Leadership
              </p>
              <p className="text-muted-foreground">
                Management &amp; Faculty, CMM English School
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-accent rounded-full -translate-x-4 translate-y-4 opacity-50" />
              <img
                src="images/director.jpg"
                alt="Director Portrait"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="Why CMM English School?" subtitle="Our Ethos">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-muted rounded-[2rem] transform -rotate-3 z-0" />
          <img
            src="images/about.png"
            alt="Students in classroom"
            className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-6 bg-accent text-secondary p-6 rounded-2xl shadow-lg z-20 max-w-[200px] border-2 border-white">
            <div className="font-serif font-bold text-3xl mb-1">A+</div>
            <div className="text-sm font-medium leading-tight">
              Rated for Academic Excellence
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-serif font-bold text-secondary mb-6 leading-tight">
            Empowering the next generation of leaders
          </h3>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            At CMM English School, we believe every child is unique and holds
            boundless potential. Our curriculum is thoughtfully designed to
            foster critical thinking, creativity, communication, and a lifelong
            love for learning.
          </p>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We provide a safe, warm, and nurturing environment where young
            learners from Nursery to Class 8 can explore their interests,
            develop essential life skills, and build a robust foundation for
            their future.
          </p>
          <ul className="space-y-4">
            {[
              "Holistic development integrating mind, body, and spirit",
              "State-of-the-art campus with advanced security",
              "Focus on character building and Indian values",
              "Highly qualified, empathetic teaching faculty",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-secondary font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
