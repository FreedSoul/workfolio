// import styles from '../styles/Home.module.css'
import Formulario from '../components/formulario'
import styles from '../styles/Contact.module.css'
import { AiOutlineLinkedin } from 'react-icons/ai'
import {VscGithub} from 'react-icons/vsc'
import {FaFigma} from 'react-icons/fa'
import {IoLogoGoogleplus} from 'react-icons/io'
// import Card from '../components/card'

export default function Trabajo() {
  return (
    <>
      <div className={styles['page-container']}>
        <h2 className={styles['page-title']}>Contact Me</h2>
      </div>

      <div className={styles.area}>
        <div className={styles.subarea}>
          <div className={styles.networks}>
            <div className={styles['social-icons']}>
              <AiOutlineLinkedin />
            </div>
            <div className={styles['social-icons']}>
              <VscGithub />
            </div>
            <div className={styles['social-icons']}>
              <FaFigma />
            </div>
            <div className={styles['social-icons']}>
              <IoLogoGoogleplus />
            </div>
          </div>
          <Formulario />
          {/* <form className={styles.form}></form> */}
        </div>
      </div>
    </>
  )
}
