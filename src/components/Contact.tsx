import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Section } from "./Section";
import { SITE } from "../config";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Contact Us"
      className="bg-white"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-3xl font-serif font-bold text-secondary mb-6">
            We'd love to hear from you
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Whether you have a question about admissions, curriculum, or campus
            facilities, our team is ready to answer all your questions.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg">
                  Campus Address
                </h4>
                <p className="text-muted-foreground">
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                  <br />
                  {SITE.address.line3}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg">
                  Phone Numbers
                </h4>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg">
                  Email Address
                </h4>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md border border-border h-64 bg-muted">
            <iframe
              title="CMM English School location map"
              src="https://www.google.com/maps?q=Yahiyapur%20Power%20House%20Road%20Rashidabad%20Jaunpur%20Uttar%20Pradesh%20India&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <Card className="border-border shadow-xl bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
          <CardContent className="p-8 md:p-10">
            <h3 className="text-2xl font-serif font-bold text-secondary mb-6">
              Admission Enquiry Form
            </h3>
            <form
              className="space-y-5"
              action={SITE.formspree}
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Parent's Name *
                  </label>
                  <Input
                    name="parentName"
                    placeholder="John Doe"
                    required
                    className="bg-muted/30 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Child's Name *
                  </label>
                  <Input
                    name="childName"
                    placeholder="Jane Doe"
                    required
                    className="bg-muted/30 border-border"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    type="tel"
                    required
                    className="bg-muted/30 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    className="bg-muted/30 border-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">
                  Admission for Class *
                </label>
                <select
                  name="class"
                  required
                  className="flex h-10 w-full items-center justify-between rounded-md border border-border bg-muted/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select Class</option>
                  <option value="nursery">Nursery</option>
                  <option value="lkg">LKG</option>
                  <option value="ukg">UKG</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={String(n)}>
                      Class {n}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">
                  Message / Queries
                </label>
                <Textarea
                  name="message"
                  placeholder="How can we help you?"
                  className="min-h-[100px] bg-muted/30 border-border"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-lg rounded-xl shadow-md transition-transform hover:-translate-y-1"
              >
                Submit Enquiry
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Our admissions team will contact you within 24 hours.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
