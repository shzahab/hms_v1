
'use client';

import { useState, useEffect } from 'react';
import ContactForm from '@/app/contact/contact-form';

export default function DelayedContactOverlay() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!showOverlay) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={() => setShowOverlay(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Get in touch with us for any inquiries about our products and services.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
