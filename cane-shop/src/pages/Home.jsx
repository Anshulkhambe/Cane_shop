import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Shield, Leaf, Truck, MapPin, Phone, MessageCircle, CheckCircle, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { fadeInUp, staggerContainer, staggerItem } from '../config/animations';
import { STATS, FEATURES, BUSINESS_INFO } from '../config/constants';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const WHATSAPP_NUMBER = '919657436665'; // 91 + number without spaces/+

const makeWhatsAppUrl = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

// Featured products
const featuredProducts = [
  {
    id: 1,
    name: 'Sofa Set',
    price: '₹26,500',
    originalPrice: '₹32,000',
    category: 'sofas',
    rating: 4.8,
    reviews: 124,
    image: '/public/products/Sofa+Chairs.JPG',
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 2,
    name: 'Classic Zoola Swing',
    price: '₹12000',
    originalPrice: '₹15,999',
    category: 'outdoor',
    rating: 4.9,
    reviews: 213,
    image: '/products/Zoola.JPG',
    isBestSeller: true,
  },
  {
    id: 3,
    name: 'Premium Square Chair',
    price: '₹11500',
    originalPrice: '₹15,000',
    category: 'Chairs',
    rating: 4.9,
    reviews: 156,
    image: '/public/products/Chairss.JPG',
    isBestSeller: true,
  },
];

// Testimonials
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Kothrud, Pune',
    rating: 5,
    text: 'Absolutely stunning quality! My living room has been completely transformed. The rattan sofa set is not just furniture — it\'s a statement piece. Sanjay and his team were incredibly helpful throughout.',
    product: 'Luxury Cane Sofa Set',
    avatar: 'PS',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    location: 'Baner, Pune',
    rating: 5,
    text: 'I was skeptical about buying furniture online, but The Cane Shop exceeded every expectation. The peacock chair is exactly as shown and the craftsmanship is remarkable. Delivered in perfect condition!',
    product: 'Peacock Fan Chair',
    avatar: 'RM',
  },
  {
    id: 3,
    name: 'Sneha Joshi',
    location: 'Hinjewadi, Pune',
    rating: 5,
    text: 'We ordered a custom dining set and it was ready in 3 weeks. The finish, the weave, the wood joints — everything is flawless. Our guests always ask where we bought it. Highly recommend!',
    product: 'Custom Dining Set',
    avatar: 'SJ',
  },
  {
    id: 4,
    name: 'Arun Kulkarni',
    location: 'Viman Nagar, Pune',
    rating: 5,
    text: 'Best furniture purchase we\'ve ever made. Bought the outdoor lounge set for our terrace — it handles Pune\'s summer heat perfectly and still looks brand new after a year!',
    product: 'Outdoor Cane Lounge Set',
    avatar: 'AK',
  },
];

