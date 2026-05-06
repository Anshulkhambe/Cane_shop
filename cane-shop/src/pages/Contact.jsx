import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User as UserIcon, MessageSquare } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../config/animations';
import { BUSINESS_INFO } from '../config/constants';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const WHATSAPP_NUMBER = '919657436665';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const hasValidExternalUrl = (url) => /^https?:\/\//.test(url || '');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    const text =
      `Hello! I'm reaching out from your website.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Message:*\n${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: [BUSINESS_INFO.location.city + ', ' + BUSINESS_INFO.location.state, BUSINESS_INFO.location.fullAddress],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [BUSINESS_INFO.contact.phone, 'Mon - Sun: ' + BUSINESS_INFO.hours.weekdays],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [BUSINESS_INFO.contact.email, BUSINESS_INFO.contact.supportEmail],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Weekdays: ' + BUSINESS_INFO.hours.weekdays,
        'Weekends: ' + BUSINESS_INFO.hours.saturday,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-primary-50 dark:bg-neutral-900 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-80 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-neutral-900/80 to-secondary-900/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=2000&auto=format&fit=crop')] bg-cover bg-center" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Get in <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl">
            Visit our showroom, call us, or send a message. We're here to help bring your vision to life.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info) => (
              <motion.div key={info.title} variants={staggerItem}>
                <Card glass className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/20 rounded-xl">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-primary-100 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Social Links */}
            <Card glass className="p-6">
              <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-primary-100 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {['facebook', 'instagram', 'twitter', 'pinterest']
                  .filter((platform) => hasValidExternalUrl(BUSINESS_INFO.social[platform]))
                  .map((platform) => (
                    <motion.a
                      key={platform}
                      href={BUSINESS_INFO.social[platform]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 hover:bg-accent hover:text-neutral-900 dark:hover:bg-accent transition-all duration-300"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        {platform[0].toUpperCase()}
                      </div>
                    </motion.a>
                  ))}
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 dark:text-primary-100 mb-3">
                  Send Us a Message
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Have a question or ready to start your custom furniture project? We'd love to hear from you.
                </p>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-xl text-green-700 dark:text-green-400"
                >
                  Thank you for your message! We'll get back to you within 24 hours.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="custom">Custom Order</option>
                      <option value="visit">Showroom Visit</option>
                      <option value="support">Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full pl-12 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  icon={Send}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden p-0">
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <iframe
                src={BUSINESS_INFO.location.mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Cane Shop Location"
                className="w-full h-full"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
