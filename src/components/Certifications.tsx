import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "JavaScript for Beginners",
      issuer: "Udemy",
      description:
        "Completed comprehensive course covering JavaScript fundamentals including arrays, loops, functions, and DOM manipulation to build dynamic web applications",
      credentialUrl: "/certificates/JavaScript.pdf",
      skills: ["Variables & Data Types", "Functions", "DOM Manipulation & Events"],
    },
    {
      title: "Implementing DevOps with AWS",
      issuer: "SimpliLearn",
      description:
        "Completed training on AWS DevOps tools (CodePipeline, CodeBuild, CodeDeploy, CloudFormation) for automated CI/CD pipelines.",
      credentialUrl: "/certificates/Implementing_DevOps_with_AWS.pdf",
      skills: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging"],
    },
    {
      title: "DevOps Practitioner Training",
      issuer: "SimpliLearn",
      description:
        "Comprehensive certification program covering CI/CD pipelines, automation, and DevOps tools including Docker, Jenkins, and Git for streamlined software delivery.",
      credentialUrl: "/certificates/DevOps_Practitioner_Training.pdf",
      skills: ["Containerization & Docker", "Infrastructure Automation", "Configuration Management"],
    },
    {
      title: "Docker Certified Associate",
      issuer: "SimpliLearn",
      description:
        "Comprehensive certification validating containerization expertise through hands-on Docker, Docker Swarm, and orchestration projects with real-world scenarios.",
      credentialUrl: "/certificates/Docker_Certified_Associate.pdf",
      skills: ["Docker Engine", "Docker Swarm", "Docker Compose"],
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "SimpliLearn",
      description:
        "Certification demonstrating expertise in deploying, managing, and troubleshooting Kubernetes clusters for cloud-native applications",
      credentialUrl: "/certificates/CKA-Certified_Kubernetes_Administrator.pdf",
      skills: [
        "Cluster Management & Administration",
        "Application Deployment & Scaling",
        "Security & Network Configuration",
      ],
    },
    {
      title: "Full Stack Developer",
      issuer: "SimpliLearn",
      description:
        "Trained Full Stack Java Developer with certification in modern web technologies, database management, and end-to-end application deployment.",
      credentialUrl: "/certificates/FullStack_Java_Developer.pdf",
      skills: ["System Architecture & Design", "Enterprise Application Development", "Database & API Design"],
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <h4 className="text-lg font-medium italic" style={{ color: "#7bb3e0" }}>
                      {cert.issuer}
                    </h4>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">{cert.description}</p>

                <div className="mb-6">
                  <h5 className="text-foreground/80 leading-relaxed mb-3 text-sm font-semibold">Key Skills:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-accent text-foreground/80 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  onClick={() => window.open(cert.credentialUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Credential
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
