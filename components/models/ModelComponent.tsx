import React, { useRef, useEffect } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, OrthographicCamera as OrthographicCameraDrei } from '@react-three/drei';
import { OrthographicCamera, PCFShadowMap } from 'three'; // Import the type from three

extend({ OrbitControls });

type Props = {
  modelPath: string;
};

export const ModelCanvas: React.FC<Props> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

const SceneSetup: React.FC = () => {
  const cameraRef = useRef<OrthographicCamera>(null);
  const { gl } = useThree();

  useEffect(() => {
    const handleResize = () => {

      if (cameraRef.current) {
        const camera = cameraRef.current;
        camera.position.x = 5; // or whatever value you wish to test with
        camera.updateProjectionMatrix();
    }

      if (cameraRef.current) {
        const camera = cameraRef.current;
        camera.left = window.innerWidth / -2;
        camera.right = window.innerWidth / 2;
        camera.top = window.innerHeight / 2;
        camera.bottom = window.innerHeight / -2;
        camera.updateProjectionMatrix();
        gl.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [gl]);

  return (
    <>
      <OrthographicCameraDrei ref={cameraRef} 
      args={[window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -50000, 10000]} 
      position={[0, 0, 0]} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} castShadow intensity={1.5} />

      <ModelCanvas modelPath="/model/3folders.glb" />

      {/* <OrbitControls args={[cameraRef.current, gl.domElement]} enableDamping dampingFactor={0.125} /> */}
    </>
  );
};

const ModelComponent: React.FC = () => {
  return (
    <div className="canvasContainer">
      <Canvas
        camera={{ position: [0, 0, 0], rotation: [0, 0, 0] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = PCFShadowMap;
          gl.setClearColor('#2d2e32', 0);
        }}
      >
        <SceneSetup />
      </Canvas>
    </div>
  );
};

export default ModelComponent;



// import React, { useEffect, useRef } from 'react';
// import { Canvas, extend, useThree } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// extend({ OrbitControls }); // Extending the OrbitControls for react-three-fiber

// type Props = {
//   modelPath: string;
// };

// export const ModelCanvas: React.FC<Props> = ({ modelPath }) => {
//   const { scene } = useGLTF(modelPath);
//   return <primitive object={scene} />;
// };

// const ModelComponent: React.FC = () => {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     camera.left = window.innerWidth / -2;
//     camera.right = window.innerWidth / 2;
//     camera.top = window.innerHeight / 2;
//     camera.bottom = window.innerHeight / -2;
//     camera.near = -50000;
//     camera.far = 10000;
//     camera.updateProjectionMatrix();
    
//     window.addEventListener('resize', () => {
//       camera.left = window.innerWidth / -2;
//       camera.right = window.innerWidth / 2;
//       camera.top = window.innerHeight / 2;
//       camera.bottom = window.innerHeight / -2;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     });
//   }, [camera, gl]);

//   return (
//     <div className="canvasContainer">
//       <Canvas
//         camera={{ position: [0, 0, 0], rotation: [0, 0, 0] }}
//         onCreated={({ gl }) => {
//           gl.shadowMap.enabled = true;
//           gl.shadowMap.type = THREE.PCFShadowMap;
//           gl.setClearColor('#2d2e32', 0); // background color and clear alpha
//         }}
//       >
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 2, 2]} castShadow intensity={1.5} />

//         <ModelCanvas modelPath="/model/folders.gltf" />
        
//         {/* Uncomment for OrbitControls */}
//         {/* <orbitControls args={[camera, gl.domElement]} enableDamping dampingFactor={0.125} /> */}
//       </Canvas>
//     </div>
//   );
// };

// export default ModelComponent;




// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// type Props = {
//   modelPath: string;
// };

// export const ModelCanvas: React.FC<Props> = ({ modelPath }) => {
//   const { scene } = useGLTF(modelPath);

//   return <primitive object={scene} />;
// };

// const ModelComponent: React.FC = () => {
//   return (
//     <div className="canvasContainer">
//       <Canvas camera={{ position: [8, 3, 2], rotation: [(-Math.PI / 45), 0, 0] }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 2, 2]} castShadow intensity={1.5} />
        
//         <ModelCanvas modelPath="/model/folders.gltf" />
        
//         {/* <OrbitControls /> */}
//       </Canvas>
//     </div>
//   );
// };

// export default ModelComponent;












// pixelRatio={Math.min(window.devicePixelRatio, 2)}



// import { Canvas, useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three-stdlib/loaders/GLTFLoader';
// import { Mesh, OrthographicCamera, Color, PCFShadowMap } from 'three';
// import { OrbitControls } from '@react-three/drei';

// interface ModelProps {
//   modelPath: string;
// }

// const ModelComponent: React.FC<ModelProps> = ({ modelPath }) => {
//   const gltf = useLoader(GLTFLoader, modelPath);

//   // Ensure you have the complete scene
//   return <primitive object={gltf.scene} />;
// };

// export const ModelCanvas: React.FC<ModelProps> = ({ modelPath }) => {
//   return (
//     <Canvas
//       camera={{
//         type: 'orthographic',
//         near: -50000,
//         far: 10000,
//         position: [0, 0, 0],
//       }}
//       onCreated={({ gl }) => {
//         gl.shadowMap.enabled = true;
//         gl.shadowMap.type = PCFShadowMap;
//         gl.setClearColor(new Color('#2d2e32'), 0);
//       }}
//     >
//       <OrbitControls enableDamping dampingFactor={0.125} />
//       <ModelComponent modelPath={modelPath} />
//     </Canvas>
//   );
// };



// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { GLTFLoader } from 'three-stdlib/loaders/GLTFLoader';
// import { useLoader } from '@react-three/fiber';
// import { Mesh } from 'three';

// interface ModelProps {
//   modelPath: string;
// }

// const ModelComponent: React.FC<ModelProps> = ({ modelPath }) => {
//   const gltf = useLoader(GLTFLoader, modelPath);

//   const mesh = gltf.nodes.mesh as Mesh;

//   return (
//     <mesh geometry={mesh.geometry} scale={0.5}>
//       <meshStandardMaterial attach="material" color="white" />
//     </mesh>
//   );
// };

// export const ModelCanvas: React.FC<ModelProps> = ({ modelPath }) => {
//   return (
//     <Canvas>
//       <ambientLight />
//       <ModelComponent modelPath={modelPath} />
//     </Canvas>
//   );
// };
