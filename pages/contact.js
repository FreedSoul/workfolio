// import styles from '../styles/Home.module.css'
import Formulario from '../components/formulario'
import styles from '../styles/Contact.module.css'
import { AiOutlineLinkedin } from 'react-icons/ai'
// import { VscGithub } from 'react-icons/vsc'
import { FaFigma } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
// import { IoLogoGoogleplus } from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'
// import Card from '../components/card'

export default function Contacto() {
  return (
    <>
      <div className={styles['page-container']}>
        <h2 className={styles['page-title']}>Contact Me</h2>
      </div>

      <div className={styles.area}>
        <div className={styles.subarea}>
          <div className={styles.networks}>
            <div className={styles['social-icons']}>
              <a
                href={'https://www.linkedin.com/in/mateo-arias-56b8b9137/'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <AiOutlineLinkedin />
              </a>
            </div>
            <div className={styles['social-icons']}>
              <a
                href={'https://github.com/FreedSoul'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                {/* <VscGithub /> */}
                <FaGithubAlt />
              </a>
            </div>
            <div className={styles['social-icons']}>
              <a
                href={'https://www.figma.com/@mattgar'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <FaFigma />
              </a>
            </div>
            <div className={styles['social-icons']}>
                <MdAlternateEmail />
              <div className={styles['tooltip-email']}>
                <span className={styles['tooltip-text']}>mattwork07@gmail.com</span>
              </div>
            </div>
          </div>
          <Formulario />
          {/* <form className={styles.form}></form> */}
        </div>
      </div>
    </>
  )
}
