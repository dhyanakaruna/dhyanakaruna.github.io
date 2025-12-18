import { 
  Code, Database, Palette, Smartphone, BarChart3, Globe, Check, 
  ArrowRight, Cloud, Shield, ArrowLeft, Star, Zap, Users, Award 
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Expertise = () => {
  const navigate = useNavigate();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Core Engineering Areas
  const expertise = [
    {
      icon: <Code className="w-8 h-8 text-burgundy-600" />,
      title: "Full-Stack Engineering",
      description:
        "Building scalable, maintainable, and performant applications using modern frontend and backend technologies.",
      features: [
        "React & Next.js Application Development",
        "TypeScript-based Architecture",
        "Node.js Backend Engineering",
        "API Design & System Integration",
        "Performance Optimization",
        "Reusable UI Components"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8 text-burgundy-600" />,
      title: "Cloud & Infrastructure (AWS)",
      description:
        "Designing secure, modular, and cost-efficient cloud environments with AWS services and infrastructure best practices.",
      features: [
        "AWS Architecture Design",
        "Serverless Workflows (Lambda, API Gateway)",
        "CI/CD Pipelines",
        "IAM & Security Hardening",
        "Monitoring & Observability",
        "Scalability Planning"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-burgundy-600" />,
      title: "Databases & Data Modeling",
      description:
        "Structured schema design, query optimization, and ORM-driven workflows for reliable data systems.",
      features: [
        "PostgreSQL & MySQL",
        "Prisma ORM",
        "Schema Design & Migrations",
        "Query Performance Tuning",
        "Backup & Recovery Planning",
        "Data Consistency Patterns"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-burgundy-600" />,
      title: "Payments & Integrations",
      description:
        "Integrating secure payment flows and external systems with robust event handling and validation.",
      features: [
        "Stripe Integration",
        "Cashfree Payment Workflows",
        "Webhook Processing",
        "Error & Edge-Case Handling",
        "Security & Compliance",
        "Automated Validation"
      ]
    },
    {
      icon: <Palette className="w-8 h-8 text-burgundy-600" />,
      title: "Enterprise Application Development",
      description:
        "Developing complex systems with strong foundations in architecture, modularity, and scalability.",
      features: [
        "End-to-End Application Development",
        "Microservices Architecture",
        "Distributed Systems Thinking",
        "Robust API Layers",
        "High-Performance Workflows",
        "Security-First Engineering"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-burgundy-600" />,
      title: "Security & Reliability",
      description:
        "Implementing secure engineering practices to ensure application integrity and operational safety.",
      features: [
        "Authentication & Access Control",
        "API Security Standards",
        "Data Encryption",
        "Security Reviews & Audits",
        "Compliance-Aligned Approaches",
        "Threat Mitigation"
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-burgundy-600" />,
      title: "DevOps & Automation",
      description:
        "Creating workflows that improve developer experience, deployment reliability, and operational visibility.",
      features: [
        "CI/CD Setup",
        "Monitoring & Alerting",
        "Sentry & Error Tracking",
        "Automated Testing",
        "Deployment Automation",
        "Infrastructure as Code"
      ]
    }
  ];

  // Engineering Process
  const process = [
    {
      step: "01",
      title: "Understanding the Problem",
      description:
        "Gaining clarity on functional requirements, constraints, business logic, and user expectations."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Translating requirements into reliable system designs, technical documentation, and interface structures."
    },
    {
      step: "03",
      title: "Development",
      description:
        "Building features with clean, modular code and best practices for long-term maintainability."
    },
    {
      step: "04",
      title: "Testing & Validation",
      description:
        "Ensuring correctness through unit tests, integration checks, performance reviews, and security validations."
    },
    {
      step: "05",
      title: "Deployment",
      description:
        "Releasing features smoothly with reliable CI/CD pipelines and monitoring tools."
    },
    {
      step: "06",
      title: "Iterate & Improve",
      description:
        "Continuously enhancing performance, reliability, and user experience based on feedback and metrics."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center mb-8">
            <div className="flex justify-start mb-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-burgundy-600 hover:text-burgundy-700 font-medium transition-colors text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-gradient">Expertise</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              I work across full-stack engineering, cloud infrastructure, and systems design, shaping reliable applications that balance performance, scalability, and maintainability.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="section-padding bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/40 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{item.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                    Core Capabilities:
                  </h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-burgundy-600 flex-shrink-0" />
                        <span className="text-gray-600 text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              How I Approach Engineering
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A structured, thoughtful workflow that ensures high-quality, dependable software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-burgundy-100 to-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-burgundy-200">
                  <span className="text-burgundy-600 font-bold text-lg sm:text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/40 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-burgundy-100 to-maroon-100 text-burgundy-600 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-burgundy-200">
              What I Value in Engineering
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Principles That Guide My Work
            </h2>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              I care deeply about writing reliable software, building meaningful systems,
              and contributing to environments that appreciate quality engineering.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: <Shield className="w-5 h-5 text-white" />,
                  title: "Quality First",
                  description:
                    "Thoughtful design, clean code, and comprehensive testing form the foundation of everything I build.",
                  bgColor: "bg-gradient-to-br from-green-500 to-green-600"
                },
                {
                  icon: <Zap className="w-5 h-5 text-white" />,
                  title: "Ownership & Accountability",
                  description:
                    "I take responsibility for the systems I work on, from understanding the problem to shipping reliable solutions.",
                  bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
                },
                {
                  icon: <Users className="w-5 h-5 text-white" />,
                  title: "Collaboration",
                  description:
                    "Good engineering grows through teamwork, knowledge-sharing, and clear communication.",
                  bgColor: "bg-gradient-to-br from-purple-500 to-purple-600"
                },
                {
                  icon: <Award className="w-5 h-5 text-white" />,
                  title: "Continuous Learning",
                  description:
                    "The landscape evolves quickly, staying curious keeps me improving and building better systems.",
                  bgColor: "bg-gradient-to-br from-orange-500 to-orange-600"
                }
              ].map((item, index) => (
                <div key={index} className="card group hover:scale-105 transition-all duration-300 border-l-4 border-l-burgundy-500">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-burgundy-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-collaborate animate-gradient-shift">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Connect?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Whether it’s discussing engineering challenges, system design, or potential opportunities,
            I’m always open to meaningful conversations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white/90 text-burgundy-600 px-8 py-4 rounded-lg font-semibold transition-colors border border-white/50"
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                  });
                }, 100);
              }}
            >
              Get In Touch
            </button>

            <button
              className="bg-white/90 text-burgundy-600 px-8 py-4 rounded-lg font-semibold border border-white/50"
              onClick={() =>
                window.open('https://calendly.com/dhyanakarunanidhi/new-meeting', '_blank')
              }
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;

