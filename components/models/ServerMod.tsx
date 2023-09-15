import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const ServerMod: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('serverMod') as HTMLCanvasElement | null;

    if (canvas) {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/JqqopMBRs1wwoCOw/scene.splinecode');
    }
  }, []);

  return <div><canvas id="serverMod" /></div>;

};

export default ServerMod;

// import { useEffect, useRef } from 'react';

// const ServerMod = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (containerRef.current !== null) {
//       const splineViewer = document.createElement('spline-viewer');
//       splineViewer.setAttribute('loading-anim', 'true');
//       splineViewer.setAttribute('url', 'https://prod.spline.design/JqqopMBRs1wwoCOw/scene.splinecode');
    
//       containerRef.current.appendChild(splineViewer);

//       return () => {
//         if (containerRef.current) {
//           containerRef.current.removeChild(splineViewer);
//         }
//       };
//     }
//   }, []);

//   return <div id="serverMod" ref={containerRef}></div>; 
// };

// export default ServerMod;

