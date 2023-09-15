import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const WebMod: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('webMod') as HTMLCanvasElement | null;

    if (canvas) {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/UoFWs3UVCemgpYFu/scene.splinecode');
    }
  }, []);

  return <div className='CanvasWrap'><canvas id="webMod" /></div>;

};

export default WebMod;

// import { useEffect, useRef } from 'react';

// const WebMod = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (containerRef.current !== null) {
//       const splineViewer = document.createElement('spline-viewer');
//       splineViewer.setAttribute('loading-anim', 'true');
//       splineViewer.setAttribute('url', 'https://prod.spline.design/UoFWs3UVCemgpYFu/scene.splinecode');
    
//       containerRef.current.appendChild(splineViewer);

//       return () => {
//         if (containerRef.current) {
//           containerRef.current.removeChild(splineViewer);
//         }
//       };
//     }
//   }, []);

//   return <div id="webMod" ref={containerRef}></div>; 
// };

// export default WebMod;

