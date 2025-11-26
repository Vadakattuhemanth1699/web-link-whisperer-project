import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ActionIcon from "@/components/ActionIcon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ActionIcon />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Education />
        <Certifications />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
