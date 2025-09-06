import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  // Optional: scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-inter bg-background text-foreground">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-foreground/80">
          I am a Full Stack .NET Developer with experience in building scalable
          web applications using C#, .NET Core, Angular, React, SQL Server, and
          Azure. Passionate about problem-solving, clean code, and learning new
          technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-subtle container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-card rounded-xl shadow-elegant text-center">C# / .NET Core</div>
          <div className="p-4 bg-card rounded-xl shadow-elegant text-center">ASP.NET / Web API</div>
          <div className="p-4 bg-card rounded-xl shadow-elegant text-center">Angular / React</div>
          <div className="p-4 bg-card rounded-xl shadow-elegant text-center">SQL Server / MongoDB</div>
          <div className="p-4 bg-card rounded-xl shadow-elegant text-center">Azure / DevOps</div>
          <div className="p-4 bg-card rounded-xl shadow-elegant text-center">HTML5 / CSS3 / JS</div>
          <div className="p-4 bg-card rounded-xl shadow-elegant text-center">Docker / Kubernetes</div>
          <div className="p-4 bg-card rounded-xl shadow-elegant text-center">JWT / OAuth / REST APIs</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-card rounded-2xl shadow-elegant">
            <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
            <p className="text-foreground/80 mb-2">
              Description of your project, technologies used, and your contribution.
            </p>
          </div>
          <div className="p-6 bg-card rounded-2xl shadow-elegant">
            <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
            <p className="text-foreground/80 mb-2">
              Description of another project with tech stack and key achievements.
            </p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Index;
