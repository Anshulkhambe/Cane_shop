import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, ChevronDown, Star } from 'lucide-react';
import { CATEGORIES } from '../config/constants';
import { fadeInUp, staggerContainer, staggerItem } from '../config/animations';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

// Enhanced sample products
const products = [
  { id: 1, name: 'Chair', price: '₹14,999', category: 'chairs', isBestSeller: true, rating: 4.8, reviews: 124, image: '/public/products/Chair.JPG' },
  { id: 2, name: 'Premium Square Chair', price: '₹11,500', category: 'chairs', isNew: true, rating: 4.7, reviews: 98, image: '/public/products/Chairss.JPG' },
  { id: 3, name: 'The Tear-Drop Pod Swing', price: '₹22,999', category: 'outdoor', rating: 4.9, reviews: 213, image: '/products/cane_zoola_swing_1774781727751.png' },
  { id: 4, name: 'Sofa Set', price: '₹35,000', category: 'sofas', isBestSeller: true, rating: 5.0, reviews: 45, image: '/public/products/Sofa set.JPG' },
  { id: 5, name: 'The Hourglass Mooda', price: '₹4,500', category: 'tables', rating: 4.5, reviews: 76, image: '/products/cane_moda_stool_1774781745213.png' },
  { id: 6, name: 'Square Bamboo Stool', price: '₹3,500', category: 'tables', isNew: true, rating: 4.6, reviews: 89, image: '/products/cane_square_stool_1774782033503.png' },
  { id: 7, name: 'Chair', price: '₹6,500', category: 'chairs', rating: 4.9, reviews: 156, image: '/public/products/Chairs.JPG' },
  { id: 8, name: 'Sofa Set', price: '₹75,000', category: 'sofas', isBestSeller: true, rating: 4.9, reviews: 112, image: '/public/products/Sofa Set (2).JPG' },
  { id: 9, name: 'Cane Sofa', price: '₹10,000', category: 'sofas', isNew: true, rating: 4.8, reviews: 67, image: '/public/products/Sofa.JPG' },
  { id: 10, name: 'Pedestal Glass-Top Dining Table', price: '₹42,000', category: 'dining', rating: 4.7, reviews: 94, image: '/products/cane_dining_table_1774781802134.png' },
  { id: 11, name: 'Woven Pendant Light', price: '₹6,500', category: 'custom', rating: 4.8, reviews: 132, image: '/products/cane_lamp_shade_1774781823123.png' },
  { id: 12, name: 'Tripod Floor Lamp', price: '₹12,000', category: 'custom', isNew: true, rating: 4.7, reviews: 52, image: '/products/cane_tripod_lamp_1774782073303.png' },
  { id: 13, name: 'The Circular "Moon" Shelf', price: '₹24,000', category: 'storage', rating: 4.9, reviews: 115, image: '/products/cane_book_shelf_1774781840173.png' },
  { id: 14, name: 'The Arched Etagere', price: '₹32,000', category: 'storage', isBestSeller: true, rating: 4.8, reviews: 88, image: '/products/cane_arched_shelf_1774782091139.png' },
  { id: 15, name: 'Dining Chair Set', price: '18,500', category: 'dining', rating: 4.5, reviews: 64, image: '/public/products/Dining with moda.JPG' },
  { id: 16, name: 'Stand Zoola', price: '₹28,500', category: 'outdoor', isNew: true, rating: 4.9, reviews: 52, image: '/public/products/Stand Zoola.JPG' },
  { id: 17, name: 'Round Moda', price: '₹4,400', category: 'tables', rating: 4.7, reviews: 31, image: '/public/products/moda.JPG' },
  { id: 18, name: 'Curved Loveseat Sofa', price: '₹24,500', category: 'sofas', rating: 4.8, reviews: 42, image: '/products/cane_sofa_curved_loveseat_1774807479853.png' },
  { id: 19, name: '6-Seater Dining Set', price: '₹58,000', category: 'dining', isBestSeller: true, rating: 4.9, reviews: 88, image: '/products/cane_dining_6seater_rectangular_1774807530885.png' },
  { id: 20, name: 'Woven Table Lamp', price: '₹4,200', category: 'custom', rating: 4.7, reviews: 25, image: '/products/cane_lamp_table_woven_1774807567552.png' },
  { id: 21, name: 'Corner Bamboo Shelf', price: '₹7,500', category: 'storage', rating: 4.6, reviews: 19, image: '/products/cane_shelf_corner_bamboo_1774807590885.png' },
  { id: 22, name: 'Anda Chair Set', price: '₹18,500', category: 'chairs', isBestSeller: true, rating: 4.8, reviews: 42, image: '/products/Anda Chair Set.JPG' },
  { id: 23, name: 'Premium Anda Single', price: '₹9,500', category: 'chairs', rating: 4.7, reviews: 28, image: '/products/Anda Chair.JPG' },
  { id: 24, name: 'Antique Bistro Chair', price: '₹11,500', category: 'chairs', rating: 4.9, reviews: 15, image: '/products/Chhairs.JPG' },
  { id: 25, name: 'Classic Zoola Swing', price: '₹12,000', category: 'outdoor', isBestSeller: true, rating: 5.0, reviews: 56, image: '/products/Zoola.JPG' },
  { id: 26, name: 'Natural Zola Pod', price: '₹28,500', category: 'outdoor', rating: 4.8, reviews: 31, image: '/products/Zola.JPG' },
  { id: 27, name: 'Square Moda Stool', price: '₹4,800', category: 'tables', isNew: true, rating: 4.6, reviews: 19, image: '/products/Square Moda.JPG' },
  { id: 28, name: 'Traditional Round Moda', price: '₹4,200', category: 'tables', rating: 4.7, reviews: 24, image: '/products/modaa.JPG' },
  { id: 29, name: 'Dining Set', price: '₹25,000', category: 'dining', isBestSeller: true, rating: 4.9, reviews: 38, image: '/public/products/Dining.JPG' },
  { id: 30, name: 'Sofa Set', price: '₹26,500', category: 'sofas', isNew: true, rating: 5.0, reviews: 12, image: '/public/products/Sofa+Chairs.JPG' },
  { id: 31, name: 'Sofa Set', price: '₹22,000', category: 'storage', rating: 4.7, reviews: 20, image: '/public/products/sofaasets.jpeg' }
];

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [wishlist, setWishlist] = useState([]);

  const parsePrice = (value) => Number(value.replace(/[^\d]/g, ''));
  const filteredProducts = useMemo(() => {
    const byCategory = selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

    const sorted = [...byCategory];
    if (sortBy === 'newest') {
      sorted.sort((a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)));
    } else if (sortBy === 'price-low') {
      sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === 'price-high') {
      sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortBy === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    } else {
      sorted.sort((a, b) => Number(Boolean(b.isBestSeller)) - Number(Boolean(a.isBestSeller)));
    }

    return sorted;
  }, [selectedCategory, sortBy]);

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-primary-50 dark:bg-neutral-900 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-96 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-secondary-900/80 to-neutral-900/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041463-a586c061ea63?w=2000&auto=format&fit=crop')] bg-cover bg-center" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6"
        >
          <span className="glass-dark px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Premium Collection
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Handcrafted <span className="text-gradient-gold">Collections</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl">
            Explore our curated selection of artisanal cane furniture for every room
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          {/* Category Filter Pills */}
          <div className="flex-1 overflow-x-auto pb-2 custom-scrollbar">
            <div className="flex gap-3">
              {CATEGORIES.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl whitespace-nowrap font-medium transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-luxury'
                    : 'glass-card hover:shadow-glass'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="glass-card appearance-none pr-10 pl-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-neutral-600" />
          </div>
        </div>

        {/* Results Count */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-neutral-600 dark:text-neutral-400 mb-8"
        >
          Showing <span className="font-semibold text-primary-700 dark:text-primary-400">{filteredProducts.length}</span> products
        </motion.p>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={staggerItem}
                layout
                className="group"
              >
                <Card hover padding="none" className="overflow-hidden h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="glass-dark px-3 py-1 text-xs font-bold text-white rounded-full">
                          New
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="bg-accent px-3 py-1 text-xs font-bold text-neutral-900 rounded-full">
                          Bestseller
                        </span>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        onClick={() => toggleWishlist(product.id)}
                        className="p-3 glass-card rounded-full hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart
                          className={`w-5 h-5 ${wishlist.includes(product.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-neutral-700'
                            }`}
                        />
                      </motion.button>
                      <motion.button
                        className="p-3 glass-card rounded-full hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ShoppingCart className="w-5 h-5 text-neutral-700" />
                      </motion.button>
                    </div>

                    {/* View Details Button */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="accent" size="sm" fullWidth>
                        Quick View
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2 capitalize">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-lg text-primary-900 dark:text-primary-100 mb-3 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-neutral-300'
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-neutral-500">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-neutral-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                          Save{' '}
                          {Math.round(
                            ((parseInt(product.originalPrice.replace(/[₹,]/g, '')) -
                              parseInt(product.price.replace(/[₹,]/g, ''))) /
                              parseInt(product.originalPrice.replace(/[₹,]/g, ''))) *
                            100
                          )}
                          %
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Collections;
