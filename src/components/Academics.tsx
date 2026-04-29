import React, { useState } from "react";
import { CheckCircle2, FileText, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Section } from "./Section";

const TABS = [
  { value: "approach", label: "Learning Approach" },
  { value: "subjects", label: "Core Subjects" },
  { value: "assessment", label: "Assessment" },
];

const SUBJECTS = [
  { name: "English", type: "Core Language" },
  { name: "Hindi", type: "Second Language" },
  { name: "Mathematics", type: "Core Subject" },
  { name: "Science", type: "EVS / General Science" },
  { name: "Social Science", type: "History & Civics" },
  { name: "Computer Science", type: "IT & Coding" },
  { name: "Sanskrit / French", type: "Third Language (Class 6+)" },
  { name: "General Knowledge", type: "Awareness" },
];

function CurriculumTabs() {
  const [activeTab, setActiveTab] = useState("approach");

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto p-1 bg-white rounded-xl shadow-sm">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={`text-base py-3 rounded-lg transition-all font-medium ${
              activeTab === tab.value
                ? "bg-primary text-white shadow-sm"
                : "text-secondary hover:bg-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border">
        {activeTab === "approach" && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-serif font-bold text-secondary">
                Experiential &amp; Integrated Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our approach goes beyond rote learning. We align with the latest
                National Education Policy (NEP) guidelines, emphasizing
                experiential learning where concepts are understood through
                hands-on activities, projects, and real-world applications.
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="font-medium text-secondary">
                    Interdisciplinary projects
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="font-medium text-secondary">
                    Technology-integrated classrooms
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="font-medium text-secondary">
                    Focus on 21st-century skills (4Cs)
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-muted rounded-xl p-6 flex flex-col justify-center items-center text-center border border-border">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-bold text-secondary mb-2">NEP Aligned</h4>
              <p className="text-sm text-muted-foreground">
                Curriculum designed in accordance with the National Education
                Policy 2020.
              </p>
            </div>
          </div>
        )}

        {activeTab === "subjects" && (
          <>
            <h3 className="text-2xl font-serif font-bold text-secondary mb-6">
              Comprehensive Subject Offerings
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SUBJECTS.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-border rounded-xl bg-muted/30"
                >
                  <div className="font-bold text-secondary">{sub.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {sub.type}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "assessment" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-secondary">
              Continuous &amp; Comprehensive Evaluation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We follow a stress-free evaluation system that measures a
              student's progress consistently throughout the academic year,
              focusing on both scholastic and co-scholastic areas.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card className="shadow-none border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" /> Formative
                    Assessments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Class tests, quizzes, projects, assignments, and
                    presentations conducted regularly to monitor understanding.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <FileText className="w-5 h-5 text-secondary" /> Summative
                    Assessments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Half-yearly and annual examinations designed to test
                    conceptual clarity and application of knowledge.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Academics() {
  return (
    <Section
      id="academics"
      title="CBSE Curriculum"
      subtitle="Academics"
      className="bg-muted"
    >
      <CurriculumTabs />
    </Section>
  );
}
