import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Motto = () => {
  useEffect(() => {
    // Select all motto-banner spans
    const lines = document.querySelectorAll('.motto-banner span');

    lines.forEach((line, index) => {
      // Create a GSAP timeline for each line
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: line,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true, // Smooth animation
        },
      });

      // Animation for floating left or right based on the index
      tl.fromTo(
        line,
        { x: index % 2 === 0 ? '-100%' : '100%', color: 'red' },
        { x: '0%', color: 'white', ease: 'none' }
      );
    });
  }, []);

  return (
    <section className="motto-section">
      <div className="motto-container" id="direction">
        <h1 className="motto-banner">
          <span>Architecture that tells your story</span>
        </h1>
        <h1 className="motto-banner">
          Life is art
        </h1>
        <h1 className="motto-banner">
          <span>Capture it beautifully</span>
        </h1>
        <h1 className="motto-banner">
          <span>Create with passion</span>
        </h1>
        <h1 className="motto-banner">
          <span>Seeing the world through a different lens</span>
        </h1>
      </div>
    </section>
  );
};

export default Motto;
