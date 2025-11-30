import React, { useEffect, forwardRef } from "react";
import { initializeAditorCheckbox } from "./aditor.js";
import "./aditor.css";

const Aditor_Checkbox = forwardRef(({ className, defaultValue = "" }, ref) => {
  useEffect(() => {
    if (ref && ref.current) {
      initializeAditorCheckbox(ref.current, defaultValue); // Initializec with HTML structure
    }
  }, [ref, defaultValue]);

  return <div ref={ref} className={className} />;
});

export default Aditor_Checkbox;
