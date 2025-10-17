// src/components/WhatsAppFloatingButton.jsx
import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { useWhatsApp } from "../components/WhatsAppContext.jsx";

const WhatsAppFloatingButton = () => {
  const { showMessage, hideMessage } = useWhatsApp();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (showMessage) {
      // Start fade-out a bit before removing
      const fadeTimer = setTimeout(() => setFadeOut(true), 4000);
      const hideTimer = setTimeout(() => {
        hideMessage();
        setFadeOut(false);
      }, 5000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [showMessage, hideMessage]);

  return (
    <div className="fixed bottom-12 right-6 z-50">
      <div className="relative">
        {/* Floating Message (with fade in/out) */}
        {showMessage && (
          <div
            className={`absolute -top-12 right-0 bg-gradient-to-r from-green-200 via-green-100 to-green-200 text-green-900 text-xs sm:text-sm lg:text-base px-4 py-2 rounded-xl shadow-lg w-max max-w-[80vw] text-center font-semibold 
              ${fadeOut ? "animate-fade-out" : "animate-fade-in"}`}
          >
            💬 Contact us on WhatsApp
            <span className="absolute -bottom-1 right-4 w-3 h-3 bg-green-200 rotate-45 shadow-md"></span>
          </div>
        )}

        {/* WhatsApp Icon (always visible) */}
        <BsWhatsapp
          className="cursor-pointer text-5xl bg-green-500 rounded-full p-2 text-white hover:text-green-500 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
          onClick={() =>
            window.open(
              "https://wa.me/message/TIQND33M5EZTH1",
              "_blank",
              "noopener,noreferrer"
            )
          }
          title="Message us on WhatsApp"
        />
      </div>
    </div>
  );
};

export default WhatsAppFloatingButton;
