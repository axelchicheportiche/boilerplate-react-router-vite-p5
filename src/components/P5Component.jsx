import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import './P5Component.css';

const P5Component = () => {
    const sketchRef = useRef();
  
    useEffect(() => {
      const sketch = new p5(p => {
        p.setup = () => {
          p.createCanvas(400, 400);
        };
  
        p.draw = () => {
          p.background(200);
          p.ellipse(p.width / 2, p.height / 2, 100, 100);
        };
      }, sketchRef.current);
  
      return () => {
        sketch.remove(); // Cleanup P5 instance on component unmount
      };
    }, []);
  
    return <div ref={sketchRef}></div>;
  };
  
  export default P5Component;