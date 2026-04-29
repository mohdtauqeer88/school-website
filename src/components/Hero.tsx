import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";
import { STATS } from "../config";
import { scrollTo } from "../lib/scroll";

function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return { count, countRef };
}

function StatCounter({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  const { count, countRef } = useCounter(value);
  return (
    <div
      ref={countRef}
      className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-lg transition-transform hover:-translate-y-1"
    >
      <div className="text-4xl md:text-5xl font-bold font-serif mb-2 text-accent">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-blue-100 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-secondary">
        <img
          src="images/hero.jpg"
          alt="CMM English School Campus"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/60 to-secondary/90" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 drop-shadow-lg">
          CMM English <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#ffe082]">
            School
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 drop-shadow-md">
          A foundation for lifelong excellence in Rashidabad, Jaunpur —
          nurturing curious minds in a safe, inspiring, and value-led learning
          environment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <Button
            size="lg"
            onClick={() => scrollTo("admissions")}
            className="bg-accent hover:bg-accent/90 text-secondary font-bold text-lg px-8 h-14 rounded-full w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
          >
            Begin Admissions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("facilities")}
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 h-14 rounded-full w-full sm:w-auto backdrop-blur-sm shadow-lg transition-all"
          >
            <PlayCircle className="mr-2 w-5 h-5" />
            Campus Tour
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700">
          {STATS.map((s) => (
            <StatCounter key={s.label} label={s.label} value={s.value} suffix={s.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
}
