import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { cardHover } from '../../config/animations';

/**
 * Luxury Card Component
 * Features hover animations, glassmorphism variant, and flexible styling
 */
const Card = ({
    children,
    hover = true,
    glass = false,
    className = '',
    padding = 'md',
    ...props
}) => {
    const variants = {
        default: 'card',
        hover: 'card-hover',
        glass: 'card-glass',
    };

    const paddings = {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
    };

    const cardClass = glass ? variants.glass : hover ? variants.hover : variants.default;
    const paddingClass = paddings[padding];

    const cardClasses = `${cardClass} ${paddingClass} ${className}`;

    return hover && !glass ? (
        <motion.div
            className={cardClasses}
            variants={cardHover}
            initial="rest"
            whileHover="hover"
            {...props}
        >
            {children}
        </motion.div>
    ) : (
        <div className={cardClasses} {...props}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    hover: PropTypes.bool,
    glass: PropTypes.bool,
    className: PropTypes.string,
    padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
};

export default Card;
