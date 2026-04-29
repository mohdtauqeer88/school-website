import React from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className = "",
  light = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {subtitle && (
            <h3
              className={`font-bold tracking-wider uppercase text-sm mb-4 ${
                light ? "text-blue-200" : "text-primary"
              }`}
            >
              {subtitle}
            </h3>
          )}
          <h2
            className={`text-4xl md:text-5xl font-serif font-bold mb-6 ${
              light ? "text-white" : "text-secondary"
            }`}
          >
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
          {description && (
            <p
              className={`mt-6 max-w-2xl mx-auto ${
                light ? "text-blue-100" : "text-muted-foreground"
              }`}
            >
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
