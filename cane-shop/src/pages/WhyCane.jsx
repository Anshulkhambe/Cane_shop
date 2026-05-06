import { motion } from 'framer-motion';
import { Leaf, Shield, Wind, Feather, Sparkles, Heart, Sun, Recycle, TreePine, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../config/animations';

const benefits = [
    {
        icon: Shield,
        title: 'Exceptional Durability',
        desc: 'High-quality cane furniture can last 20–30 years with minimal care. Rattan\'s natural tensile strength makes it more resilient than many hardwoods, resisting warping and cracking over time.',
        color: 'text-primary-600 bg-primary-100 dark:bg-primary-900/40',
    },
    {
        icon: Leaf,
        title: '100% Eco-Friendly',
        desc: 'Rattan, the source of cane, is the world\'s fastest-growing palm plant — reaching full maturity in 5–7 years compared to 40–60 years for most timber trees. Harvesting rattan actually encourages forest regrowth.',
        color: 'text-secondary-600 bg-secondary-100 dark:bg-secondary-900/40',
    },
    {
        icon: Feather,
        title: 'Lightweight Yet Strong',
        desc: 'Cane furniture weighs up to 70% less than equivalent wooden furniture, making it incredibly easy to rearrange. Despite its lightness, quality cane can support more than 200 kg — your whole family can sit comfortably.',
        color: 'text-accent bg-amber-50 dark:bg-amber-900/20',
    },
    {
        icon: Wind,
        title: 'Naturally Breathable',
        desc: 'The woven, open weave structure of cane allows air to circulate freely. This makes cane furniture naturally cool to sit on — ideal for India\'s warm climate, both indoors and outdoors.',
        color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
    },
    {
        icon: Sun,
        title: 'All-Climate Versatility',
        desc: 'Properly treated cane withstands heat, humidity, and light rain. It\'s equally stunning on a sun-bathed balcony as it is in an air-conditioned living room — making it one of the most versatile furniture materials available.',
        color: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20',
    },
    {
        icon: Sparkles,
        title: 'Timeless Aesthetic',
        desc: 'Cane\'s warm, organic texture blends effortlessly with every interior style — be it Bohemian, Japandi, Classic Indian, or Contemporary. It ages beautifully, developing a rich character over the years.',
        color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
    },
    {
        icon: Heart,
        title: 'Hypoallergenic & Safe',
        desc: 'Cane is a natural material free of toxic chemicals. Unlike synthetic furniture, it doesn\'t off-gas volatile organic compounds (VOCs), making it a healthier choice for your home and family.',
        color: 'text-rose-500 bg-rose-50 dark:bg-rose-900/20',
    },
    {
        icon: Recycle,
        title: 'Low Carbon Footprint',
        desc: 'From harvest to workshop, cane furniture production requires far less energy than metal or plastic furniture. Rattan forests also act as carbon sinks, actively absorbing CO₂ from the atmosphere.',
        color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20',
    },
];

const comparisons = [
    { feature: 'Eco-Friendly Sourcing', cane: true, wood: false, plastic: false, metal: false },
    { feature: 'Lightweight', cane: true, wood: false, plastic: true, metal: false },
    { feature: 'Naturally Breathable', cane: true, wood: false, plastic: false, metal: false },
    { feature: 'Long Lifespan (20+ yrs)', cane: true, wood: true, plastic: false, metal: true },
    { feature: 'Low Carbon Footprint', cane: true, wood: false, plastic: false, metal: false },
    { feature: 'Hypoallergenic', cane: true, wood: false, plastic: false, metal: true },
    { feature: 'Indoor & Outdoor Use', cane: true, wood: false, plastic: true, metal: true },
    { feature: 'Timeless Style', cane: true, wood: true, plastic: false, metal: false },
];

const careSteps = [
    { step: '01', title: 'Regular Dusting', desc: 'Wipe with a soft dry or slightly damp cloth weekly to prevent dirt build-up in the weave.' },
    { step: '02', title: 'Avoid Direct Sunlight', desc: 'Prolonged exposure to harsh sunlight can dry and bleach cane. Use light curtains or shade in summer.' },
    { step: '03', title: 'Humidity Balance', desc: 'Cane thrives in moderate humidity. In very dry conditions, lightly mist occasionally to prevent brittleness.' },
    { step: '04', title: 'Annual Oiling', desc: 'Apply a thin coat of linseed or teak oil once a year to keep cane supple and prevent cracking.' },
];

const WhyCane = () => {
    return (
        <div className="min-h-screen bg-primary-50 dark:bg-neutral-900 pt-24 pb-16">

            {/* Hero */}
            <section className="relative h-80 md:h-96 overflow-hidden mb-20">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/85 via-primary-900/70 to-neutral-900/85 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&auto=format&fit=crop')" }}
                />
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6"
                >
                    <span className="glass-dark px-5 py-2 rounded-full text-sm font-semibold mb-5 flex items-center gap-2">
                        <TreePine className="w-4 h-4" /> Nature's Finest Material
                    </span>
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
                        Why <span className="text-gradient-gold">Cane Furniture?</span>
                    </h1>
                    <p className="text-lg text-neutral-200 max-w-2xl">
                        Discover why cane and rattan have been the preferred choice of discerning homeowners for centuries — and why it's the most sustainable luxury you can choose today.
                    </p>
                </motion.div>
            </section>

            <div className="container mx-auto px-4">

                {/* Intro */}
                <section className="max-w-3xl mx-auto text-center mb-24">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">The Cane Advantage</span>
                        <h2 className="text-4xl font-display font-bold text-primary-900 dark:text-primary-100 mt-3 mb-6">
                            Ancient Wisdom, Modern Living
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                            Cane furniture has graced the homes of royalty, colonial bungalows, and tropical resorts for centuries. Today, with the world waking up to sustainability and mindful living, cane is having a well-deserved renaissance. Here's why it deserves a place in your home.
                        </p>
                    </motion.div>
                </section>

                {/* Benefits Grid */}
                <section className="max-w-6xl mx-auto mb-24">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
                        <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">8 Reasons to Choose Cane</span>
                        <h2 className="text-4xl font-display font-bold text-primary-900 dark:text-primary-100 mt-3">The Benefits</h2>
                    </motion.div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {benefits.map((b) => {
                            const Icon = b.icon;
                            return (
                                <motion.div key={b.title} variants={staggerItem} className="card p-6 flex flex-col gap-4">
                                    <div className={`p-3 rounded-xl w-fit ${b.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-primary-100">{b.title}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">{b.desc}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </section>

                {/* Comparison Table */}
                <section className="max-w-5xl mx-auto mb-24">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
                        <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">How It Compares</span>
                        <h2 className="text-4xl font-display font-bold text-primary-900 dark:text-primary-100 mt-3">Cane vs. Other Materials</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="card overflow-hidden"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-primary-800 text-white">
                                        <th className="text-left px-6 py-4 font-semibold">Feature</th>
                                        <th className="px-6 py-4 font-semibold text-accent-light">Cane/Rattan</th>
                                        <th className="px-6 py-4 font-semibold">Solid Wood</th>
                                        <th className="px-6 py-4 font-semibold">Plastic</th>
                                        <th className="px-6 py-4 font-semibold">Metal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisons.map((row, i) => (
                                        <tr
                                            key={row.feature}
                                            className={i % 2 === 0 ? 'bg-primary-50 dark:bg-neutral-800' : 'bg-white dark:bg-neutral-900'}
                                        >
                                            <td className="px-6 py-4 font-medium text-neutral-800 dark:text-neutral-200">{row.feature}</td>
                                            {[row.cane, row.wood, row.plastic, row.metal].map((val, j) => (
                                                <td key={j} className="px-6 py-4 text-center">
                                                    {val
                                                        ? <CheckCircle className="w-5 h-5 text-secondary-600 mx-auto" />
                                                        : <span className="text-neutral-300 dark:text-neutral-600 text-xl mx-auto block text-center">–</span>}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </section>

                {/* Care Tips */}
                <section className="max-w-4xl mx-auto mb-24">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
                        <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">Make It Last a Lifetime</span>
                        <h2 className="text-4xl font-display font-bold text-primary-900 dark:text-primary-100 mt-3">Caring for Your Cane Furniture</h2>
                    </motion.div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 gap-6"
                    >
                        {careSteps.map((c) => (
                            <motion.div key={c.step} variants={staggerItem} className="card p-6 flex gap-5 items-start">
                                <span className="text-4xl font-display font-bold text-primary-200 dark:text-primary-800 leading-none">{c.step}</span>
                                <div>
                                    <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-primary-100 mb-2">{c.title}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-300">{c.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Sustainability Note */}
                <section className="max-w-4xl mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-secondary-800 to-primary-800 rounded-3xl p-10 md:p-14 text-white text-center"
                    >
                        <TreePine className="w-12 h-12 text-accent-light mx-auto mb-5" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            A Furniture Choice That Gives Back to the Earth
                        </h2>
                        <p className="text-neutral-200 text-lg leading-relaxed max-w-2xl mx-auto">
                            Every piece of cane furniture you purchase from The Cane Shop supports rural artisan communities in Maharashtra and contributes to the sustainable harvest of rattan from Northeast India — a forest ecosystem that cleans our air and shelters thousands of species.
                        </p>
                        <p className="mt-4 text-accent-light font-semibold">
                            Choose cane. Choose craft. Choose a better future.
                        </p>
                    </motion.div>
                </section>

            </div>
        </div>
    );
};

export default WhyCane;
