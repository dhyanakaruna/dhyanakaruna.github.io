
import { ArrowRight, Linkedin, Github } from 'lucide-react';

const Home = () => {

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block bg-gradient-to-r from-burgundy-100 to-maroon-100 text-burgundy-600 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-burgundy-200">
                Full Stack Developer
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-gradient">Dhyana</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                I'm a Product Engineer with over 3+ years of experience building enterprise-grade applications and cloud infrastructure. My expertise lies in creating secure, scalable solutions that address complex technical challenges and deliver measurable business value.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                I specialize in full-stack development with React, Node.js, and Python, along with cloud architecture on AWS. I focus on building systems that are maintainable, secure, and performant at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary w-full sm:w-auto justify-center"
                >
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="https://drive.google.com/file/d/1jf4-X2aYkmyQqsK0CJll2vvfbogEseET/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto text-center"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="blob-shape w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto relative flex items-center justify-center animate-gradient-shift">
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-full flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/50">
                  <img 
                    src="/profile.png" 
                    alt="Dhyana" 
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating badges - hidden on mobile */}
              <div className="hidden md:block absolute top-10 left-10 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50">
                <span className="text-sm font-medium text-gray-700">3+ Years Exp</span>
              </div>
              <div className="hidden md:block absolute top-20 right-10 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50">
                <span className="text-sm font-medium text-gray-700">50+ Features</span>
              </div>
              
              {/* Social media icons */}
              <div className="flex justify-center space-x-4 mt-6 sm:mt-8">
                <a href="https://www.linkedin.com/in/dhyana-k/" className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border border-white/50">
                  <Linkedin className="w-5 h-5 text-burgundy-600" />
                </a>
                <a href="https://github.com/dhyanakaruna" className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border border-white/50">
                  <Github className="w-5 h-5 text-burgundy-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home; 
