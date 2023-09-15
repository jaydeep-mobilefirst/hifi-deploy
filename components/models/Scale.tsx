import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

const Scale = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Get dimensions
    const { clientWidth: width, clientHeight: height } = canvasRef.current.parentElement as HTMLElement;

    // Camera
    const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, -50000, 10000);
    // camera.position.set(300, 300, 300);
    // camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));
    camera.position.x = 0;  
    camera.position.y = 0;
    camera.position.z = 0;
    camera.lookAt(0, 0, 0);

    // Scene
    const scene = new THREE.Scene();

    // Spline Loader
    const loader = new SplineLoader();
    loader.load(
      'https://prod.spline.design/lOFlGCNXRMu6aKzM/scene.splinecode',
      (splineScene) => {
        scene.add(splineScene);
      }
    );

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true  });
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animate);

    // Scene settings
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    scene.background = new THREE.Color('#fff');
    renderer.setClearAlpha(0);
 
    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;

    function onWindowResize() {
      const { clientWidth: newWidth, clientHeight: newHeight } = canvasRef.current?.parentElement as HTMLElement;
    
      camera.left = newWidth / -2;
      camera.right = newWidth / 2;
      camera.top = newHeight / 2;
      camera.bottom = newHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    }
  
    window.addEventListener('resize', onWindowResize);

    function animate(time: number) {
      controls.update();
      renderer.render(scene, camera);
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      // Perform additional cleanup if needed
    };

  }, []);

  return (
    <div className='threecanvas'>
      <canvas ref={canvasRef} id="scale" />
    </div>
  );
};

export default Scale;
