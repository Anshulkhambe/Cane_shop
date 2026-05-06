import { motion } from 'framer-motion';
import { Users, Leaf, Award, Shield, Heart, MapPin, Star, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../config/animations';

const stats = [
  { value: '15+', label: 'Years of Craftsmanship', icon: Award },
  { value: '10,000+', label: 'Happy Customers', icon: Users },
  { value: '500+', label: 'Furniture Pieces', icon: Star },
  { value: '100%', label: 'Handcrafted & Eco-Friendly', icon: Leaf },
];

const values = [
  {
    icon: Heart,
    title: 'Made With Love',
    desc: 'Every piece carries the passion of our artisans — craftsmen who have inherited the art of cane weaving across generations.',
  },
  {
    icon: Leaf,
    title: 'Earth-First Approach',
    desc: 'We source rattan and cane from responsibly managed forests, ensuring our craft does no harm to the planet.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Our furniture is engineered for durability. Proper care means your Cane Shop piece can outlast decades of use.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Guaranteed',
    desc: 'Each piece undergoes a rigorous quality inspection before leaving our workshop — no shortcuts, ever.',
  },
];

const timeline = [
  {
    year: '2010',
    title: 'The Beginning',
    desc: 'Sanjay Khambe founded The Cane Shop in a small workshop in Baner, Pune, with a single mission: to revive traditional cane craftsmanship for modern Indian homes.',
  },
  {
    year: '2013',
    title: 'Growing the Team',
    desc: 'We brought on 8 master artisans from rural Maharashtra, each with 20+ years of experience in cane and rattan weaving, expanding our workshop threefold.',
  },
  {
    year: '2016',
    title: 'Custom Collections Launch',
    desc: 'With growing demand for bespoke pieces, we launched our Custom Design Studio — allowing customers to collaborate directly with our craftsmen.',
  },
  {
    year: '2019',
    title: 'Sustainable Sourcing Pledge',
    desc: 'We committed to 100% responsibly sourced rattan and cane, partnering with certified suppliers in Assam and Northeast India.',
  },
  {
    year: '2022',
    title: 'Digital Expansion',
    desc: 'To serve customers across India, we launched our online presence — bringing the beauty of handcrafted cane furniture to homes nationwide.',
  },
  {
    year: '2024',
    title: 'Today',
    desc: 'The Cane Shop stands proud as Pune\'s most trusted cane furniture studio, with over 10,000 happy customers and a growing family of artisans.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-primary-50 dark:bg-neutral-900 pt-24 pb-16">

      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-secondary-900/70 to-neutral-900/85 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555041463-a586c061ea63?w=1600&auto=format&fit=crop')" }}
        />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6"
        >
          <span className="glass-dark px-5 py-2 rounded-full text-sm font-semibold mb-5">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            About <span className="text-gradient-gold">The Cane Shop</span>
          </h1>
          <p className="text-lg text-neutral-200 max-w-2xl">
            Born from a passion for heritage craftsmanship and sustainable living in the heart of Pune.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4">

        {/* Founder Story */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">The Cane Shop Journey</span>
              <h2 className="text-4xl font-display font-bold text-primary-900 dark:text-primary-100 mt-3 mb-6">
                Crafting Heritage,<br />One Piece at a Time
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                <p>
                  Founded in <strong>2010</strong> by <strong>Sanjay Khambe</strong>, The Cane Shop began as a quiet
                  workshop in Baner, Pune — a space where the ancient art of cane weaving could live again in the
                  modern world.
                </p>
                <p>
                  Sanjay's vision was simple yet powerful: create furniture that honours the timeless traditions of
                  Indian artisanship while meeting the needs of contemporary homes. With over <strong>15 years of
                    experience</strong> and a team of passionate craftsmen, that vision is alive in every piece we make.
                </p>
                <p>
                  Today, The Cane Shop is Pune's most beloved cane furniture studio — a place where sustainability,
                  artistry, and quality are never compromised.
                </p>
              </div>
              <blockquote className="mt-6 border-l-4 border-accent pl-5 italic text-primary-700 dark:text-primary-300 text-lg">
                "Every piece of furniture we create carries a piece of our soul and the rich heritage of Indian craftsmanship."
                <footer className="mt-2 text-sm font-semibold not-italic text-neutral-600 dark:text-neutral-400">— Sanjay Khambe, Founder</footer>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="/assets/sanjay.jpeg"
                alt="Cane furniture craftsmanship"
                className="rounded-2xl shadow-luxury w-full h-80 md:h-[420px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 shadow-luxury">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-semibold text-primary-900 dark:text-primary-100 text-sm">Baner, Pune</p>
                    <p className="text-xs text-neutral-500">Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-br from-primary-800 to-secondary-800 rounded-3xl py-16 px-8 mb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.label} variants={staggerItem} className="text-white">
                  <Icon className="w-9 h-9 mx-auto mb-3 text-accent-light" />
                  <div className="text-4xl font-display font-bold mb-1">{stat.value}</div>
                  <div className="text-neutral-300 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Our Values */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-4xl font-display font-bold text-primary-900 dark:text-primary-100 mt-3">Our Core Values</h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} variants={staggerItem} className="card p-7 flex gap-5">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/40 rounded-xl h-fit">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-primary-900 dark:text-primary-100 mb-2">{v.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto mb-24">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">Our Journey</span>
            <h2 className="text-4xl font-display font-bold text-primary-900 dark:text-primary-100 mt-3">Milestones</h2>
          </motion.div>
          <div className="relative border-l-2 border-primary-200 dark:border-primary-800 pl-8 space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[2.85rem] w-5 h-5 rounded-full bg-primary-600 border-4 border-primary-100 dark:border-neutral-900" />
                <span className="text-xs font-bold text-primary-600 uppercase tracking-widest">{item.year}</span>
                <h3 className="text-xl font-display font-semibold text-primary-900 dark:text-primary-100 mt-1 mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Workshop CTA */}
        <section className="text-center max-w-2xl mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold text-primary-900 dark:text-primary-100 mb-4">
              Visit Our Showroom
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-lg">
              Come see the craft in person. Our Baner showroom is open every day from 10 AM to 9 PM.
            </p>
            <p className="text-primary-600 font-semibold">
              Shop No. 1, Baner Gaon, Near COSMOS CO-OP. BANK LTD., Baner, Pune – 411045
            </p>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default About;
