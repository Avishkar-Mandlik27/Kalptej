import React, { createContext, useState } from 'react';

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [hasDismissedPopup, setHasDismissedPopup] = useState(false);

  return (
    <PopupContext.Provider value={{ hasDismissedPopup, setHasDismissedPopup }}>
      {children}
    </PopupContext.Provider>
  );
};