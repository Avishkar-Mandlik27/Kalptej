import React, { useContext, useEffect, useState } from 'react';
import { PopupContext } from './PopupProvider';
import landscapeImg from '../assets/offer1.jpg';
import mobileImg from '../assets/offer2.jpg';
import WhatsAppFloatingButton from './WhatsAppFloatingButton ';


const WelcomePopup = () => {
  const { hasDismissedPopup, setHasDismissedPopup } = useContext(PopupContext);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!hasDismissedPopup) {
      setShowPopup(true);
    }
  }, [hasDismissedPopup]);

  const handleClose = () => {
    setShowPopup(false);
    setHasDismissedPopup(true);
  };

  const handleAvailOffer = () => {
    // You can redirect or trigger any action here
    window.open("https://wa.me/message/TIQND33M5EZTH1", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative rounded-xl shadow-xl max-w-[90%] sm:max-w-3xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-4 text-white hover:text-red-400 text-xl font-bold z-20"
            >
              &times;
            </button>

            {/* Desktop Image */}
            <div className="hidden sm:block relative w-full h-[50vh]">
              <img
                src={landscapeImg}
                alt="Diwali Offer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
                <button
                  onClick={handleAvailOffer}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
                >
                  Avail Offer
                </button>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="block sm:hidden relative w-full">
              <img
                src={mobileImg}
                alt="Diwali Offer Mobile"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
                <button
                  onClick={handleAvailOffer}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
                >
                  Avail Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show floating WhatsApp button only after popup is dismissed */}
      {!showPopup && <WhatsAppFloatingButton position="fixed" />}
    </>
  );
};

export default WelcomePopup;