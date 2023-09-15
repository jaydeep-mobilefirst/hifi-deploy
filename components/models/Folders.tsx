import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

interface FoldersProps {
  url: string;
}

const Folders: React.FC<FoldersProps> = ({ url }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    // camera
    const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, -50000, 10000);
    camera.position.set(40, 10, 20);
    camera.quaternion.setFromEuler(new THREE.Euler(30, 50, 30));

    // scene
    const scene = new THREE.Scene();

    // spline scene
    const loader = new SplineLoader();
    loader.load(url, (splineScene) => {
      scene.add(splineScene);
    });

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animate);
    canvasRef.current?.appendChild(renderer.domElement);

    // scene settings
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    scene.background = new THREE.Color('#2d2e32');
    renderer.setClearAlpha(0);

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;

    function animate() {
      controls.update();
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', onWindowResize);
    function onWindowResize() {
      camera.left = width / -2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = height / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
  }, [width, height]);

  return <canvas ref={canvasRef} />;
};

export default Folders;







