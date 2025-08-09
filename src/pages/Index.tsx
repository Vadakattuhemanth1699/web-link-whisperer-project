import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      {/* Decorative blueish blurred circle */}
      <div
        style={{
          position: "absolute",
          top: "-250px",
          left: "-250px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(147,197,253,0) 80%)",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: -10,
          opacity: 0.5,
        }}
      />

      <Navigation />
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
