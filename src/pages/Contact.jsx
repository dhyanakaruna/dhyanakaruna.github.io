
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, Video, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const GETFORM_ENDPOINT = 'https://getform.io/f/aejejyzb';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(GETFORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset the submitted state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const obfuscateEmail = (email) => {
    const [localPart, domain] = email.split('@');
    const obfuscatedLocal = localPart.substring(0, 2) + '***' + localPart.substring(localPart.length - 1);
    const obfuscatedDomain = domain.substring(0, 1) + '***' + domain.substring(domain.length - 4);
    return `${obfuscatedLocal}@${obfuscatedDomain}`;
  };

  const obfuscatePhone = (phone) => {
    const cleaned = phone.replace(/\s/g, '');
    const countryCode = cleaned.substring(0, 3);
    const middlePart = cleaned.substring(3, 7);
    const lastPart = cleaned.substring(cleaned.length - 2);
    return `${countryCode} *** *** ${lastPart}`;
  };

  const copyEmailToClipboard = async () => {
    const email = "dhyanakarunanidhi@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  const copyPhoneToClipboard = async () => {
    const phone = "+91 8526853322";
    try {
      await navigator.clipboard.writeText(phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = phone;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  const handlePhoneClick = () => {
    const phone = "+918526853322";
    const message = "Hi Dhyana! I'd like to connect with you.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = "dhyanakarunanidhi@gmail.com";
    const subject = "Hello Dhyana - Let's Connect";
    const body = `Hi Dhyana,

    I came across your profile and noticed your work and expertise. I’d be glad to connect and explore ways we might work together or share ideas.

    Whether you're interested in freelance projects, collaboration opportunities, coding partnerships, or have any questions, I'd be happy to chat.

    Please let me know when would be a convenient time to connect.

    Best regards`;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: obfuscateEmail("dhyanakarunanidhi@gmail.com"),
      description: "Send me an email anytime",
      isClickable: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: obfuscatePhone("+91 8526853322"),
      description: "Call me anytime",
      isClickable: true
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let’s Create. <span className="text-gradient">Let’s Collaborate</span>
             </h1>
             <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you’re hiring or building, I deliver results.
             </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/40 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card">
                                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">What’s on Your Mind?</h2>
                
                {isSubmitted && (
                  <div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium text-sm sm:text-base">Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.</span>
                  </div>
                )}

                {error && (
                  <div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-800 font-medium text-sm sm:text-base">{error}</span>
                  </div>
                )}

                <form action={GETFORM_ENDPOINT} method="POST" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Honeypot field for spam protection */}
                  <input 
                    type="text" 
                    name="bot-field" 
                    style={{ display: 'none' }} 
                    tabIndex="-1" 
                    autoComplete="off"
                  />
                  
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                                             placeholder="Project inquiry, job opportunity, or collaboration"
                      disabled={isLoading}
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
                                             placeholder="Tell me about your idea, role, or project..."
                      disabled={isLoading}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                                         ) : (
                       <>
                        Send My Message <Send className="w-4 h-4" />
                       </>
                     )}
                                     </button>
                   <p className="text-xs text-gray-500 mt-3 text-center">
                     I typically respond within 24 hours. Your message is confidential.
                   </p>
                 </form>
              </div>
            </div>

            {/* Contact Information */}
            <div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 sm:space-y-8">
                                 <div>
                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h2>
                   <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                     Choose your preferred way to connect! I'm here to help and typically respond within 24 hours. 
                     Whether you have a project in mind, want to collaborate, or just want to chat, feel free to reach out.
                   </p>
                 </div>

                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
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
                          info.title === "Email" ? (
                            <div className="space-y-2">
                              <div className="flex items-center gap-3">
                                <button 
                                  onClick={handleEmailClick}
                                  className="text-burgundy-600 font-medium text-sm sm:text-base hover:text-burgundy-700 transition-all duration-200 cursor-pointer underline hover:no-underline hover:bg-burgundy-50 px-2 py-1 rounded-md"
                                >
                                  {info.value}
                                </button>
                                <button
                                  onClick={copyEmailToClipboard}
                                  className="p-2 hover:bg-burgundy-100 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                                  title="Copy email address"
                                >
                                  {emailCopied ? (
                                    <Check className="w-4 h-4 text-green-600" />
                                  ) : (
                                    <Copy className="w-4 h-4 text-burgundy-600" />
                                  )}
                                </button>
                              </div>
                       
                            </div>
                          ) : info.title === "Phone" ? (
                            <div className="space-y-2">
                              <div className="flex items-center gap-3">
                                <button 
                                  onClick={handlePhoneClick}
                                  className="text-burgundy-600 font-medium text-sm sm:text-base hover:text-burgundy-700 transition-all duration-200 cursor-pointer underline hover:no-underline hover:bg-burgundy-50 px-2 py-1 rounded-md"
                                >
                                  {info.value}
                                </button>
                                <button
                                  onClick={copyPhoneToClipboard}
                                  className="p-2 hover:bg-burgundy-100 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                                  title="Copy phone number"
                                >
                                  {phoneCopied ? (
                                    <Check className="w-4 h-4 text-green-600" />
                                  ) : (
                                    <Copy className="w-4 h-4 text-burgundy-600" />
                                  )}
                                </button>
                              </div>
                         
                            </div>
                          ) : (
                            <a 
                              href={info.link}
                              className="text-burgundy-600 font-medium mb-1 text-sm sm:text-base hover:text-burgundy-700 transition-colors cursor-pointer underline"
                            >
                              {info.value}
                            </a>
                          )
                        ) : (
                          <p className="text-burgundy-600 font-medium mb-1 text-sm sm:text-base">{info.value}</p>
                        )}
                         <p className="text-gray-600 text-xs sm:text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Quick Book Meeting Button */}
                  <div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-burgundy-100 to-maroon-100 rounded-lg flex items-center justify-center text-burgundy-600 flex-shrink-0 border border-burgundy-200">
                      <Video className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                                         <div className="flex-1">
                       <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Quick Meeting</h3>
                       <div className="space-y-2">
                         <button 
                           onClick={() => window.open('https://calendly.com/dhyanakarunanidhi/new-meeting', '_blank')}
                           className="text-burgundy-600 font-medium text-sm sm:text-base hover:text-burgundy-700 transition-all duration-200 cursor-pointer underline hover:no-underline hover:bg-burgundy-50 px-2 py-1 rounded-md inline-block"
                         >
                           Book a Free 30-Minute Call
                         </button>
                
                       </div>
                     </div>
                  </div>
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
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Contact; 
