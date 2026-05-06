// Animation configuration for consistent animations across the app

// ============================================
// PAGE TRANSITIONS
// ============================================
export const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, 0.05, 0.01, 0.9],
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            ease: [0.6, 0.05, 0.01, 0.9],
        },
    },
};

// ============================================
// FADE ANIMATIONS
// ============================================
export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, 0.05, 0.01, 0.9],
        },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 },
    },
};

// ============================================
// SLIDE ANIMATIONS
// ============================================
export const slideInLeft = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, 0.05, 0.01, 0.9],
        },
    },
};

export const slideInRight = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, 0.05, 0.01, 0.9],
        },
    },
};

// ============================================
// SCALE ANIMATIONS
// ============================================
export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.6, 0.05, 0.01, 0.9],
        },
    },
};

// ============================================
// STAGGER CONTAINER
// ============================================
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// ============================================
// STAGGER ITEMS
// ============================================
export const staggerItem = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.6, 0.05, 0.01, 0.9],
        },
    },
};

// ============================================
// HOVER ANIMATIONS
// ============================================
export const hoverLift = {
    rest: {
        y: 0,
        scale: 1,
    },
    hover: {
        y: -8,
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

export const hoverScale = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

// ============================================
// CARD ANIMATIONS
// ============================================
export const cardHover = {
    rest: {
        y: 0,
        boxShadow: '0 10px 40px rgba(139, 111, 71, 0.15)',
    },
    hover: {
        y: -12,
        boxShadow: '0 20px 60px rgba(139, 111, 71, 0.25)',
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

// ============================================
// IMAGE REVEAL
// ============================================
export const imageReveal = {
    hidden: {
        scale: 1.2,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9],
        },
    },
};

// ============================================
// OVERLAY ANIMATIONS
// ============================================
export const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
};

// ============================================
// MODAL ANIMATIONS
// ============================================
export const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.6, 0.05, 0.01, 0.9],
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: {
            duration: 0.3,
        },
    },
};

// ============================================
// NAVIGATION ANIMATIONS
// ============================================
export const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.4,
        },
    }),
};

// ============================================
// CUSTOM EASING
// ============================================
export const easing = {
    smooth: [0.6, 0.05, 0.01, 0.9],
    easeInOut: [0.42, 0, 0.58, 1],
    easeOut: [0.16, 1, 0.3, 1],
    spring: { type: 'spring', stiffness: 100, damping: 15 },
};

// ============================================
// TRANSITION PRESETS
// ============================================
export const transitions = {
    fast: { duration: 0.2 },
    normal: { duration: 0.4 },
    slow: { duration: 0.6 },
    verySlow: { duration: 1 },
};
