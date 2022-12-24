import Navbar from './navbar'
import styles from '../styles/Layout.module.css'
import Horizon from './horizon'
import Lights from './Lights'
import { Canvas } from 'react-three-fiber'

export default function Layout({ children }) {
  return (
    <>
      <main className={styles.main}>
      <div className={styles['horizon']}>
        <Canvas colorManagement camera={{ position: [100, 100, 900] }}>
          <Lights />
          {/* <Model /> */}
          <Horizon/>
        </Canvas>
      </div>
        <div className={styles['top-circle-wrapper']}>
          <div className={styles['top-circle']}></div>
        </div>
        <div className={styles['bot-circle-0']}>
          <div className={styles['pulse']}>
            <div className={styles['pulse2']}>
              {/* <div className={styles['bot-circle-3']}> */}
                {/* <div className={styles['bot-circle-4']}></div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <Navbar />
        {children}
      </main>
    </>
  )
}
