import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Layers({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/wJXicsuWGdznXAde/scene.splinecode')

  return (
    <>
      <color attach="background" args={['#fff']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
        <group name="Group" position={[0, 0, 0]} rotation={[0.6, 0.8, 0]} scale={3}>
            <mesh
              name="Cube 11"
              geometry={nodes['Cube 11'].geometry}
              material={materials['Cube 11 Material']}
              castShadow
              receiveShadow
              position={[0, -44.21, -1.03]}
            />
            <mesh
              name="Cube 10"
              geometry={nodes['Cube 10'].geometry}
              material={materials['Cube 10 Material']}
              receiveShadow
            />
            <mesh
              name="Cube 9"
              geometry={nodes['Cube 9'].geometry}
              material={materials['Cube 9 Material']}
              castShadow
              receiveShadow
              position={[0, 44.21, 1.03]}
            />
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.74}
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-4238.4615}
            shadow-camera-right={4238.4615}
            shadow-camera-top={4238.4615}
            shadow-camera-bottom={-4238.4615}
            color="#f1effe"
            position={[85.46, 288.96, -92.45]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}





// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import SplineLoader from '@splinetool/loader';

// const Layers = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // Get dimensions
//     const { clientWidth: width, clientHeight: height } = canvasRef.current.parentElement as HTMLElement;

//     // Camera
//     const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, -50000, 10000);
//     // camera.position.set(300, 300, 300);
//     // camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));
//     camera.position.x = 5;  
//     camera.position.y = 5;
//     camera.position.z = 5;
//     camera.lookAt(0, 0, 0); // Look at the center of the scene

//     // Scene
//     const scene = new THREE.Scene();

//     // Spline Loader
//     const loader = new SplineLoader();
//     loader.load(
//       'https://prod.spline.design/wJXicsuWGdznXAde/scene.splinecode',
//       (splineScene) => {
//         scene.add(splineScene);
//       }
//     );

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true  });
//     renderer.setSize(width, height);
//     renderer.setAnimationLoop(animate);

//     // Scene settings
//     renderer.shadowMap.enabled = true;
//     renderer.shadowMap.type = THREE.PCFShadowMap;
//     scene.background = new THREE.Color('#ccc');
//     // scene.background = null;
//     renderer.setClearAlpha(0);
 
//     // Orbit Controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.125;

//     function onWindowResize() {
//       const { clientWidth: newWidth, clientHeight: newHeight } = canvasRef.current?.parentElement as HTMLElement;
    
//       camera.left = newWidth / -2;
//       camera.right = newWidth / 2;
//       camera.top = newHeight / 2;
//       camera.bottom = newHeight / -2;
//       camera.updateProjectionMatrix();
//       renderer.setSize(newWidth, newHeight);
//     }
  
//     window.addEventListener('resize', onWindowResize);

//     function animate(time: number) {
//       controls.update();
//       renderer.render(scene, camera);
//     }

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//       // Perform additional cleanup if needed
//     };

//   }, []);

//   return (
//     <div className='threecanvas'>
//       <canvas ref={canvasRef} id="layers" />
//     </div>
//   );
// };

// export default Layers;