const trustBadges = [
  { icon: CheckCircle, text: '15+ Years of Craftsmanship' },
  { icon: Leaf, text: '100% Eco-Friendly Materials' },
  { icon: Truck, text: 'Free Delivery Above ₹10,000' },
  { icon: Shield, text: 'Quality Guaranteed' },
  { icon: MessageCircle, text: 'WhatsApp Support' },
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="relative overflow-hidden bg-primary-50 dark:bg-neutral-900">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ opacity: heroOpacity, scale: heroScale }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-neutral-900/80 to-secondary-900/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-block">
              <div className="glass-dark px-6 py-3 rounded-full mb-8 inline-flex items-center space-x-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                </span>
                <span className="text-neutral-100 font-medium text-sm">Handcrafted Excellence Since {BUSINESS_INFO.founded}</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Timeless Cane Furniture{' '}
              <span className="text-gradient-gold block mt-2">For Modern Living</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-neutral-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover our exclusive collection of handwoven cane furniture — where traditional craftsmanship meets contemporary elegance.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/collections">
                <Button variant="accent" size="lg" icon={ArrowRight} iconPosition="right">Explore Collections</Button>
              </Link>
              <a href={makeWhatsAppUrl('Hello! I\'d like to enquire about your cane furniture.')} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" icon={MessageCircle}>
                  WhatsApp Us
                </Button>
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-white/80">
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
                <div className="w-1 h-3 bg-white rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-primary-800 py-4 overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...trustBadges, ...trustBadges].map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex items-center gap-3 text-white shrink-0">
                <Icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{b.text}</span>
                <span className="text-white/30 ml-6">•</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-100px' }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center">
                <Card glass className="p-6 hover:-translate-y-2 transition-transform duration-300">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} enableScrollSpy scrollSpyOnce>
                    {({ countUpRef }) => (
                      <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-alt py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-4">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 dark:text-primary-100 mb-6">
              Crafted with Passion, <span className="text-gradient">Built to Last</span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Every piece tells a story of dedication, sustainability, and timeless design
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-50px' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.slice(0, 6).map((feature) => {
              const icons = { craft: Shield, leaf: Leaf, shield: Shield, palette: Star, truck: Truck, support: Phone };
              const Icon = icons[feature.icon] || Shield;
              return (
                <motion.div key={feature.id} variants={staggerItem}>
                  <Card hover className="h-full">
                    <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-primary-900 dark:text-primary-100 mb-3">{feature.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PROFESSIONAL SERVICES TEASER ── */}
      <section className="py-24 relative overflow-hidden bg-primary-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtNDY0LW1hcnRpbndhbGstMzE5LmpwZw.jpg')] bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-bold rounded-full text-xs uppercase tracking-widest mb-6">Expert Restoration</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Give Your Old Cane Furniture{' '}
                <span className="text-gradient-gold">A New Life</span>
              </h2>
              <p className="text-lg text-primary-100 mb-8 leading-relaxed">
                From intricate netting repair to professional premium polishing, our artisans specialize in restoring the beauty and strength of your favorite cane and bamboo pieces.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Pro Netting Repair</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Premium Polishing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Custom Cushioning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Structural Repair</span>
                </div>
              </div>
              <Link to="/services">
                <Button variant="accent" size="lg" icon={ArrowRight} iconPosition="right">View Service Quotations</Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-luxury-2xl border-4 border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&auto=format&fit=crop" 
                  alt="Furniture Restoration" 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass-dark p-6 rounded-2xl">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary-900 font-bold text-xl">15+</div>
                      <div>
                        <p className="text-white font-bold">Years Experience</p>
                        <p className="text-primary-200 text-xs">In Traditional Cane Restoration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 font-semibold rounded-full text-sm mb-4">Best Sellers</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 dark:text-primary-100 mb-6">Featured Masterpieces</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Our most-loved, handpicked pieces — order directly via WhatsApp
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={staggerItem} className="group">
                <Card hover padding="none" className="overflow-hidden flex flex-col h-full">
                  <div className="relative h-72 overflow-hidden">
                    <img src={product.image} alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && <span className="glass-dark px-3 py-1 text-xs font-bold text-white rounded-full">New Arrival</span>}
                      {product.isBestSeller && <span className="bg-accent px-3 py-1 text-xs font-bold text-neutral-900 rounded-full">Best Seller</span>}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{product.category}</p>
                    <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-neutral-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-neutral-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 mb-5 mt-auto">
                      <span className="text-2xl font-bold text-primary-700 dark:text-primary-300">{product.price}</span>
                      {product.originalPrice && <span className="text-sm text-neutral-400 line-through">{product.originalPrice}</span>}
                    </div>
                    <a
                      href={makeWhatsAppUrl(`Hi! I'm interested in the "${product.name}" (${product.price}). Please share more details.`)}
                      target="_blank" rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-xl transition-colors duration-200"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Order via WhatsApp
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link to="/collections">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">View All Collections</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-secondary-900 to-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/10 text-white font-semibold rounded-full text-sm mb-4">Customer Stories</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              10,000+ Happy <span className="text-gradient-gold">Families</span>
            </h2>
            <p className="text-neutral-300 text-lg">Here's what our customers say about their experience</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.id} variants={staggerItem}>
                <div className="glass-dark rounded-2xl p-6 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-accent mb-4 opacity-70" />
                  <p className="text-neutral-200 text-sm leading-relaxed flex-grow mb-5">"{t.text}"</p>
                  <div className="flex text-accent mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-neutral-400 text-xs">{t.location}</p>
                    </div>
                  </div>
                  <p className="text-xs text-accent mt-3 font-medium">Purchased: {t.product}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-secondary-800 to-neutral-900" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-neutral-200 mb-10 max-w-2xl mx-auto">
              Visit our showroom in Baner, Pune — or reach us instantly on WhatsApp. Our team is ready to help you choose the perfect piece.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href={makeWhatsAppUrl('Hello! I\'d like to visit your showroom. Please share the details.')} target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="lg" icon={MessageCircle} iconPosition="right">Chat on WhatsApp</Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" icon={MapPin}>
                  Get Directions
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-neutral-300 text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" />{BUSINESS_INFO.location.city}, {BUSINESS_INFO.location.state}</div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" />
                <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="hover:text-white transition-colors">{BUSINESS_INFO.contact.phone}</a>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" />Open 7 days · 10 AM – 9 PM</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
