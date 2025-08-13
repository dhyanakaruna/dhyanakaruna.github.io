
import { ExternalLink, Smartphone, Globe, Database, Users } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "SkillSwap - Time-Banking Community Platform",
      description: "A comprehensive time-banking platform where neighbors connect, share skills, and build community—with every hour exchanged treated as currency. Features interactive maps, skill reviews, and transparent time tracking.",
      category: "Community Platform",
      image: "/skill-swap.png",
      link: "https://neighbour-nest.vercel.app/",
      external: true
    },
    {
      title: "Learning Management Platform",
      description: "Full-stack web application for course management, user tracking, and certification workflows at Whizlabs.",
      category: "Enterprise Application",
      image: "lms-project",
      link: "View Details →"
    },
    {
      title: "Identity Management System",
      description: "Secure identity management platform with MFA, RBAC, and audit logging for enterprise security.",
      category: "Security Platform",
      image: "identity-project",
      link: "View Details →"
    },
    {
      title: "Payment Processing System",
      description: "Integrated payment solutions with Stripe and Cashfree, including webhook handling and fraud prevention.",
      category: "Payment Integration",
      image: "payment-project",
      link: "View Details →"
    },
    {
      title: "Cloud Infrastructure Migration",
      description: "Migrated from Serverless Framework to AWS SAM with automated CI/CD pipelines and IAM security.",
      category: "DevOps & Cloud",
      image: "cloud-project",
      link: "View Details →"
    },
    {
      title: "Cross-Platform Agent",
      description: "C# Windows agent for managing sudo privileges on Unix/Linux systems with centralized control.",
      category: "System Management",
      image: "agent-project",
      link: "View Details →"
    },
    {
      title: "Real-time Monitoring Dashboard",
      description: "React-based dashboard for system health, user behavior, and security threat monitoring.",
      category: "Analytics & Monitoring",
      image: "dashboard-project",
      link: "View Details →"
    }
  ];



  return (
    <>
      {/* Hero Section */}
      <section id="portfolio" className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore my latest projects and see how I can help businesses achieve their digital goals through innovative web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Web Projects Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/40 backdrop-blur-sm">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-burgundy-100 to-maroon-100 rounded-lg mb-4 flex items-center justify-center border border-burgundy-200 overflow-hidden">
                  {project.image && (project.image.endsWith('.svg') || project.image.endsWith('.png') || project.image.endsWith('.jpg') || project.image.endsWith('.jpeg')) ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : project.category === "Community Platform" ? (
                    <Users className="w-12 h-12 sm:w-16 sm:h-16 text-burgundy-600" />
                  ) : (
                    <Database className="w-12 h-12 sm:w-16 sm:h-16 text-burgundy-600" />
                  )}
                </div>
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-burgundy-100 to-maroon-100 text-burgundy-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-burgundy-200">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.external ? project.link : "#"} 
                  target={project.external ? "_blank" : "_self"}
                  rel={project.external ? "noopener noreferrer" : ""}
                  className="text-burgundy-600 font-medium hover:text-burgundy-700 transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  {project.external ? "Visit Project →" : project.link} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
};

export default Portfolio; 
