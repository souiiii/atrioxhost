import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import './variables.css'
import SvgBlurDefs from './Components/SvgBlurDefs';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis/types';


export default function App() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 0.3, // Short, responsive scroll
  //     easing: (t) => t, // Linear easing
  //     smooth: true,
  //     smoothTouch: true, // Skip smoothing on mobile
  //   });

  //   const raf = (time) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf); // Keep it running — required for Lenis to scroll
  //   };

  //   requestAnimationFrame(raf); // Start loop on mount

  //   return () => {
  //     lenis.destroy(); // Clean up
  //   };
  // }, []);
  return (
    <>
      <SvgBlurDefs />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}