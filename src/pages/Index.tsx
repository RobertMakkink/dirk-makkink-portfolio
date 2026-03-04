import Hero from "@/components/cv/Hero";
import About from "@/components/cv/About";
import Successes from "@/components/cv/Successes";
import Timeline from "@/components/cv/Timeline";
import Skills from "@/components/cv/Skills";
import Contact from "@/components/cv/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Successes />
      <Timeline />
      <Skills />
      <Contact />

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Dirk Makkink
      </footer>
    </div>
  );
};

export default Index;
