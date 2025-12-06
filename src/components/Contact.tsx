import { Github, Linkedin, Mail, Phone, ArrowUpRight, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via mailto as fallback
      const mailtoLink = `mailto:yjain5803@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;

      setSubmitMessage('Thank you! Opening your email client...');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitMessage('');
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yjain5803@gmail.com',
      href: 'mailto:yjain5803@gmail.com',
      gradient: 'from-orange-400 to-red-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '8830000432',
      href: 'tel:8830000432',
      gradient: 'from-red-400 to-pink-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Yukta34',
      href: 'https://github.com/Yukta34',
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Yukta Kapse',
      href: 'https://www.linkedin.com/in/yukta-kapse-9005992ab',
      gradient: 'from-blue-500 to-blue-600',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-800">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16">
          Connect with me on your preferred platform or send me a message
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Cards */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              const isExternal = contact.href.startsWith('http');

              return (
                <a
                  key={idx}
                  href={contact.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={`backdrop-blur-md bg-gradient-to-br ${contact.gradient} text-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex items-center justify-between filter saturate-90 opacity-95`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors">
                      <Icon size={28} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm opacity-90">
                        {contact.label}
                      </div>
                      <div className="text-lg font-bold">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={20} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none bg-white/80 backdrop-blur-sm transition-colors text-gray-800 placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none bg-white/80 backdrop-blur-sm transition-colors text-gray-800 placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none bg-white/80 backdrop-blur-sm transition-colors text-gray-800 placeholder-gray-500"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none bg-white/80 backdrop-blur-sm transition-colors text-gray-800 placeholder-gray-500 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={`text-center py-2 px-4 rounded-lg text-sm font-medium ${
                  submitMessage.includes('Thank you')
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/50 rounded-2xl p-8 shadow-lg border border-white/60 text-center">
          <p className="text-gray-700 text-lg font-medium">
            I'm always open to new opportunities and collaborations
          </p>
          <p className="text-gray-600 mt-2">
            Feel free to reach out through any of the platforms above or send me a message directly
          </p>
          
          {/* Java Code Snippet */}
          <div className="mt-8 bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <code className="text-sm font-mono text-gray-100 whitespace-pre-wrap break-words">
              <span className="text-orange-400">String</span> <span className="text-blue-400">message</span> <span className="text-white">=</span> <span className="text-green-400">"Feel free to collaborate with me!"</span><span className="text-white">;</span>
              {'\n'}<span className="text-orange-400">System</span><span className="text-white">.</span><span className="text-blue-400">out</span><span className="text-white">.</span><span className="text-blue-400">println</span><span className="text-white">(</span><span className="text-blue-400">message</span><span className="text-white">);</span>
            </code>
          </div>
        </div>

        <footer className="text-center mt-16 text-gray-600 py-8 border-t border-gray-200">
          <p className="text-lg font-medium">
            © 2025 All rights reserved Yukta Kapse. Crafted with passion for Java and web development.
          </p>
        </footer>
      </div>
    </section>
  );
}
