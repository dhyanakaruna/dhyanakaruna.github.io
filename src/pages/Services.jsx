
import { Code, Database, Palette, Smartphone, BarChart3, Globe, Check, ArrowRight, Cloud, Shield, ArrowLeft, Star, Zap, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: <Code className="w-8 h-8 text-burgundy-600" />,
      title: "Full-Stack Development",
      description: "Enterprise-grade web applications built with React, Next.js, TypeScript, and Node.js. Scalable solutions with modern architecture patterns.",
      features: [
        "React & Next.js Development",
        "TypeScript Implementation",
        "RESTful API Development",
        "Performance Optimization",
        "Security Best Practices",
        "Modern UI/UX Design"
      ],
      price: "Enterprise Solutions"
    },
    {
      icon: <Cloud className="w-8 h-8 text-burgundy-600" />,
      title: "AWS Cloud Architecture",
      description: "Design and implement scalable cloud infrastructure using AWS services including EC2, RDS, S3, and serverless solutions.",
      features: [
        "AWS Infrastructure Design",
        "Serverless Architecture",
        "CI/CD Pipeline Setup",
        "Security & IAM Configuration",
        "Performance Monitoring",
        "Cost Optimization"
      ],
      price: "Cloud Solutions"
    },
    {
      icon: <Database className="w-8 h-8 text-burgundy-600" />,
      title: "Database & ORM Solutions",
      description: "Database design, optimization, and management using PostgreSQL, MySQL, and Prisma ORM for robust data handling.",
      features: [
        "Database Schema Design",
        "Prisma ORM Integration",
        "Query Optimization",
        "Data Migration",
        "Backup Strategies",
        "Performance Tuning"
      ],
      price: "Database Solutions"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-burgundy-600" />,
      title: "Payment Integration",
      description: "Secure payment processing integration with Stripe and Cashfree, including webhook handling and fraud prevention.",
      features: [
        "Stripe Integration",
        "Cashfree Payment Gateway",
        "Webhook Implementation",
        "Security Compliance",
        "Error Handling",
        "Testing & Validation"
      ],
      price: "Payment Solutions"
    },
    {
      icon: <Palette className="w-8 h-8 text-burgundy-600" />,
      title: "Enterprise Application Development",
      description: "Building robust enterprise applications with modern technologies, focusing on scalability, security, and performance.",
      features: [
        "Full-Stack Applications",
        "Microservices Architecture",
        "API Development",
        "System Integration",
        "Performance Optimization",
        "Security Implementation"
      ],
      price: "Enterprise Solutions"
    },
    {
      icon: <Shield className="w-8 h-8 text-burgundy-600" />,
      title: "Security Implementation",
      description: "Comprehensive security solutions including authentication, authorization, and compliance with industry standards.",
      features: [
        "Multi-Factor Authentication",
        "Role-Based Access Control",
        "API Security",
        "Data Encryption",
        "Security Auditing",
        "Compliance Standards"
      ],
      price: "Security Solutions"
    },
    {
      icon: <Globe className="w-8 h-8 text-burgundy-600" />,
      title: "DevOps & Monitoring",
      description: "Complete DevOps solutions with automated deployments, monitoring, and error tracking using modern tools.",
      features: [
        "CI/CD Pipeline Setup",
        "Sentry Error Tracking",
        "Performance Monitoring",
        "Automated Testing",
        "Deployment Automation",
        "Infrastructure Management"
      ],
      price: "DevOps Solutions"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and target audience to create a comprehensive project plan."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes to visualize the final product."
    },
    {
      step: "03",
      title: "Development",
      description: "Building your project using modern technologies and best practices for optimal performance."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Thorough testing across different devices and browsers to ensure flawless functionality."
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Deploying your project to production and ensuring everything works perfectly."
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Providing ongoing support and maintenance to keep your project running smoothly."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
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
              My <span className="text-gradient">Services</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              I specialize in full-stack development and cloud architecture, delivering enterprise-grade solutions with modern technologies. 
              My expertise spans from frontend development to backend systems and cloud infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/40 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-burgundy-600 flex-shrink-0" />
                        <span className="text-gray-600 text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="text-burgundy-600 font-bold text-base sm:text-lg mb-3">{service.price}</div>
                  <button className="btn-primary w-full text-sm sm:text-base">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">My Development Process</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
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

      {/* Why Choose Me - Enhanced */}
      <section className="section-padding bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/40 backdrop-blur-sm">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-block bg-gradient-to-r from-burgundy-100 to-maroon-100 text-burgundy-600 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-burgundy-200">
              Why Choose Me
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Me <span className="text-gradient">Different</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              I bring a unique combination of technical expertise, reliability, and dedication to every project. 
              Here's what sets me apart from the rest.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "Quality Assurance",
                  description: "Every project undergoes rigorous testing to ensure flawless functionality and performance.",
                  bgColor: "bg-gradient-to-br from-green-500 to-green-600",
                  stats: "99.9%"
                },
                {
                  icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "Timely Delivery",
                  description: "I value your time and always deliver projects on schedule with regular progress updates.",
                  bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
                  stats: "100%"
                },
                {
                  icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "Ongoing Support",
                  description: "I provide continued support and maintenance to keep your project running smoothly.",
                  bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
                  stats: "24/7"
                },
                {
                  icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "Modern Technologies",
                  description: "Using the latest technologies and best practices to create scalable and future-proof solutions.",
                  bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
                  stats: "Latest"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:scale-105 transition-all duration-300 border-l-4 border-l-burgundy-500"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-burgundy-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <span className="text-xs bg-gradient-to-r from-burgundy-100 to-maroon-100 text-burgundy-600 px-2 py-1 rounded-full font-bold border border-burgundy-200">
                          {item.stats}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
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
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Collaborate?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss your technical requirements and explore how we can work together 
              to build innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white/90 backdrop-blur-sm text-burgundy-600 hover:bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-300 border border-white/50 text-sm sm:text-base">
                Get In Touch
              </button>
              <button className="bg-white/90 backdrop-blur-sm text-burgundy-600 hover:bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-300 border border-white/50 text-sm sm:text-base" onClick={() => navigate('/contact')}>
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services; 
