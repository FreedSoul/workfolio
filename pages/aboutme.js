// import styles from '../styles/Home.module.css'
import styles from '../styles/Aboutme.module.css'
// import { AiOutlineLinkedin } from 'react-icons/ai'
// import { FaFigma, FaGithubAlt } from 'react-icons/fa'
// import { MdAlternateEmail } from 'react-icons/md'
// import Card from '../components/card'

export default function Trabajo() {
  return (
    <>
      <div className={styles['page-container']}>
        <h2 className={styles['page-title']}>About Me</h2>
      </div>

      <div className={styles.area}>
        <div className={styles.subarea}>
          <h1>hi i&lsquo;m matt</h1>
          since I was a child I have been in contact with technology, very early
          I learned to drive a computer, when I was 12 already knew how to fix
          them and Im always the person in the family who They called if have a
          tech problem, this amusement led me to investigate more and I
          discovered Linux systems, I almost never use them to work but I have
          learned to use it as a hobby, all this led me to take the computer
          systems career for reasons of health had to leave it, even though I
          had to move away from the university, my passion for technology has
          always been intact, So I decided to learn how the web worked and here
          I am, discovering the vast world of the web that every day has
          something new to learn, I chose to learn front-end first but
          I&lsquo;ve also been learning the basics about databases and backend
          the technologies practiced: html css javascript react node express
          -react 
          -testing 
          -library 
          -next 
          -javascript 
          -vite
          {/* espanol
          desde que era un nino he estado en contacto con la tecnologia, muy temprano aprendi a manejar
          un computador, cuando tenia 12 o por ahi, ya sabia como arreglarlos y siempre era la persona de la familia que
          llamaban, este gusto me llevo a indagar mas y descubri los sistemas linux, casi nunca los uso para trabajar pero 
          he aprendido a utilizarlo por hobbie, todo esto me llevo a tomar la carrera de sistemas informaticos por razones de 
          salud tuve que dejarla, aun que tuve que alejarme de la academia, mi pasion por la tecnologia siempre a estado intacta
          entonces decidi aprender como funcionaba la web y aqui estoy descubriendo el basto mundo de la web que todos los dias
          tiene algo nuevo para aprender, escogi primero aprender front-end pero tambien he estado aprendiendo lo basico sobre bases
          de datos y back-end */}
          {/* <div className={styles.networks}>
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
                <span className={styles['tooltip-text']}>
                  mattwork07@gmail.com
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
