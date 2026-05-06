import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Layers, Sparkles, Phone, MapPin, CheckCircle2, FileText, ClipboardList } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../config/animations';
import Button from '../components/common/Button';

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Cane Netting & Repair',
    description: 'Specialized hand-woven restoration for damaged cane seats and backs. We use premium natural cane to bring your heirlooms back to life.',
    features: ['Traditional Hand Weaving', 'High-Strength Cane', 'Structural Reinforcement']
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Traditional Polishing',
    description: 'Expert wood and cane polishing services to restore the original luster of your furniture while providing lasting protection from elements.',
    features: ['Natural Wood Oils', 'Eco-friendly Sealants', 'Artisan Finishing']
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Custom Cushioning',
    description: 'Providing high-density foam cushions with custom washable covers tailored to the unique shapes of your cane furniture.',
    features: ['32 High Density Foam', 'Washable Cotton Covers', 'Precise Fitting']
  }
];

const quotationData = [
  {
    section: 'I. Foam Cushions (Anda Shaped Chairs)',
    items: [
      { name: 'Seat Cushion (15" x 18")', qty: '20 Nos.', rate: 450, total: 9000 },
      { name: 'Back Cushion (18" x 18")', qty: '20 Nos.', rate: 550, total: 11000 }
    ],
    sectionTotal: 20000
  },
  {
    section: 'II. White Cotton Tapestry (Loose Washable covers)',
    items: [
      { name: 'Tapestry Material (25 mtrs)', qty: '1.25 mtr x 20', rate: 450, total: 11250 },
      { name: 'Stitching & Zipping (40 nos)', qty: 'Seat + Back', rate: 125, total: 5000 }
    ],
    sectionTotal: 16250
  },
  {
    section: 'III. Lounge Chairs',
    items: [
      { name: 'Lounge Chair (Size: 6\'0" x 22")', qty: '1 Unit', rate: 7500, total: 7500 },
      { name: 'Tapestry (2.5 mtrs)', qty: 'Material', rate: 450, total: 1125 },
      { name: 'Stitching & Zipping', qty: 'Fixed', rate: 350, total: 350 }
    ],
    sectionTotal: 8975
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-primary-50 dark:bg-neutral-900 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-secondary-900/80 to-neutral-900/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592078615290-033ee584e267?w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        
        <motion.div 
          className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Repair & <span className="text-gradient-gold">Restoration</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl">
            Preserving the legacy of traditional cane furniture through expert craftsmanship and care.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Core Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={staggerItem}
              className="glass-card p-8 rounded-3xl hover:shadow-luxury-lg transition-all border-b-4 border-transparent hover:border-primary-500 group"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-neutral-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((f, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Quotation Section */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-full text-secondary-600 dark:text-secondary-400 text-sm font-bold mb-4">
              <ClipboardList className="w-4 h-4" /> ESTIMATION & TRANSPARENCY
            </div>
            <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white mb-4">
              Detailed Quotation Summary
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              A sample breakdown of our professional services for large-scale cushion replacement and chair restoration projects.
            </p>
          </motion.div>

          {/* Digital Quotation Paper */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 shadow-luxury-xl rounded-[2.5rem] overflow-hidden border border-neutral-200 dark:border-neutral-700 max-w-4xl mx-auto"
          >
            {/* Header Info */}
            <div className="bg-primary-900 dark:bg-black p-10 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-3xl font-display font-bold mb-2">THE CANE SHOP</h3>
                <p className="text-primary-200 text-sm flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4" /> Opp. Lenskart, Banergaon, Baner, Pune
                </p>
                <p className="text-primary-200 text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +91 9657436665 (Sanjay)
                </p>
              </div>
              <div className="text-left md:text-right border-l md:border-l-0 md:border-r border-primary-700 pl-6 md:pl-0 md:pr-6">
                <p className="text-xs uppercase tracking-widest text-primary-400 mb-1">Reference Number</p>
                <p className="font-mono text-xl font-bold">TCS/1017/26</p>
                <p className="text-sm mt-2">Date: 22/02/26</p>
              </div>
            </div>

            {/* Table Content */}
            <div className="p-8 md:p-12 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-neutral-100 dark:border-neutral-700">
                    <th className="py-4 font-display font-bold text-neutral-800 dark:text-white">Item / Description</th>
                    <th className="py-4 font-bold text-neutral-600 dark:text-neutral-400">Qty / Calculation</th>
                    <th className="py-4 font-bold text-neutral-600 dark:text-neutral-400 text-right">Rate</th>
                    <th className="py-4 font-bold text-neutral-600 dark:text-neutral-400 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-50 dark:divide-neutral-800">
                  {quotationData.map((section, idx) => (
                    <React.Fragment key={idx}>
                      <tr>
                        <td colSpan="4" className="py-6 pt-10 font-bold text-secondary-600 dark:text-secondary-400 uppercase tracking-wide text-xs">
                          {section.section}
                        </td>
                      </tr>
                      {section.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                          <td className="py-4 text-neutral-800 dark:text-neutral-200 font-medium">{item.name}</td>
                          <td className="py-4 text-neutral-600 dark:text-neutral-400">{item.qty}</td>
                          <td className="py-4 text-neutral-600 dark:text-neutral-400 text-right">₹{item.rate.toLocaleString()}</td>
                          <td className="py-4 text-neutral-900 dark:text-white font-bold text-right">₹{item.total.toLocaleString()}.00</td>
                        </tr>
                      ))}
                      <tr className="bg-primary-50/50 dark:bg-primary-900/10">
                        <td colSpan="3" className="py-4 px-4 text-right font-bold text-neutral-600 dark:text-neutral-400">Section Total:</td>
                        <td className="py-4 pr-4 font-bold text-primary-600 dark:text-primary-400 text-right">₹{section.sectionTotal.toLocaleString()}.00</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4" className="pt-12">
                      <div className="bg-primary-600 rounded-2xl p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                          <p className="text-primary-100 uppercase tracking-widest text-xs font-bold mb-2">Grand Total Summary</p>
                          <h4 className="text-4xl font-display font-bold">₹45,225.00</h4>
                          <p className="text-primary-200 text-sm mt-2 italic font-medium">Inclusive of Sections I, II, & III</p>
                        </div>
                        <div className="flex flex-col gap-2 min-w-[200px]">
                           <div className="flex justify-between text-sm py-1 border-b border-primary-500/50">
                              <span>Sub-Total:</span>
                              <span className="font-bold">₹45,225.00</span>
                           </div>
                           <div className="flex justify-between text-sm py-1">
                              <span>Advance (50%):</span>
                              <span className="font-bold">₹22,612.50</span>
                           </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Terms */}
            <div className="p-8 md:p-12 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-100 dark:border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-10">
               <div>
                  <h4 className="font-bold text-neutral-800 dark:text-white mb-4 flex items-center gap-2">
                     <FileText className="w-4 h-4 text-primary-500" /> Terms & Conditions
                  </h4>
                  <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                     <li>• 50% initial advance payment to initiate supply.</li>
                     <li>• Balance payment must be cleared against delivery.</li>
                     <li>• Warranty on foam density specifically (32HD).</li>
                     <li>• Tapestry is washable for easy maintenance.</li>
                  </ul>
               </div>
               <div className="flex flex-col items-center justify-center border-l-0 md:border-l border-neutral-200 dark:border-neutral-700 pl-0 md:pl-10">
                  <p className="text-xs text-neutral-400 uppercase font-bold mb-8">Authorised Signature</p>
                  <div className="w-48 h-1 bg-neutral-300 dark:bg-neutral-600 mb-2" />
                  <p className="font-display font-medium text-neutral-800 dark:text-white underline decoration-primary-500 underline-offset-4 decoration-2">Proprietor, The Cane Shop</p>
               </div>
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-primary-900 rounded-[3rem] p-16 text-white"
        >
          <h2 className="text-4xl font-display font-bold mb-6">Need a Restoration?</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-10">
            For netting, polishing, or a custom quotation for your project, get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="accent" size="lg" className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Sanjay Now
             </Button>
             <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                Visit Our Store
             </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;
