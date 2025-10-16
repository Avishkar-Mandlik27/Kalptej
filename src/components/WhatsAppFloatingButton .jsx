import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppFloatingButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <BsWhatsapp
        className="cursor-pointer text-5xl bg-green-500 rounded-full p-2 text-white hover:text-green-500 hover:scale-110 transition-all duration-300"
        onClick={() =>
          window.open("https://wa.me/message/TIQND33M5EZTH1", "_blank", "noopener,noreferrer")
        }
        title="Message us on WhatsApp"
      />
    </div>
  );
};

export default WhatsAppFloatingButton;