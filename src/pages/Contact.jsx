import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "dhyanakarunanidhi@gmail.com",
      description: "Send me an email anytime",
      link: "mailto:dhyanakarunanidhi@gmail.com",
      isClickable: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8526853322",
      description: "Call me anytime",
      link: "tel:+918526853322",
      isClickable: true
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Coimbatore, India",
      description: "Available for remote work worldwide",
      link: null,
      isClickable: false
    },
    {
    icon: <Clock className="w-6 h-6" />,
    title: "Available Hours",
    value: "Daily: 9AM - 8PM IST",
    description: "Indian Standard Time",
    link: null,
    isClickable: false
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss your ideas and create something amazing together. 
              I'm here to help bring your digital vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/40 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium text-sm sm:text-base">Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-colors text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-colors text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full text-sm sm:text-base"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                    Feel free to reach out through any of these channels. I typically respond within 24 Hours.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-burgundy-100 to-maroon-100 rounded-lg flex items-center justify-center text-burgundy-600 flex-shrink-0 border border-burgundy-200">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</h3>
                        {info.isClickable ? (
                          <a 
                            href={info.link}
                            className="text-burgundy-600 font-medium mb-1 text-sm sm:text-base hover:text-burgundy-700 transition-colors cursor-pointer underline"
                            target={info.title === "Email" ? "_blank" : "_self"}
                            rel={info.title === "Email" ? "noopener noreferrer" : ""}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-burgundy-600 font-medium mb-1 text-sm sm:text-base">{info.value}</p>
                        )}
                        <p className="text-gray-600 text-xs sm:text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-4 sm:pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Follow Me</h3>
                  <div className="flex space-x-3 sm:space-x-4">
                    {[
                      { name: "LinkedIn", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="w-6 h-6 text-burgundy-600" />, url: "https://www.linkedin.com/in/dhyana-k/" },
                      { name: "GitHub", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-6 h-6 text-burgundy-600" />, url: "https://github.com/dhyanakaruna" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-burgundy-100 to-maroon-100 rounded-lg flex items-center justify-center text-burgundy-600 hover:from-burgundy-200 hover:to-maroon-200 transition-colors border border-burgundy-200"
                        title={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-lg sm:text-xl">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about my services and working process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while complex applications can take 2-3 months. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, I offer ongoing support and maintenance packages. This includes regular updates, security monitoring, performance optimization, and technical support."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I work with modern web technologies including React, Node.js, Python, PHP, and various databases. I stay updated with the latest trends and best practices."
              },
              {
                question: "How do you handle project communication?",
                answer: "I maintain regular communication through email, video calls, and project management tools. You'll receive weekly progress updates and can reach me during business hours."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

    </>
  );
};

export default Contact; 