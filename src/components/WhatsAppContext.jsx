// src/context/WhatsAppContext.jsx
import React, { createContext, useState, useContext } from "react";

const WhatsAppContext = createContext();

export const WhatsAppProvider = ({ children }) => {
  const [showMessage, setShowMessage] = useState(true);

  const hideMessage = () => setShowMessage(false);
  const showAgain = () => setShowMessage(true);

  return (
    <WhatsAppContext.Provider value={{ showMessage, hideMessage, showAgain }}>
      {children}
    </WhatsAppContext.Provider>
  );
};

export const useWhatsApp = () => useContext(WhatsAppContext);
