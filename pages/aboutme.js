// import styles from '../styles/Home.module.css'
import Image from 'next/image'
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
          since childhood I&lsquo;ve been in contact with technology, very early
          I learned to operate a computer, in my family, guess who is called if they have a
          problem with devices or technology. internet saved my life and the passion for technology always been there, So I decided to learn how the web
          works and here I am, discovering the vast world of the web that every
          day has something new to learn, I chose to learn front-end first but
          I&lsquo;ve also been learning the basics about databases and backend,
          the technologies that i use are:
          {/* espanol
          desde que era un nino he estado en contacto con la tecnologia, muy temprano aprendi a manejar
          un computador, cuando tenia 12 o por ahi, ya sabia como arreglarlos y siempre era la persona de la familia que
          llamaban, este gusto me llevo a indagar mas y descubri los sistemas linux, casi nunca los uso para trabajar pero 
          he aprendido a utilizarlo por hobbie, todo esto me llevo a tomar la carrera de sistemas informaticos por razones de 
          salud tuve que dejarla, aun que tuve que alejarme de la academia, mi pasion por la tecnologia siempre a estado intacta
          entonces decidi aprender como funcionaba la web y aqui estoy descubriendo el basto mundo de la web que todos los dias
          tiene algo nuevo para aprender, escogi primero aprender front-end pero tambien he estado aprendiendo lo basico sobre bases
        de datos y back-end */}
        {/*ingles
        since I was a child have been in contact with technology, very early I learned to operate a computer, in my family, guess who is called if they have a problem with devices or technology. internet saved my life and the passion for technology always been there, 
So I decided to learn how the webn works and here I am, discovering the vast world of the web that every day has something new to learn, I chose to learn front-end first but I&lsquo;ve also been learning the basics about databases and backend, the technologies that i use, are:*/}
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
          <div className={styles.technologies}>
            <div>
              <h2>Design</h2>
              <a
                href="https://www.blender.org/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <Image
                  src="https://download.blender.org/branding/community/blender_community_badge_white.svg"
                  alt="blender"
                  width="40"
                  height="40"
                />{' '}
              </a>{' '}
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                {' '}
                <Image
                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                  alt="figma"
                  width="40"
                  height="40"
                />{' '}
              </a>{' '}
            </div>
            <div>
              <h2>Front-end</h2>
              <p align="left">
                {' '}
                <a
                  href="https://www.w3schools.com/css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                  />{' '}
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  {' '}
                  <Image
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
                <a
                  href="https://www.w3.org/html/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
                <a href="https://jestjs.io" target="_blank" rel="noreferrer">
                  {' '}
                  <Image
                    src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                    alt="jest"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
                <a
                  href="https://testing-library.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <Image
                    src="https://testing-library.com/img/octopus-64x64.png"
                    alt="testing library"
                    width="40"
                    height="40"
                  />{' '}
                </a>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  {' '}
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                    alt="nextjs"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
                <a
                  href="https://www.photoshop.com/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                </a>{' '}
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  {' '}
                  <Image
                    // src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                </a>{' '}
                <a
                  href="https://sass-lang.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                    alt="sass"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <Image
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    alt="tailwind"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
                <a
                  href="https://webpack.js.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                    alt="webpack"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
              </p>
            </div>
            <h2>Back-end</h2>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              {' '}
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="40"
                height="40"
              />{' '}
            </a>{' '}
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {' '}
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />{' '}
            </a>{' '}
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}
