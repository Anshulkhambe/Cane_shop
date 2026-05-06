// Application-wide constants

// ============================================
// BUSINESS INFORMATION
// ============================================
export const BUSINESS_INFO = {
    name: 'The Cane Shop',
    location: {
        city: 'Baner',
        state: 'Pune',
        fullAddress: 'Shop No. 1, Opp Photo Gold, Baner Gaon, Near COSMOS CO-OP. BANK LTD. (BANER BRANCH), Pune, Maharashtra 411069',
        mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3546!2d73.7890123!3d18.515919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sBaner%2C%20Pune%2C%20Maharashtra%20411045!5e0!3m2!1sen!2sin!4v1643122117655!5m2!1sen!2sin',
    },
    contact: {
        phone: '+91 96574 36665',
        email: 'hello@thecaneshop.com',
        supportEmail: 'support@thecaneshop.com',
    },
    social: {
        facebook: 'https://facebook.com/thecaneshop',
        instagram: 'https://instagram.com/thecaneshop',
        twitter: 'https://x.com/thecaneshop',
        pinterest: 'https://pinterest.com/thecaneshop',
    },
    hours: {
        weekdays: '10:00 AM - 9:00 PM',
        saturday: '10:00 AM - 9:00 PM',
        sunday: '10:00 AM - 9:00 PM',
    },
    founded: 2010,
    founder: {
        name: 'Sanjay Khambe',
        experience: '15+',
        quote: 'Every piece of furniture we create carries a piece of our soul and the rich heritage of Indian craftsmanship.',
    },
};

// ============================================
// NAVIGATION
// ============================================
export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Why Cane', path: '/why-cane' },
    { name: 'Contact', path: '/contact' },
];

// ============================================
// PRODUCT CATEGORIES
// ============================================
export const CATEGORIES = [
    { id: 'all', name: 'All', slug: 'all' },
    { id: 'sofas', name: 'Sofas', slug: 'sofas' },
    { id: 'chairs', name: 'Chairs', slug: 'chairs' },
    { id: 'tables', name: 'Tables', slug: 'tables' },
    { id: 'dining', name: 'Dining', slug: 'dining' },
    { id: 'outdoor', name: 'Outdoor', slug: 'outdoor' },
    { id: 'storage', name: 'Storage', slug: 'storage' },
    { id: 'custom', name: 'Custom', slug: 'custom' },
];

// ============================================
// FEATURES
// ============================================
export const FEATURES = [
    {
        id: 1,
        title: 'Handcrafted Excellence',
        description: 'Each piece meticulously handcrafted by skilled artisans with decades of experience',
        icon: 'craft',
    },
    {
        id: 2,
        title: 'Sustainable Materials',
        description: 'Eco-friendly and responsibly sourced materials for a greener future',
        icon: 'leaf',
    },
    {
        id: 3,
        title: 'Premium Quality',
        description: 'Lifetime durability with the finest materials and construction techniques',
        icon: 'shield',
    },
    {
        id: 4,
        title: 'Custom Designs',
        description: 'Tailor-made solutions to match your unique style and requirements',
        icon: 'palette',
    },
    {
        id: 5,
        title: 'Free Shipping',
        description: 'Complimentary delivery on all orders above ₹10,000',
        icon: 'truck',
    },
    {
        id: 6,
        title: 'Expert Support',
        description: 'Dedicated customer service to assist you every step of the way',
        icon: 'support',
    },
];

// ============================================
// STATS
// ============================================
export const STATS = [
    { label: 'Years of Craftsmanship', value: 15, suffix: '+', icon: 'calendar' },
    { label: 'Happy Customers', value: 10000, suffix: '+', icon: 'users' },
    { label: 'Furniture Pieces', value: 500, suffix: '+', icon: 'furniture' },
    { label: 'Custom Projects', value: 200, suffix: '+', icon: 'star' },
];

// ============================================
// WHY CANE FURNITURE
// ============================================
export const CANE_BENEFITS = [
    {
        id: 1,
        title: 'Durability',
        description: 'Cane furniture can last for decades with proper care, making it a wise investment.',
        icon: 'shield-check',
    },
    {
        id: 2,
        title: 'Eco-Friendly',
        description: 'Made from renewable rattan palms, cane is a sustainable alternative to plastic and metal.',
        icon: 'leaf',
    },
    {
        id: 3,
        title: 'Lightweight',
        description: 'Easy to move and rearrange, perfect for flexible living spaces.',
        icon: 'feather',
    },
    {
        id: 4,
        title: 'Breathable',
        description: 'Natural ventilation makes cane furniture ideal for warm climates.',
        icon: 'wind',
    },
    {
        id: 5,
        title: 'Timeless Style',
        description: 'Classic designs that never go out of fashion, blending with any decor.',
        icon: 'sparkles',
    },
    {
        id: 6,
        title: 'Affordable Luxury',
        description: 'Premium quality at accessible prices, offering the best value for money.',
        icon: 'heart',
    },
];

// ============================================
// ANIMATION DURATIONS
// ============================================
export const ANIMATION_DURATION = {
    fast: 200,
    normal: 400,
    slow: 600,
    verySlow: 1000,
};

// ============================================
// SEO METADATA
// ============================================
export const SEO = {
    home: {
        title: 'The Cane Shop - Luxury Handcrafted Cane Furniture in Baner, Pune',
        description: 'Premium handcrafted cane & rattan furniture in Baner, Pune. Sustainable luxury for modern living. 15+ years of craftsmanship excellence.',
        keywords: 'cane furniture, rattan furniture, handcrafted furniture, luxury furniture, Baner Pune, sustainable furniture',
    },
    collections: {
        title: 'Furniture Collections - The Cane Shop',
        description: 'Explore our exclusive collection of handcrafted cane sofas, chairs, tables, and custom furniture pieces.',
        keywords: 'cane sofa, rattan chair, dining table, outdoor furniture, custom furniture',
    },
    about: {
        title: 'About Us - The Cane Shop Story',
        description: 'Learn about our journey of reviving traditional cane craftsmanship with modern design. 15+ years of excellence.',
        keywords: 'about us, craftsmanship, artisan furniture, Sanjay Khambe',
    },
    gallery: {
        title: 'Gallery - The Cane Shop',
        description: 'Explore stunning visuals of our handcrafted cane furniture collection.',
        keywords: 'furniture gallery, cane furniture images, interior design',
    },
    contact: {
        title: 'Contact Us - The Cane Shop Baner',
        description: 'Visit our showroom in Baner, Pune or get in touch for custom furniture inquiries.',
        keywords: 'contact, showroom, Baner Pune, furniture store',
    },
};
