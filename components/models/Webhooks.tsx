import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Webhooks({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/mcr5cG6JhcVmRVg5/scene.splinecode')

  return (
    <>
      <color attach="background" args={['#74757a']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials['Rectangle Material']}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={1}
          />
          <group name="Windows" position={[1.22, 90.05, -129.6]} rotation={[0.5, 0.6, 0]} scale={3}>
            <mesh
              name="Cube 3"
              geometry={nodes['Cube 3'].geometry}
              material={materials['Cube 3 Material']}
              castShadow
              receiveShadow
              position={[0, 0, 46.59]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            >
              <group name="Group" position={[-0.22, -3.25, -3.55]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Rectangle1"
                  geometry={nodes.Rectangle1.geometry}
                  material={materials['Rectangle1 Material']}
                  castShadow
                  receiveShadow
                  position={[-1, 5, -1]}
                />
                <mesh
                  name="Rectangle 4"
                  geometry={nodes['Rectangle 4'].geometry}
                  material={materials['Rectangle 4 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -11, 3.4]}
                  scale={[1, 1, 1.42]}
                />
                <mesh
                  name="Rectangle 3"
                  geometry={nodes['Rectangle 3'].geometry}
                  material={materials['Rectangle 3 Material']}
                  position={[0, 4.45, 3.4]}
                  scale={[1, 1, 1.42]}
                />
                <mesh
                  name="Rectangle 2"
                  geometry={nodes['Rectangle 2'].geometry}
                  material={materials['Rectangle 2 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 20, 3.4]}
                  scale={[1, 1, 1.42]}
                />
              </group>
              <group name="Group 2" position={[56.63, -2.88, 48.47]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Ellipse 3"
                  geometry={nodes['Ellipse 3'].geometry}
                  material={materials['Ellipse 3 Material']}
                  castShadow
                  receiveShadow
                  position={[-1.8, 0, 0]}
                  scale={[0.7, 0.7, 1]}
                />
                <mesh
                  name="Ellipse 2"
                  geometry={nodes['Ellipse 2'].geometry}
                  material={materials['Ellipse 2 Material']}
                  castShadow
                  receiveShadow
                  position={[7.47, 0, 0]}
                  scale={[0.7, 0.7, 1]}
                />
                <mesh
                  name="Ellipse"
                  geometry={nodes.Ellipse.geometry}
                  material={materials['Ellipse Material']}
                  castShadow
                  receiveShadow
                  position={[-10.89, 0, 0]}
                  scale={[0.7, 0.7, 1]}
                />
              </group>
            </mesh>
            <mesh
              name="Cube 2"
              geometry={nodes['Cube 2'].geometry}
              material={materials['Cube 2 Material']}
              castShadow
              receiveShadow
              position={[0, 0, 0.05]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials['Cube Material']}
              castShadow
              receiveShadow
              position={[0, 0, -47.62]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <directionalLight
            name="Directional Light"
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[200, 300, 300]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} />
        </scene>
      </group>
    </>
  )
}



