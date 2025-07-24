import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack .NET Developer",
      company: "Quadax",
      location: "Cleveland, Ohio",
      period: "Jan 2023 - Present",
      description: "Currently leading full-stack development initiatives at Quadax, where I architect and implement mission-critical healthcare applications supporting 10,000+ concurrent users. Key achievements include engineering responsive Angular 14 SPAs with seamless cross-device compatibility, optimizing application performance through Python automation and Docker containerization for 35% faster load times, and establishing robust CI/CD pipelines that reduced deployment cycles by 40%. My work involves comprehensive modernization efforts, including migrating legacy .NET Framework applications to .NET 8 and transforming VB.NET Web Forms into scalable Angular/.NET 8 microservices, implementing secure JWT-based authentication, and ensuring WCAG compliance for accessibility. This ongoing engagement showcases my ability to deliver enterprise-scale solutions in regulated industries while maintaining high performance standards and healthcare compliance requirements",
      technologies: [ "Angular 14", ".NET 8", "C#","Azure","Docker", "Python", "CI/CD", "SQL Server" ],
      achievements: [
        "Performance Optimization Excellence",
        "Legacy Modernization Success",
        "DevOps Transformation Impact"
      ]
    },
    {
      title: "Full Stack .NET Developer",
      company: "HSBC Bank",
      location: "Hyderabad, INDIA",
      period: "June 2020 - Nov 2021",
      description: "Delivered comprehensive full-stack development solutions for HSBC's banking platform, serving 25,000+ users. Spearheaded the complete modernization of legacy VB.NET Web Forms into a cutting-edge React frontend with .NET Core Web API backend, achieving remarkable 40% reduction in maintenance costs and 50% faster development cycles. Key technical contributions included implementing real-time communication through SignalR integration, developing robust RESTful APIs with SQL Server optimization, and establishing secure OAuth 2.0/JWT authentication protocols. Successfully containerized applications using Docker and Kubernetes while building comprehensive ETL processes with SSIS for seamless data integration. Led Agile development practices and utilized Azure DevOps for CI/CD automation, ensuring reliable deployment workflows and maintaining high-quality standards through extensive NUnit and MS Test coverage in this mission-critical banking environment",
      technologies: ["React", ".Net Core","C#", "SQL Server", "Azure DevOps", " AWS", "Entity Framework"],
      achievements: [
        "Legacy System Modernization",
        "Real-Time Banking Solutions",
        "Secure API Architecture & Authentication"
      ]
    },
    {
      title: "DotNet Developer",
      company: "Luxoft",
      location: "Bangalore, INDIA",
      period: "March 2018 - May 2020",
      description: "Developed comprehensive web applications for enterprise clients at Luxoft through strategic collaboration with stakeholders and business analysts. Architected scalable applications using C#, .NET Framework, and React while leveraging AWS cloud services including EC2, S3, RDS, and Lambda functions for optimal performance and reliability. Key technical contributions included designing robust RESTful APIs with .NET Core, implementing complex SQL optimization strategies, and developing seamless integration patterns using WCF and SOAP protocols. Demonstrated technical leadership by managing sprint progress, resolving cross-functional bottlenecks, and ensuring all deliverables met stringent business requirements. Successfully integrated legacy VB.NET systems with modern React frontends, utilized Kendo UI for enhanced user experiences, and implemented serverless computing solutions that reduced operational overhead while maintaining enterprise-level security and performance standards",
      technologies: ["C#", ".React",".Net framework", "AWS", "SQL", " ASP.NET MVC", "Restful APIs", "AWS"],
      achievements: [
        "Enterprise Web Application Development",
        "RESTful API Design & Implementation",
        "Serverless Computing Optimization"
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-primary font-semibold mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex items-center text-foreground/80 mb-4">
                        <MapPin className="h-4 w-4 mr-2 text-foreground/80" />
                        <span className="text-sm mr-4">{exp.location}</span>
                        <Calendar className="h-4 w-4 mr-2 text-foreground/80" />
                        <span className="text-sm">{exp.period}</span>
                        </div>

                      </div>
                    </div>

                    {/* ✅ Updated color applied here */}
                    <h4 className="text-lg md:text-xl mb-6 font-medium italic" style={{ color: '#7bb3e0' }}>
                      Summary
                      </h4>


                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-foreground/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-foreground/80 leading-relaxed mb-6 text-sm font-semibold">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
