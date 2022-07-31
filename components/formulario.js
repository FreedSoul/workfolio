import styles from '../styles/Formulario.module.css'
import { useForm } from 'react-hook-form'
// import Script from 'next/script'
// import { useState } from 'react'
import { RiMailSendLine } from 'react-icons/ri'
// import Image from 'next/image'

const Formulario = () => {
  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')
  // const [message,setMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm()

  console.log(errors)
  // console.log(getValues("emailconfirm"))
  // console.log(getValues("email"))

  const onSubmit = data => console.log(data)
  return (
    <>
      <div className={styles.wrapper}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          name="submit-to-google-sheet"
          // action={'scriptURL4'}
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
          <div className={styles.subtitle}>Email</div>
          <input
            // id="correo"
            // type="text"
            {...register('email', { required: true })}
            className={
              styles['email'] +
              ' ' +
              styles['formEntry'] +
              ' ' +
              (errors.confirm ? styles.alert : '')
            }
            placeholder="ejemplo@tucorreo.com"
            name="email"
          />
          <div className={styles.subtitle}>Confirm Email</div>
          {errors.confirm && <div role={'alert'} className={styles.alertdiv}><p>you must confirm your email</p></div>}
          <input
            {...register('confirm', {
              validate: (value) => value === getValues('email'),
            })}
            id="correo"
            type="text"
            className={
              styles['email'] +
              ' ' +
              styles['formEntry'] +
              ' ' +
              (errors.confirm ? styles.alert : '')
            }
            placeholder="ejemplo@tucorreo.com"
            // name="confirm"
          />
          <div className={styles.subtitle}>Name</div>
          <input
            {...register('name', {
              required: true,
              minLength: {
                value: 2,
                message: 'debe tener minimo 2 caracteres',
              },
            })}
            id="nombre"
            type="text"
            className={styles['name'] + ' ' + styles['formEntry']}
            placeholder="Nombre"
            name="name"
          />
          <div className={styles.subtitle}>Phone</div>
          <input
            {...register('phone', {
              required: true,
            })}
            id="telefono"
            type="text"
            className={styles['name'] + ' ' + styles['formEntry']}
            placeholder="2761212 - 313 564 8712"
            name="phone"
          />
          <div className={styles.subtitle}>Message</div>
          <textarea
            {...register('message')}
            id="mesagge"
            className={styles['message'] + ' ' + styles['formEntry']}
            placeholder="Escribenos tu Mensaje Aqui"
            name="message"
          ></textarea>
          <br />
          {/* <input id="mensaje" type="checkbox" className={styles.termsConditions} value="Term"/> */}
          {/* <label  htmlFor="terms"> I Accept the</label> */}
          <button className={styles['submit']} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Formulario
