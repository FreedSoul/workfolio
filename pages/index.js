
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
        <h1 className={styles.title}>Mateo Garcia Arias</h1>

        <div className={styles['circle']}></div>

        <div className={styles['container-matt']}>
          <Image
            src={'/mateo-sentado-sinfondo'}
            width={'300px'}
            height={'300px'}
            layout={'fill'}
            alt='hola mundo'
          ></Image>
          <div className={styles['circle-matt']}></div>
        </div>

        <div className={styles['circle-dev']}></div>
        {/* <div className={styles.card}>
          <div class="tk-blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
              <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
            </svg>
          </div>
        </div>

        

        <div className={styles.card}>
          <div className="tk-blob" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
              <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-200.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 211.3 135.4z"></path>
            </svg>
          </div>
        </div> */}

        <div className={styles['container-description']}>
          <p className={styles.description}>
            <h2>web developer</h2>
          </p>
        </div>

        {/* <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>blog</h3>
          </a>

          <a href="/" className={styles.card}>
            <h3>mi trabajo</h3>
          </a>

          <a href="/" className={styles.card}>
            <h3>sobre mi</h3>
          </a>

          <a href="/" className={styles.card}>
            <h3>trabaja conmigo</h3>

            <p></p>
          </a>
        </div> */}
      </main>
    </div>
  );
}
