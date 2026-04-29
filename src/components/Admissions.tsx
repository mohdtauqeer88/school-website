import React from "react";
import { FileText, MapPin, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Section } from "./Section";
import { scrollTo } from "../lib/scroll";

const STEPS = [
  {
    step: "01",
    title: "Enquiry",
    desc: "Submit the online enquiry form or visit campus.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    step: "02",
    title: "Campus Tour",
    desc: "Experience our facilities and environment.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    step: "03",
    title: "Interaction",
    desc: "Meeting with our admission counselor.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    step: "04",
    title: "Enrollment",
    desc: "Submit documents and secure the seat.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
];

const AGE_CRITERIA = [
  { grade: "Nursery", age: "3+ Years" },
  { grade: "LKG", age: "4+ Years" },
  { grade: "UKG", age: "5+ Years" },
  { grade: "Class 1", age: "6+ Years" },
];

const DOCUMENTS = [
  "Birth Certificate (Municipal Corporation)",
  "Aadhar Card of Student and Parents",
  "Passport size photographs (Student & Parents)",
  "Previous year's report card (Class 2 onwards)",
  "Transfer Certificate (Class 2 onwards)",
];

export function Admissions() {
  return (
    <Section
      id="admissions"
      title="Join Our Community"
      subtitle="Admissions Process"
      className="bg-muted"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-border relative overflow-hidden group"
            >
              <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">
                Step {s.step}
              </div>
              <h4 className="text-lg font-bold text-secondary mb-2">{s.title}</h4>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
          <h4 className="text-xl font-serif font-bold text-secondary mb-6 text-center">
            Important Admission Information
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-bold text-primary mb-3">
                Age Criteria (As of March 31st)
              </h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {AGE_CRITERIA.map((row, i) => (
                  <li
                    key={i}
                    className={`flex justify-between pb-2 ${
                      i < AGE_CRITERIA.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span>{row.grade}</span>
                    <span className="font-medium text-secondary">{row.age}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-primary mb-3">Required Documents</h5>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                {DOCUMENTS.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => scrollTo("contact")}
            className="bg-accent hover:bg-accent/90 text-secondary font-bold rounded-full px-10 h-14 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Start Application Process <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Admissions open for Academic Session 2026-27. Limited seats available.
          </p>
        </div>
      </div>
    </Section>
  );
}
