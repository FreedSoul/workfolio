import Navbar from './navbar'
import styles from '../styles/Layout.module.css'
import React from 'react'

interface LayoutsProps {
  children: React.ReactNode; 
}

 const Layout:React.FC<LayoutsProps> = ({ children }) => {
  return (
    <>
      <main className={styles.main}>
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

export default Layout 
