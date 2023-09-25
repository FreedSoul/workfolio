// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Navbar from '../components/navbar'
import { Canvas } from '@react-three/fiber'
import Model from '../components/sceneHorizon.jsx'
import React from 'react'

const Home:React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles['top-circle-wrapper']}>
        <div className={styles['top-circle']}></div>
      </div> */}
        <div className={styles['container-title']}>
          <h1 className={styles.title}>Mateo Garcia</h1>
        </div>
        <div className={styles['container-description']}>
          <h2>web developer</h2>
        </div>

        {/* <div className={styles['container-matt']}>
          <Image
            src={'/sentado-sinfondo.png'}
            // width={'300px'}
            // height={'300px'}
            layout={'fill'}
            alt="hola mundo"
          />
        </div> */}

        {/* <div className={styles['circle-dev']}></div> */}
      </div>
      <div className={styles['horizon']}>
        <Canvas
        // camera={{ position: [100, 100, 900] }}
        // camera={{ position: [-10.5, 15, 5.5], fov: 45, near: 1, far: 200 }}
        >
          {/* <Lights /> */}
          {/* <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial/>
      </mesh> */}
          {/* <Scene/> */}
          {/* <SceneHorizon/> */}
          <ambientLight args={[0xff0000]} intensity={0.1} />
          <directionalLight position={[0, 0, 5]} intensity={0.5} />
          {/* <OrbitControls/> */}
          <Model />
          {/* <Horizon /> */}
        </Canvas>
      </div>
    </>
  )
}

export default Home
