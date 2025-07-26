"use client";

import { useEffect, useRef } from "react";

export default function SvgBlurDefs() {
const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Only append if not already in DOM
    if (!document.getElementById("svg-blur-defs")) {
      svg.setAttribute("id", "svg-blur-defs");
      document.body.appendChild(svg);
    }

    return () => {
      if (document.body.contains(svg)) {
        document.body.removeChild(svg);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      style={{ position: "absolute", width: 0, height: 0 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="blur-heavy" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="250" />
        </filter>
      </defs>
    </svg>
  );
}
