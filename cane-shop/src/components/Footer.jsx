import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Share2, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../config/constants';
import { fadeInUp, staggerContainer, staggerItem } from '../config/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const hasValidExternalUrl = (url) => /^https?:\/\//.test(url || '');

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'New Arrivals', path: '/collections?filter=new' },
        { name: 'Best Sellers', path: '/collections?filter=bestsellers' },
        { name: 'Custom Furniture', path: '/collections?category=custom' },
        { name: 'Sale', path: '/collections?filter=sale' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Why Cane Furniture', path: '/why-cane' },
        { name: 'Our Craftsmen', path: '/about#artisans' },
        { name: 'Sustainability', path: '/why-cane#sustainability' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'FAQs', path: '/contact#faq' },
        { name: 'Shipping & Returns', path: '/contact#shipping' },
        { name: 'Care Guide', path: '/why-cane#care-tips' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: BUSINESS_INFO.social.facebook, label: 'Facebook' },
    { icon: Instagram, url: BUSINESS_INFO.social.instagram, label: 'Instagram' },
    { icon: Twitter, url: BUSINESS_INFO.social.twitter, label: 'Twitter' },
    { icon: Share2, url: BUSINESS_INFO.social.pinterest, label: 'Pinterest' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-neutral-900 to-secondary-900 text-neutral-100 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={staggerItem} className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block group">
              <h3 className="text-2xl font-display font-bold text-gradient-gold mb-2 group-hover:scale-105 transition-transform">
                The Cane Shop
              </h3>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-sm">
              Handcrafted cane furniture that blends traditional craftsmanship with modern design.
              Creating sustainable luxury for your living spaces since {BUSINESS_INFO.founded}.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks
                .filter((social) => hasValidExternalUrl(social.url))
                .map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-neutral-900 transition-all duration-300 group"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={staggerItem} className="space-y-4">
              <h4 className="text-lg font-display font-semibold text-accent">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-neutral-300 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h5 className="font-semibold text-sm mb-1">Visit Our Showroom</h5>
                <p className="text-neutral-400 text-sm">{BUSINESS_INFO.location.city}, {BUSINESS_INFO.location.state}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h5 className="font-semibold text-sm mb-1">Call Us</h5>
                <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="text-neutral-400 hover:text-accent text-sm transition-colors">
                  {BUSINESS_INFO.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h5 className="font-semibold text-sm mb-1">Email Us</h5>
                <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="text-neutral-400 hover:text-accent text-sm transition-colors">
                  {BUSINESS_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-1 text-sm text-neutral-400">
            <span>© {currentYear} The Cane Shop. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>in India</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-neutral-400">
            <Link to="/about#privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-600">•</span>
            <Link to="/about#terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <span className="text-neutral-600">•</span>
            <Link to="/about#cookies" className="hover:text-accent transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
