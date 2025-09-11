'use client'
import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Cursor_elem from '../Components/Cursor_Elem';

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const CursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    const mouseMoveHandler = (e: MouseEvent) => {
      const X = e.clientX;
      const Y = e.clientY;

      if (CursorDot instanceof HTMLElement) {
        CursorDot.style.left = `${X}px`;
        CursorDot.style.top = `${Y}px`;
      }

      if (cursorOutline instanceof HTMLElement) {
        cursorOutline.animate({
          left: `${X}px`,
          top: `${Y}px`,
        }, { duration: 500, fill: "forwards" });
      }
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    
    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <div>
      <Cursor_elem />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;