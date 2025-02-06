// FullScreenContext.js
import React, { createContext, useContext, useState } from "react";

const FullScreenContext = createContext();

export const FullScreenProvider = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  return (
    <FullScreenContext.Provider value={{ isFullScreen, toggleFullScreen }}>
      {children}
    </FullScreenContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFullScreen = () => useContext(FullScreenContext);
