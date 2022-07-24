// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Navbar from '../components/navbar'

export default function Home() {
  return (
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
  )
}
