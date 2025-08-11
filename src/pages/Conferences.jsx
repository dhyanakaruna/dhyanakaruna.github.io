
import { useState } from 'react';
import { Calendar, MapPin, Users, BookOpen, Lightbulb, ArrowRight, ExternalLink, Clock, Award, CheckCircle, Settings, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Conferences = () => {
  const [expandedLearning, setExpandedLearning] = useState(null);
  const navigate = useNavigate();

  const conferenceData = {
    name: "React Nexus Conference",
    date: "December 2024",
    location: "Virtual Conference",
    duration: "3 Days",
    description: "A comprehensive React ecosystem conference focusing on the latest developments, best practices, and future trends in React development.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  };

  const learnings = [
    {
      id: 1,
      title: "React 19 & Concurrent Features",
      summary: "Deep dive into React 19's new concurrent features and how they improve user experience.",
      details: "React 19 introduces groundbreaking concurrent features that allow React to work on multiple tasks simultaneously. Key learnings include understanding the new use() hook, improved Suspense boundaries, and how concurrent rendering can significantly improve perceived performance. The session covered practical implementation strategies and migration paths from React 18.",
      category: "React Core",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Server Components & RSC Architecture",
      summary: "Understanding React Server Components and their impact on modern web development.",
      details: "React Server Components represent a paradigm shift in how we think about component architecture. The session explored the benefits of RSC including reduced bundle sizes, improved SEO, and better performance. Key takeaways included understanding the client/server component boundary, data fetching patterns, and how to structure applications to leverage RSC effectively.",
      category: "Architecture",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Performance Optimization Techniques",
      summary: "Advanced techniques for optimizing React application performance.",
      details: "This comprehensive session covered various performance optimization strategies including code splitting, lazy loading, memoization techniques, and bundle analysis. Practical examples demonstrated how to identify performance bottlenecks using React DevTools and implement solutions that can improve Core Web Vitals scores significantly.",
      category: "Performance",
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 4,
      title: "State Management Evolution",
      summary: "Modern state management patterns and tools in the React ecosystem.",
      details: "The state management landscape has evolved significantly. This session explored modern patterns including Zustand, Jotai, and Valtio, comparing them with traditional solutions like Redux. Key insights included when to use different state management approaches, how to structure state for optimal performance, and patterns for managing complex application state.",
      category: "State Management",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 5,
      title: "Testing Strategies & Best Practices",
      summary: "Comprehensive testing approaches for React applications.",
      details: "Testing React applications requires a multi-layered approach. The session covered unit testing with Jest and React Testing Library, integration testing strategies, and end-to-end testing with Playwright. Key learnings included testing patterns for hooks, components, and complex user interactions, as well as how to maintain test suites as applications scale.",
      category: "Testing",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      id: 6,
      title: "Developer Experience & Tooling",
      summary: "Modern development tools and practices for React developers.",
      details: "Developer experience is crucial for productivity. This session explored modern tooling including Vite, Turbopack, and various development utilities. Topics covered included hot module replacement optimization, debugging techniques, and how to set up efficient development workflows that scale with team size and project complexity.",
      category: "Tooling",
      icon: <Settings className="w-5 h-5" />
    }
  ];

  const keyFindings = [
    "React 19's concurrent features will revolutionize how we build responsive UIs",
    "Server Components are not just a Next.js feature but a fundamental React pattern",
    "Performance optimization should be built into the development process, not added later",
    "Modern state management is moving towards simplicity and developer experience",
    "Testing should be treated as a first-class citizen in React development",
    "Developer experience tools significantly impact team productivity and code quality"
  ];

  const toggleLearning = (id) => {
    setExpandedLearning(expandedLearning === id ? null : id);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-start mb-6">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-burgundy-600 hover:text-burgundy-700 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conference <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sharing insights and learnings from industry conferences and events that shape my professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Conference Details */}
      <section className="section-padding bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/40 backdrop-blur-sm">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img 
                  src={conferenceData.image} 
                  alt={conferenceData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{conferenceData.name}</h2>
                  <p className="text-lg opacity-90">{conferenceData.description}</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-burgundy-600" />
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-semibold text-gray-900">{conferenceData.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-burgundy-600" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-semibold text-gray-900">{conferenceData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-burgundy-600" />
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold text-gray-900">{conferenceData.duration}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-burgundy-50 to-maroon-50 rounded-lg p-6 border border-burgundy-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">My Experience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Attending React Nexus for 3 days was an incredibly enriching experience. The conference provided deep insights into the future of React development, 
                    with sessions covering everything from core React features to advanced architectural patterns. The virtual format allowed for focused learning 
                    and the opportunity to connect with developers worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Learnings & Findings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the valuable insights and practical knowledge gained from this conference experience.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {learnings.map((learning, index) => (
                <div
                  key={learning.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-burgundy-100 to-maroon-100 rounded-lg flex items-center justify-center text-burgundy-600 flex-shrink-0 border border-burgundy-200">
                      {learning.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-gradient-to-r from-burgundy-100 to-maroon-100 text-burgundy-700 px-2 py-1 rounded-full font-medium border border-burgundy-200">
                          {learning.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{learning.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{learning.summary}</p>
                      
                      {expandedLearning === learning.id ? (
                        <div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-gray-700 text-sm leading-relaxed"
                        >
                          {learning.details}
                        </div>
                      ) : null}
                      
                      <button
                        onClick={() => toggleLearning(learning.id)}
                        className="text-burgundy-600 hover:text-burgundy-700 font-medium text-sm flex items-center gap-1 transition-colors"
                      >
                        {expandedLearning === learning.id ? 'Show Less' : 'Learn More'}
                        <ArrowRight className={`w-4 h-4 transition-transform ${expandedLearning === learning.id ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings Summary */}
      <section className="section-padding bg-gradient-collaborate animate-gradient-shift">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              The most important insights that will influence my development approach going forward.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {keyFindings.map((finding, index) => (
                <div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-white/90 leading-relaxed">{finding}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Apply These Learnings?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm excited to implement these insights in future projects. Let's discuss how these learnings can benefit your next development project.
            </p>
            <button className="btn-primary">
              Start a Project <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conferences; 
