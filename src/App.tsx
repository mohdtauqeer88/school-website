import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight, BookOpen, Users, Trophy, Star, ArrowRight, PlayCircle, MapPin, Phone, Mail, Clock, Download, Info, CheckCircle2, Calendar, FileText, Quote, Award } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Classes", href: "#classes" },
  { name: "Facilities", href: "#facilities" },
  { name: "Academics", href: "#academics" },
  { name: "Activities", href: "#activities" },
  { name: "Life", href: "#life" },
  { name: "Admissions", href: "#admissions" },
  { name: "Contact", href: "#contact" },
];

function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [end, duration, isVisible]);

  return { count, countRef };
}

function StatCounter({ label, value, suffix = "" }: { label: string, value: number, suffix?: string }) {
  const { count, countRef } = useCounter(value);
  return (
    <div ref={countRef} className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-lg transition-transform hover:-translate-y-1">
      <div className="text-4xl md:text-5xl font-bold font-serif mb-2 text-accent">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-blue-100 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50">
          <img src="/images/cmm-facebook-1.jpg" alt="CMM English School logo" className="w-10 h-10 rounded-full object-cover bg-white shadow-md border border-white/70" />
          <div>
            <div className={`font-serif font-bold text-xl leading-none ${isScrolled ? 'text-secondary' : 'text-white'}`}>CMM English</div>
            <div className={`text-[10px] tracking-widest uppercase font-semibold ${isScrolled ? 'text-primary' : 'text-blue-200'}`}>School</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-secondary' : 'text-white'}`}>
              {link.name}
            </a>
          ))}
          <Button className="bg-accent hover:bg-accent/90 text-secondary font-bold rounded-full px-6 shadow-md transition-transform hover:scale-105">
            Apply Now
          </Button>
        </nav>

        <button className="lg:hidden z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-secondary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-secondary' : 'text-white'} />
          )}
        </button>

        <div className={`fixed inset-0 bg-secondary flex flex-col justify-center items-center transition-transform duration-500 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center gap-6 w-full px-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-white hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-secondary font-bold rounded-full px-8 py-6 text-lg mt-4 w-full shadow-lg" onClick={() => setMobileMenuOpen(false)}>
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-secondary">
        <img 
          src="/images/hero.jpg" 
          alt="CMM English School Campus" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/60 to-secondary/90"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-32 pb-20 text-center">
              
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 drop-shadow-lg">
          CMM English <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#ffe082]">School</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 drop-shadow-md">
          A foundation for lifelong excellence in Rashidabad, Jaunpur — nurturing curious minds in a safe, inspiring, and value-led learning environment.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-secondary font-bold text-lg px-8 h-14 rounded-full w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
            Begin Admissions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 h-14 rounded-full w-full sm:w-auto backdrop-blur-sm shadow-lg transition-all">
            <PlayCircle className="mr-2 w-5 h-5" />
            Campus Tour
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700">
          <StatCounter label="Happy Students" value={1200} suffix="+" />
          <StatCounter label="Expert Faculty" value={85} suffix="+" />
          <StatCounter label="Acres Campus" value={15} />
          <StatCounter label="Student-Teacher Ratio" value={15} suffix=":1" />
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, subtitle, children, className = "" }: { id: string, title: string, subtitle?: string, children: React.ReactNode, className?: string }) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {subtitle && <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">{subtitle}</h3>}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">{title}</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const images = [
    { src: "/images/gallery1.jpg", title: "Sports Day" },
    { src: "/images/gallery2.jpg", title: "Art Exhibition" },
    { src: "/images/gallery3.jpg", title: "Music Class" },
    { src: "/images/about.png", title: "Classroom Learning" },
    { src: "/images/lab.png", title: "Science Lab" },
    { src: "/images/sports.png", title: "Playground" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelectedImage(img)}
            className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer shadow-md text-left focus:outline-none focus:ring-4 focus:ring-accent/60"
          >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</span>
              </div>
          </button>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-secondary/90 backdrop-blur-sm p-4 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-secondary flex items-center justify-center shadow-xl"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery preview"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-[92vw] max-h-[86vh] object-contain rounded-2xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function CurriculumTabs() {
  const [activeTab, setActiveTab] = useState("approach");
  const tabs = [
    { value: "approach", label: "Learning Approach" },
    { value: "subjects", label: "Core Subjects" },
    { value: "assessment", label: "Assessment" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto p-1 bg-white rounded-xl shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={`text-base py-3 rounded-lg transition-all font-medium ${activeTab === tab.value ? "bg-primary text-white shadow-sm" : "text-secondary hover:bg-muted"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border">
        {activeTab === "approach" && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-serif font-bold text-secondary">Experiential & Integrated Learning</h3>
              <p className="text-muted-foreground leading-relaxed">Our approach goes beyond rote learning. We align with the latest National Education Policy (NEP) guidelines, emphasizing experiential learning where concepts are understood through hands-on activities, projects, and real-world applications.</p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-5 h-5" /> <span className="font-medium text-secondary">Interdisciplinary projects</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-5 h-5" /> <span className="font-medium text-secondary">Technology-integrated classrooms</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-5 h-5" /> <span className="font-medium text-secondary">Focus on 21st-century skills (4Cs)</span></li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-muted rounded-xl p-6 flex flex-col justify-center items-center text-center border border-border">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-bold text-secondary mb-2">NEP Aligned</h4>
              <p className="text-sm text-muted-foreground">Curriculum designed in accordance with the National Education Policy 2020.</p>
            </div>
          </div>
        )}

        {activeTab === "subjects" && (
          <>
            <h3 className="text-2xl font-serif font-bold text-secondary mb-6">Comprehensive Subject Offerings</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {name: "English", type: "Core Language"},
                {name: "Hindi", type: "Second Language"},
                {name: "Mathematics", type: "Core Subject"},
                {name: "Science", type: "EVS / General Science"},
                {name: "Social Science", type: "History & Civics"},
                {name: "Computer Science", type: "IT & Coding"},
                {name: "Sanskrit / French", type: "Third Language (Class 6+)"},
                {name: "General Knowledge", type: "Awareness"}
              ].map((sub, idx) => (
                <div key={idx} className="p-4 border border-border rounded-xl bg-muted/30">
                  <div className="font-bold text-secondary">{sub.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{sub.type}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "assessment" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-secondary">Continuous & Comprehensive Evaluation</h3>
            <p className="text-muted-foreground leading-relaxed">We follow a stress-free evaluation system that measures a student's progress consistently throughout the academic year, focusing on both scholastic and co-scholastic areas.</p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card className="shadow-none border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold flex items-center gap-2"><Award className="w-5 h-5 text-primary" /> Formative Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Class tests, quizzes, projects, assignments, and presentations conducted regularly to monitor understanding.</p>
                </CardContent>
              </Card>
              <Card className="shadow-none border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold flex items-center gap-2"><FileText className="w-5 h-5 text-secondary" /> Summative Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Half-yearly and annual examinations designed to test conceptual clarity and application of knowledge.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <Hero />
      
      {/* Messages Section */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <Quote className="w-12 h-12 text-muted-foreground/30" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary leading-snug">
                "Our mission is to cultivate not just successful students, but compassionate, resilient, and forward-thinking global citizens who will shape tomorrow."
              </h3>
              <div>
                <p className="font-bold text-lg text-primary">CMM English School Leadership</p>
                <p className="text-muted-foreground">Management & Faculty, CMM English School</p>
              </div>
              <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-bold">
                Read Director's Message <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
               <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-accent rounded-full -translate-x-4 translate-y-4 opacity-50"></div>
                  <img src="/images/director.jpg" alt="Director Portrait" className="relative z-10 w-full h-full object-cover rounded-full shadow-xl border-4 border-white" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" title="Why CMM English School?" subtitle="Our Ethos">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-muted rounded-[2rem] transform -rotate-3 z-0"></div>
            <img src="/images/about.png" alt="Students in classroom" className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-6 bg-accent text-secondary p-6 rounded-2xl shadow-lg z-20 max-w-[200px] border-2 border-white">
              <div className="font-serif font-bold text-3xl mb-1">A+</div>
              <div className="text-sm font-medium leading-tight">Rated for Academic Excellence</div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-secondary mb-6 leading-tight">Empowering the next generation of leaders</h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At CMM English School, we believe every child is unique and holds boundless potential. Our curriculum is thoughtfully designed to foster critical thinking, creativity, communication, and a lifelong love for learning.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We provide a safe, warm, and nurturing environment where young learners from Nursery to Class 8 can explore their interests, develop essential life skills, and build a robust foundation for their future.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Holistic development integrating mind, body, and spirit",
                "State-of-the-art campus with advanced security",
                "Focus on character building and Indian values",
                "Highly qualified, empathetic teaching faculty"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-md hover:shadow-lg transition-all">
              Discover Our Story
            </Button>
          </div>
        </div>
      </Section>

      <Section id="classes" title="Academic Journey" subtitle="Classes Offered" className="bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Foundational Stage",
              grades: "Nursery, LKG, UKG",
              icon: <Star className="w-8 h-8 text-accent" />,
              desc: "A play-based approach focusing on motor skills, social interaction, and early cognitive development in a joyful, secure environment.",
              age: "Ages 3-6"
            },
            {
              title: "Preparatory Stage",
              grades: "Class 1 to 5",
              icon: <BookOpen className="w-8 h-8 text-primary" />,
              desc: "Building a strong conceptual foundation in core subjects while encouraging curiosity, creativity, and collaborative learning.",
              age: "Ages 6-11"
            },
            {
              title: "Middle Stage",
              grades: "Class 6 to 8",
              icon: <Trophy className="w-8 h-8 text-secondary" />,
              desc: "Comprehensive CBSE curriculum preparing students for higher education with advanced problem-solving, critical thinking, and practical skills.",
              age: "Ages 11-14"
            }
          ].map((prog, i) => (
            <Card key={i} className="border-border shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                     {prog.icon}
                   </div>
                   <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                     {prog.age}
                   </div>
                </div>
                <h4 className="text-2xl font-serif font-bold text-secondary mb-2">{prog.title}</h4>
                <div className="text-primary font-bold text-sm uppercase tracking-wider mb-4 border-b border-border pb-4">{prog.grades}</div>
                <p className="text-muted-foreground leading-relaxed">
                  {prog.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="academics" title="CBSE Curriculum" subtitle="Academics" className="bg-muted">
        <CurriculumTabs />
      </Section>

      <Section id="activities" title="Beyond the Classroom" subtitle="Extracurriculars" className="bg-white">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {title: "Sports & Athletics", desc: "Basketball, Football, Cricket, Athletics, and Indoor Games.", icon: "⚽"},
              {title: "Performing Arts", desc: "Classical and Western Dance, Vocal and Instrumental Music.", icon: "🎵"},
              {title: "Visual Arts", desc: "Painting, Sketching, Pottery, Craft, and Sculpture.", icon: "🎨"},
              {title: "Clubs & Societies", desc: "Robotics, Eco Club, Debate, Drama, and Literature Club.", icon: "🔬"}
            ].map((activity, idx) => (
               <Card key={idx} className="border-border shadow-sm hover:shadow-md transition-shadow group text-center">
                  <CardContent className="p-8">
                     <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">{activity.icon}</div>
                     <h4 className="text-xl font-bold text-secondary mb-3 font-serif">{activity.title}</h4>
                     <p className="text-sm text-muted-foreground">{activity.desc}</p>
                  </CardContent>
               </Card>
            ))}
         </div>
      </Section>

      <Section id="facilities" title="World-Class Facilities" subtitle="Campus Life" className="bg-muted">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              {
                title: "Smart Classrooms",
                desc: "Spacious, well-ventilated rooms equipped with smart boards and ergonomic seating for interactive learning.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Advanced Laboratories",
                desc: "Fully equipped Composite Science Lab and modern Computer Labs ensuring hands-on practical learning.",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                title: "Extensive Library",
                desc: "A vast, quiet repository of books, encyclopedias, and digital resources fostering a reading culture.",
                icon: <Info className="w-6 h-6" />
              },
              {
                title: "Sports Complex",
                desc: "Expansive green playground, specialized courts, and dedicated coaches for physical education.",
                icon: <Trophy className="w-6 h-6" />
              },
              {
                title: "Safe Transport",
                desc: "GPS and CCTV enabled school buses with female attendants covering major city routes.",
                icon: <MapPin className="w-6 h-6" />
              }
            ].map((fac, i) => (
              <div key={i} className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {fac.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2 font-serif">{fac.title}</h4>
                  <p className="text-muted-foreground text-sm">{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 h-full">
            <img src="/images/library.png" alt="Library" className="rounded-2xl object-cover w-full h-64 md:h-full shadow-lg" />
            <div className="grid grid-rows-2 gap-4 h-full">
              <img src="/images/lab.png" alt="Science Lab" className="rounded-2xl object-cover w-full h-full shadow-lg" />
              <img src="/images/sports.png" alt="Playground" className="rounded-2xl object-cover w-full h-full shadow-lg" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="life" title="Moments of Joy" subtitle="Gallery" className="bg-secondary">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Moments of Joy</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="text-blue-100 mt-6 max-w-2xl mx-auto">Glimpses of daily life, learning, and celebration at CMM English School.</p>
        </div>
        <Gallery />
      </Section>

      <Section id="events" title="Upcoming Events" subtitle="Calendar" className="bg-white">
         <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
               {[
                 {date: "15", month: "OCT", title: "Annual Science Exhibition", time: "09:00 AM - 02:00 PM", desc: "Students showcase their innovative science projects. Parents welcome."},
                 {date: "28", month: "OCT", title: "Diwali Cultural Fest", time: "10:00 AM - 01:00 PM", desc: "Special assembly featuring cultural performances by students."},
                 {date: "10", month: "NOV", title: "Inter-School Sports Meet", time: "08:00 AM - 04:00 PM", desc: "Hosting athletes from 10+ schools for track and field events."},
                 {date: "05", month: "DEC", title: "Parent-Teacher Meeting (PTM)", time: "09:00 AM - 01:00 PM", desc: "Term 1 progress discussion. Individual slots will be emailed."}
               ].map((event, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 bg-white border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                     <div className="flex flex-row md:flex-col items-center justify-center bg-muted/50 rounded-xl px-6 py-4 min-w-[120px] text-center border border-border">
                        <span className="text-3xl font-serif font-bold text-primary mr-2 md:mr-0">{event.date}</span>
                        <span className="text-sm font-bold text-secondary tracking-widest">{event.month}</span>
                     </div>
                     <div className="flex-1 flex flex-col justify-center">
                        <h4 className="text-xl font-bold text-secondary mb-2">{event.title}</h4>
                        <div className="flex items-center text-sm font-medium text-primary mb-3">
                           <Clock className="w-4 h-4 mr-2" /> {event.time}
                        </div>
                        <p className="text-muted-foreground text-sm">{event.desc}</p>
                     </div>
                     <div className="flex items-center">
                        <Button variant="outline" className="w-full md:w-auto border-border">Add to Calendar</Button>
                     </div>
                  </div>
               ))}
            </div>
            <div className="text-center mt-10">
               <Button variant="link" className="text-primary font-bold">View Full Academic Calendar <ArrowRight className="w-4 h-4 ml-1" /></Button>
            </div>
         </div>
      </Section>

      <Section id="admissions" title="Join Our Community" subtitle="Admissions Process" className="bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[
              { step: "01", title: "Enquiry", desc: "Submit the online enquiry form or visit campus.", icon: <FileText className="w-6 h-6" /> },
              { step: "02", title: "Campus Tour", desc: "Experience our facilities and environment.", icon: <MapPin className="w-6 h-6" /> },
              { step: "03", title: "Interaction", desc: "Meeting with our admission counselor.", icon: <Users className="w-6 h-6" /> },
              { step: "04", title: "Enrollment", desc: "Submit documents and secure the seat.", icon: <CheckCircle2 className="w-6 h-6" /> }
            ].map((s, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-border relative overflow-hidden group">
                <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Step {s.step}</div>
                <h4 className="text-lg font-bold text-secondary mb-2">{s.title}</h4>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
             <h4 className="text-xl font-serif font-bold text-secondary mb-6 text-center">Important Admission Information</h4>
             <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h5 className="font-bold text-primary mb-3">Age Criteria (As of March 31st)</h5>
                   <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex justify-between border-b border-border pb-2"><span>Nursery</span> <span className="font-medium text-secondary">3+ Years</span></li>
                      <li className="flex justify-between border-b border-border pb-2"><span>LKG</span> <span className="font-medium text-secondary">4+ Years</span></li>
                      <li className="flex justify-between border-b border-border pb-2"><span>UKG</span> <span className="font-medium text-secondary">5+ Years</span></li>
                      <li className="flex justify-between pb-2"><span>Class 1</span> <span className="font-medium text-secondary">6+ Years</span></li>
                   </ul>
                </div>
                <div>
                   <h5 className="font-bold text-primary mb-3">Required Documents</h5>
                   <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>Birth Certificate (Municipal Corporation)</li>
                      <li>Aadhar Card of Student and Parents</li>
                      <li>Passport size photographs (Student & Parents)</li>
                      <li>Previous year's report card (Class 2 onwards)</li>
                      <li>Transfer Certificate (Class 2 onwards)</li>
                   </ul>
                </div>
             </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-secondary font-bold rounded-full px-10 h-14 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Start Application Process <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">Admissions open for Academic Session 2026-27. Limited seats available.</p>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Get in Touch" subtitle="Contact Us" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-serif font-bold text-secondary mb-6">We'd love to hear from you</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Whether you have a question about admissions, curriculum, or campus facilities, our team is ready to answer all your questions.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Campus Address</h4>
                  <p className="text-muted-foreground">Yahiyapur Power House Road,<br/>Rashidabad, Jaunpur,<br/>Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Phone Numbers</h4>
                  <p className="text-muted-foreground">+91 94513 63534</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Email Addresses</h4>
                  <p className="text-muted-foreground">cmmenglishschool@gmail.com</p>
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
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-serif font-bold text-secondary mb-6">Admission Enquiry Form</h3>
              <form className="space-y-5" action="https://formspree.io/f/placeholder" method="POST" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Parent's Name *</label>
                    <Input placeholder="John Doe" required className="bg-muted/30 border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Child's Name *</label>
                    <Input placeholder="Jane Doe" required className="bg-muted/30 border-border" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Phone Number *</label>
                    <Input placeholder="+91 XXXXX XXXXX" type="tel" required className="bg-muted/30 border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Email Address</label>
                    <Input placeholder="john@example.com" type="email" className="bg-muted/30 border-border" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Admission for Class *</label>
                  <select required className="flex h-10 w-full items-center justify-between rounded-md border border-border bg-muted/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select Class</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Message / Queries</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[100px] bg-muted/30 border-border" />
                </div>
                <Button type="button" className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-lg rounded-xl shadow-md transition-transform hover:-translate-y-1">
                  Submit Enquiry
                </Button>
                <p className="text-xs text-center text-muted-foreground">Our admissions team will contact you within 24 hours.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="bg-secondary pt-20 pb-8 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/cmm-facebook-1.jpg" alt="CMM English School logo" className="w-12 h-12 rounded-full object-cover bg-white shadow-md" />
                <div>
                  <div className="font-serif font-bold text-2xl leading-none">CMM English</div>
                  <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-accent">School</div>
                </div>
              </div>
              <p className="text-blue-100/80 mb-8 max-w-sm leading-relaxed">
                A trusted English-medium institution dedicated to nurturing young minds with modern education rooted in strong values.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary transition-colors cursor-pointer text-white">
                   <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary transition-colors cursor-pointer text-white">
                   <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary transition-colors cursor-pointer text-white">
                   <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 font-serif border-b border-white/10 pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map(l => (
                  <li key={l.name}>
                    <a href={l.href} className="text-blue-100/80 hover:text-accent transition-colors flex items-center gap-2">
                       <ChevronRight className="w-3 h-3 text-accent" /> {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 font-serif border-b border-white/10 pb-2 inline-block">Academics</h4>
              <ul className="space-y-3">
                <li><a href="#classes" className="text-blue-100/80 hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-accent" /> Pre-Primary</a></li>
                <li><a href="#classes" className="text-blue-100/80 hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-accent" /> Primary</a></li>
                <li><a href="#classes" className="text-blue-100/80 hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-accent" /> Middle School</a></li>
                <li><a href="#academics" className="text-blue-100/80 hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-accent" /> CBSE Syllabus</a></li>
                <li><a href="#events" className="text-blue-100/80 hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-accent" /> Academic Calendar</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 font-serif border-b border-white/10 pb-2 inline-block">Newsletter</h4>
              <p className="text-blue-100/80 mb-4 text-sm">Subscribe to our newsletter for the latest updates, events, and announcements.</p>
              <div className="flex mt-4">
                <Input placeholder="Email address" className="rounded-r-none border-white/20 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-accent h-11" />
                <Button className="rounded-l-none bg-accent hover:bg-accent/90 text-secondary px-5 h-11">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-100/60 text-sm">
            <p>© {new Date().getFullYear()} CMM English School. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
