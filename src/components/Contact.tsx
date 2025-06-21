import emailjs from '@emailjs/browser';
import { CheckCircle, Github, Linkedin, Mail, MapPin, Phone, Send, Twitter, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // EmailJS configuration - Replace these with your actual values
  const EMAILJS_SERVICE_ID = 'service_g52io0f';
  const EMAILJS_TEMPLATE_ID = 'template_xuuyhhu';
  const EMAILJS_PUBLIC_KEY = 'l2qNgFP0s8g5qI_2c';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status message when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // EmailJS send function
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Rohit Kumar',
          to_email: 'kumarrohit49751663737@gmail.com'
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'kumarrohit49751663737@gmail.com',
      link: 'mailto:kumarrohit49751663737@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '+91 91626 12778',
      link: 'tel:+919162612778'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'Bhubaneswar, Odisha, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/rohits78',
      color: 'hover:text-gray-800'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rohit42330b',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Twitter size={20} />,
      name: 'Twitter',
      url: 'https://x.com/singh21803',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className={`py-20 transition-all duration-700 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 transition-all duration-500 ${isDark ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h2>
          <p className={`text-lg max-w-2xl mx-auto transition-all duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 transition-all duration-500 ${isDark ? 'text-white' : 'text-gray-800'}`}>Let's Connect</h3>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`flex items-center gap-4 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group transform hover:scale-105 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
                  >
                    <div className={`p-3 rounded-lg transition-all duration-300 ${isDark ? 'bg-blue-900 text-blue-300 group-hover:bg-blue-600 group-hover:text-white' : 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className={`font-semibold transition-all duration-300 ${isDark ? 'text-white' : 'text-gray-800'}`}>{info.title}</h4>
                      <p className={`transition-all duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className={`font-semibold mb-4 transition-all duration-500 ${isDark ? 'text-white' : 'text-gray-800'}`}>Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 transition-all duration-500 ${isDark ? 'text-white' : 'text-gray-800'}`}>Send Message</h3>
              
              {/* Status Message */}
              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 transition-all duration-500 ${
                  submitStatus.type === 'success' 
                    ? isDark ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-50 text-green-800 border border-green-200'
                    : isDark ? 'bg-red-900/50 text-red-300 border border-red-700' : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle size={20} className="flex-shrink-0" />
                  ) : (
                    <XCircle size={20} className="flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-all duration-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-all duration-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 transition-all duration-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-all duration-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;