/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.1 sceneHorizon.gltf --transform
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'



export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/sceneHorizon-transformed.glb'
  )
  const { actions,names } = useAnimations(animations, group)
  useEffect(() => {
    // You can play, stop, fade actions in here
    console.log(actions, names)
    actions[names[0]].play()
  }, [actions, names])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="workfolioSceneTest2glb" position={[-0.04, 0, 0]}>
          <PerspectiveCamera
            name="Camera001"
            makeDefault={true}
            far={1000}
            near={0.1}
            fov={100.9}
            position={[100.02, 10.09, -109.58]}
            rotation={[3.14, 0, 3.13]}
          />
          {/* <PerspectiveCamera name="Camera001" makeDefault={false} far={1000} near={0.1} fov={22.9} position={[-0.02, 0.09, -109.58]} rotation={[3.14, 0, 3.13]} /> */}
          {/* <group name="Plane" position={[-0.09, -0.5, 0.04]} scale={3}> */}
          <group name="Plane" position={[-0.01, -0.2, 1.04]} scale={3}>
            <mesh
              name="Plane001"
              geometry={nodes.Plane001.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane001_1"
              geometry={nodes.Plane001_1.geometry}
              material={materials['Material.002']}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sceneHorizon-transformed.glb')