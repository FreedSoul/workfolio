import Navbar from './navbar'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles['top-circle-wrapper']}>
          <div className={styles['top-circle']}></div>
        </div>  
        <div className={styles['bot-circle']}></div>
        <Navbar />
        {children}
      </main>
    </>
  )
}
