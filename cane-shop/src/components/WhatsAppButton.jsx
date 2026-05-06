import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919657436665';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'm interested in your cane furniture. Can you help me?")}`;

const WhatsAppButton = () => {
    return (
        <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-2xl transition-colors duration-200 group overflow-hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30 pointer-events-none" />

            {/* Collapsed state (icon only) */}
            <div className="flex items-center gap-0 group-hover:gap-3 transition-all duration-300 pr-4 pl-4 py-4 group-hover:pr-5">
                <MessageCircle className="w-6 h-6 shrink-0" />
                <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300 text-sm">
                    Chat with us!
                </span>
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
