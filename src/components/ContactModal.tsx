import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-5"
          style={{ background: 'rgba(0, 0, 0, 0.7)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl border border-[#D7E2EA]/15 bg-[#0C0C0C] p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors duration-200"
            >
              <X size={20} />
            </button>

            <span className="text-[#8FE3D6] uppercase tracking-[0.3em] text-xs">
              Contact
            </span>
            <h3 className="text-[#D7E2EA] font-medium uppercase text-2xl sm:text-3xl mt-2 mb-6">
              Send a message
            </h3>

            <ContactForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}