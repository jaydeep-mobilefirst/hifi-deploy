import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const LayersMod: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('layersMod') as HTMLCanvasElement | null;

    if (canvas) {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/i8nrj9lawx0nY945/scene.splinecode');

    }
  }, []);

  return <canvas id="layersMod" />;
};

export default LayersMod;


// import { useEffect, useRef } from 'react';

// const LayersMod = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (containerRef.current !== null) {
//       const splineViewer = document.createElement('spline-viewer');
//       splineViewer.setAttribute('loading-anim', 'true');
//       splineViewer.setAttribute('url', 'https://prod.spline.design/i8nrj9lawx0nY945/scene.splinecode');
    
//       containerRef.current.appendChild(splineViewer);

//       return () => {
//         if (containerRef.current) {
//           containerRef.current.removeChild(splineViewer);
//         }
//       };
//     }
//   }, []);

//   return <div id="layersMod" ref={containerRef}></div>; 
// };

// export default LayersMod;