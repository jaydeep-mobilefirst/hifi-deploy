import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const CubesMod: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('cubesMod') as HTMLCanvasElement | null;

    if (canvas) {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/DfBxumUVFf3ksOjC/scene.splinecode');
    }
  }, []);

  return <div className='CanvasWrap'><canvas id="cubesMod" /></div>;
};

export default CubesMod;

// import { useEffect, useRef } from 'react';

// const CubesMod = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (containerRef.current !== null) {
//       const splineViewer = document.createElement('spline-viewer');
//       splineViewer.setAttribute('loading-anim', 'true');
//       splineViewer.setAttribute('url', 'https://prod.spline.design/DfBxumUVFf3ksOjC/scene.splinecode');
    
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

// export default CubesMod;