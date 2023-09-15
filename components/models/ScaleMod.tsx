import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const ScaleMod: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('scaleMod') as HTMLCanvasElement | null;

    if (canvas) {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/SVRKPdJBDcuLt6vo/scene.splinecode');      
    }
  }, []);

  return <div><canvas id="scaleMod" /></div>;
};

export default ScaleMod;

// import { useEffect, useRef } from 'react';

// const ScaleMod = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (containerRef.current !== null) {
//       const splineViewer = document.createElement('spline-viewer');
//       splineViewer.setAttribute('loading-anim', 'true');
//       splineViewer.setAttribute('url', 'https://prod.spline.design/SVRKPdJBDcuLt6vo/scene.splinecode');
    
//       containerRef.current.appendChild(splineViewer);

//       return () => {
//         if (containerRef.current) {
//           containerRef.current.removeChild(splineViewer);
//         }
//       };
//     }
//   }, []);

//   return <div id="scaleMod" ref={containerRef}></div>; 
// };

// export default ScaleMod;

