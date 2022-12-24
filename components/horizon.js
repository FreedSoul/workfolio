import * as THREE from 'three'
import React,{ useEffect, useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from 'drei'

function Horizon() {
  const refHorizon = useRef()
  const actions = useRef()
  // const [loading, setLoading] = useState(null)
  const [model, setModel] = useState(null)
  const [animation, setAnimation] = useState(null)
  const [mixer] = useState(() => new THREE.AnimationMixer(null))

  useEffect(() => {
    const loader = new GLTFLoader();
    // loader.load("scene.gltf", async (gltf) => {
    loader.load("sceneHorizon.gltf", async (gltf) => {
      const nodes = await gltf.parser.getDependencies("node");
      const animations = await gltf.parser.getDependencies("animation");
      console.log(nodes)
      setModel(nodes[3]);
      setAnimation(animations);
    }, undefined,(error)=>{console.log(error)});
  }, [])

  useEffect(() => {
    if (animation && typeof refHorizon.current != 'undefined') {
      actions.current = {
        idle: mixer.clipAction(animation[0], refHorizon.current),
      }
      actions.current.idle.play()
      return () => animation.forEach((clip) => mixer.uncacheClip(clip))
    }
  }, [animation])

  /* Animation update */
  useFrame((_, delta) => mixer.update(delta))
  /* Rotation */
  useFrame(() => {
    if (typeof refHorizon.current != 'undefined')
      return (refHorizon.current.rotation.x += 0.0)
  })
  return (
    <>
      {model ? (
          <group ref={refHorizon} position={[0, -150, 0]} dispose={null}>
            <primitive ref={refHorizon} name="Object_0" object={model} />
          </group>
          // <></>
      ) : (
        <Html>
          Loading...
        </Html>
      )}
    </>
  )
}

export default Horizon
