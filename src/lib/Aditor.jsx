import React, { useEffect, forwardRef } from "react";
import { initializeAditor } from "./aditor.js";
import "./aditor.css";

const Aditor = forwardRef(({ className }, ref) => {
  useEffect(() => {
    if (ref && ref.current) {
      initializeAditor(ref.current);
    }
  }, [ref]);

  return <div ref={ref} className={className} />;
});

export default Aditor;
