// import styles from '../styles/Home.module.css'
import Formulario from '../components/formulario'
import styles from '../styles/Contact.module.css'
// import Card from '../components/card'

export default function Trabajo() {
  return (
    <>
      <div className={styles['page-container']}>
        <h2 className={styles['page-title']}>Contact Me</h2>
      </div>

      <div className={styles.area}>
        <div className={styles.subarea}>
          <Formulario></Formulario>
          {/* <form className={styles.form}></form> */}
        </div>
      </div>
    </>
  )
}
