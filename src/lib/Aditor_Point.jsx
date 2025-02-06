import React, { useEffect, forwardRef } from "react";
import { initializeAditorPoint } from "./aditor.js";
import "./aditor.css";

const Aditor_Point = forwardRef(({ className, defaultValue = "" }, ref) => {
  useEffect(() => {
    if (ref && ref.current) {
      initializeAditorPoint(ref.current, defaultValue); // Initialize with HTML structure
    }
  }, [ref, defaultValue]);

  return <div ref={ref} className={className} />;
});

export default Aditor_Point;
