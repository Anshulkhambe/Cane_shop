import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { CATEGORIES } from '../config/constants';
import { fadeInUp, staggerContainer, staggerItem, imageReveal } from '../config/animations';

const galleryImages = [
  { id: 1, src: '/products/cane_chair_traditional_1774781710345.png', category: 'chairs', title: 'The Barrel/Cask Chair', height: 'tall' },
  { id: 2, src: '/products/cane_bistro_chair_1774781998921.png', category: 'chairs', title: 'The "Cross-Back" Bistro Chair', height: 'medium' },
  { id: 3, src: '/products/cane_zoola_swing_1774781727751.png', category: 'outdoor', title: 'The Tear-Drop Pod Swing', height: 'tall' },
  { id: 4, src: '/products/cane_wooden_swing_1774782015654.png', category: 'outdoor', title: 'Traditional Wooden-Frame Swing', height: 'medium' },
  { id: 5, src: '/products/cane_moda_stool_1774781745213.png', category: 'tables', title: 'The Hourglass Mooda', height: 'short' },
  { id: 6, src: '/products/cane_square_stool_1774782033503.png', category: 'tables', title: 'Square Bamboo Stool', height: 'short' },
  { id: 7, src: '/products/cane_rocking_chair_1774781762788.png', category: 'chairs', title: 'The Bentwood Classic Rocker', height: 'tall' },
  { id: 8, src: '/products/cane_sofa_set_1774781783747.png', category: 'sofas', title: 'The Maharaja Sofa Set', height: 'medium' },
  { id: 9, src: '/products/cane_modern_sofa_1774782050840.png', category: 'sofas', title: 'Low-Profile Modern Cane Sofa', height: 'medium' },
  { id: 10, src: '/products/cane_dining_table_1774781802134.png', category: 'dining', title: 'Pedestal Glass-Top Dining Table', height: 'tall' },
  { id: 11, src: '/products/cane_lamp_shade_1774781823123.png', category: 'custom', title: 'Woven Pendant Light', height: 'medium' },
  { id: 12, src: '/products/cane_tripod_lamp_1774782073303.png', category: 'custom', title: 'Tripod Floor Lamp', height: 'tall' },
  { id: 13, src: '/products/cane_book_shelf_1774781840173.png', category: 'storage', title: 'The Circular "Moon" Shelf', height: 'short' },
  { id: 14, src: '/products/cane_arched_shelf_1774782091139.png', category: 'storage', title: 'The Arched Etagere', height: 'tall' },
  { id: 15, src: '/products/cane_chair_folding_traditional_1774806818166.png', category: 'chairs', title: 'Traditional Folding Chair', height: 'medium' },
  { id: 16, src: '/products/cane_zoola_double_swing_1774807194060.png', category: 'outdoor', title: 'Double Zoola Swing', height: 'tall' },
  { id: 17, src: '/products/cane_table_rectangular_coffee_1774807252255.png', category: 'tables', title: 'Rectangular Coffee Table', height: 'short' },
  { id: 18, src: '/products/cane_sofa_curved_loveseat_1774807479853.png', category: 'sofas', title: 'Curved Loveseat', height: 'medium' },
  { id: 19, src: '/products/cane_dining_6seater_rectangular_1774807530885.png', category: 'dining', title: '6-Seater Dining Set', height: 'tall' },
  { id: 20, src: '/products/cane_lamp_table_woven_1774807567552.png', category: 'custom', title: 'Woven Table Lamp', height: 'short' },
  { id: 21, src: '/products/cane_shelf_corner_bamboo_1774807590885.png', category: 'storage', title: 'Corner Bamboo Shelf', height: 'medium' },
  { id: 22, src: '/products/cane_chair_papasan_luxury_1774807624674.png', category: 'chairs', title: 'Luxury Papasan Chair', height: 'tall' },
  { id: 23, src: '/products/Anda Chair Set.JPG', category: 'chairs', title: 'Anda Chair Set', height: 'medium' },
  { id: 24, src: '/products/Zoola.JPG', category: 'outdoor', title: 'Classic Zoola Swing', height: 'tall' },
  { id: 25, src: '/products/Square Moda.JPG', category: 'tables', title: 'Square Moda Stool', height: 'short' },
  { id: 26, src: '/products/Mirror.JPG', category: 'custom', title: 'Artisan Mirror Decor', height: 'medium' },
  { id: 27, src: '/products/Shelff.JPG', category: 'storage', title: 'Premium Bamboo Shelf', height: 'tall' },
  { id: 28, src: '/products/Dining with Moda.JPG', category: 'dining', title: 'Dining with Moda Set', height: 'medium' },
  { id: 29, src: '/products/Chhairs.JPG', category: 'chairs', title: 'Antique Bistro Chair', height: 'medium' }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [failedImages, setFailedImages] = useState(new Set());

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') return galleryImages;
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const fallbackImages = useMemo(
    () =>
      Object.fromEntries(
        galleryImages.map((image) => [
          image.id,
          `data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000">
              <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#4A3A24"/>
                  <stop offset="100%" stop-color="#181D14"/>
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#bg)"/>
              <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#F5F0E8" font-family="Inter, Arial, sans-serif" font-size="36">${image.title}</text>
            </svg>`
          )}`,
        ])
      ),
    []
  );

  const getImageSrc = (image) => (failedImages.has(image.id) ? fallbackImages[image.id] : image.src);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsFullscreen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-primary-50 dark:bg-neutral-900 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-80 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/90 via-primary-900/80 to-neutral-900/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=2000&auto=format&fit=crop')] bg-cover bg-center" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Our <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl">
            Explore the stunning beauty of our handcrafted cane furniture in real spaces
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-10 overflow-x-auto pb-2 custom-scrollbar"
        >
          <div className="flex gap-3 bg-white/70 dark:bg-neutral-800/70 rounded-2xl p-2 border border-neutral-200 dark:border-neutral-700 shadow-sm">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl whitespace-nowrap font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* BookMyShow style poster gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                variants={staggerItem}
                layout
                className="group cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-md bg-white dark:bg-neutral-800 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-2xl">
                    <motion.img
                      src={getImageSrc(image)}
                      alt={image.title}
                      loading="lazy"
                      onError={() =>
                        setFailedImages((prev) => {
                          if (prev.has(image.id)) return prev;
                          const next = new Set(prev);
                          next.add(image.id);
                          return next;
                        })
                      }
                      className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-500"
                      variants={imageReveal}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-sm font-semibold leading-snug line-clamp-2 mb-1">{image.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-300 capitalize">{image.category}</span>
                        <div className="inline-flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {filteredImages.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <p className="text-neutral-600 dark:text-neutral-300 text-lg">
                    No products found in this category.
                  </p>
                </div>
              )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 bg-black/95 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-4'
              }`}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 z-50 p-3 glass-dark rounded-full text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Fullscreen Toggle */}
            <motion.button
              className="absolute top-6 right-20 z-50 p-3 glass-dark rounded-full text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreen(!isFullscreen);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isFullscreen ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
            </motion.button>

            {/* Navigation */}
            <motion.button
              className="absolute left-6 z-50 p-4 glass-dark rounded-full text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            <motion.button
              className="absolute right-6 z-50 p-4 glass-dark rounded-full text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative ${isFullscreen ? 'w-full h-full' : 'max-w-6xl max-h-[90vh]'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getImageSrc(selectedImage)}
                alt={selectedImage.title}
                className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-contain rounded-2xl'}`}
              />

              {/* Image Info */}
              {!isFullscreen && (
                <div className="glass-dark rounded-b-2xl p-6 text-white">
                  <h3 className="text-2xl font-display font-semibold mb-2">{selectedImage.title}</h3>
                  <p className="text-neutral-300 capitalize">{selectedImage.category}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
