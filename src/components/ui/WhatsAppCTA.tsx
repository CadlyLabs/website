import React from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';

export const WhatsAppCTA: React.FC = () => {
  const whatsappUrl = 'https://wa.me/34XXXXXXXXX'; // Replace with actual WhatsApp number

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-colors duration-200"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsappLogo size={24} weight="fill" className="text-white" />
    </a>
  );
};
