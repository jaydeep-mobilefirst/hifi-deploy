import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const SecMod: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('secMod') as HTMLCanvasElement | null;

    if (canvas) {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/kjrgwNFS7ZUayT52/scene.splinecode');
    }
  }, []);

  return <canvas id="secMod" />;
};

export default SecMod;

// import { useEffect, useRef } from 'react';

// const SecMod = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (containerRef.current !== null) {
//       const splineViewer = document.createElement('spline-viewer');
//       splineViewer.setAttribute('loading-anim', 'true');
//       splineViewer.setAttribute('url', 'https://prod.spline.design/Rah0HwcovXwP4w62/scene.splinecode');
    
//       containerRef.current.appendChild(splineViewer);

//       return () => {
//         if (containerRef.current) {
//           containerRef.current.removeChild(splineViewer);
//         }
//       };
//     }
//   }, []);

//   return <div id="secMod" ref={containerRef}></div>; 
// };

// export default SecMod;