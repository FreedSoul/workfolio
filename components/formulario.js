import styles from '../styles/Formulario.module.css'
// import Script from 'next/script'
// import { useState } from 'react'
import { RiMailSendLine } from 'react-icons/ri'
// import Image from 'next/image'

const Formulario = () => {
  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')
  // const [message,setMessage] = useState('')

  return (
    <>
      <div className={styles.wrapper}>
        <form
          className={styles.form}
          name="submit-to-google-sheet"
          action={'scriptURL4'}
          method="POST"
        >
          <div className={styles.formtitle}>
            <div className={styles.icontitle}>
              <RiMailSendLine />
              {/* <Image
                src={'/mail.png'}
                alt="mail-icon"
                width={100}
                height={100}
              /> */}
            </div>
          </div>
          <div className={styles.subtitle}>Correo electronico</div>
          <input
            id="correo"
            type="text"
            className={styles['email'] + ' ' + styles['formEntry']}
            placeholder="ejemplo@tucorreo.com"
            name="email"
          />
          <div className={styles.subtitle}>Confirmar Correo</div>
          <input
            id="correo"
            type="text"
            className={styles['email'] + ' ' + styles['formEntry']}
            placeholder="Confirma Correo"
            name="email"
          />
          <div className={styles.subtitle}>De donde nos escribes?</div>
          <input
            id="ciudad"
            type="text"
            className={styles['email'] + ' ' + styles['formEntry']}
            placeholder="Antioquia - Colombia"
            name="ciudad"
          />
          <div className={styles.subtitle}>Nombre</div>
          <input
            id="nombre"
            type="text"
            className={styles['name'] + ' ' + styles['formEntry']}
            placeholder="Nombre"
            name="name"
          />
          <div className={styles.subtitle}>Telefono</div>
          <input
            id="telefono"
            type="text"
            className={styles['name'] + ' ' + styles['formEntry']}
            placeholder="2761212 - 313 564 8712"
            name="telefono"
          />
          <div className={styles.subtitle}>Mensaje</div>
          <textarea
            id="mesagge"
            className={styles['message']}
            placeholder="Escribenos tu Mensaje Aqui"
            name="message"
          ></textarea>
          <br />
          {/* <input id="mensaje" type="checkbox" className={styles.termsConditions} value="Term"/> */}
          {/* <label  htmlFor="terms"> I Accept the</label> */}
          <button
            className={styles['submit'] + ' ' + styles['formEntry']}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Formulario
