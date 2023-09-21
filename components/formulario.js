import styles from '../styles/Formulario.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { sendForm,init } from 'emailjs-com'
// import Script from 'next/script'
// import { useState } from 'react'
import { RiMailSendLine } from 'react-icons/ri'
// import Image from 'next/image'

const Formulario = () => {
  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')
  // const [message,setMessage] = useState('')
  init('gQXXLvIXoJZEhU4X0')
  const [contactNumber, setContactNumber] = useState('000000')
  const [messageSent,setmessageSent] = useState('')

  const generateContactNumber = () => {
    const numStr = '000000' + ((Math.random() * 1000000) | 0)
    setContactNumber(numStr.substring(numStr.length - 6))
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm()

  console.log(errors)
  // console.log(getValues("emailconfirm"))
  // console.log(getValues("email"))

  // const onSubmit = data => console.log(data)

  const onSubmit = (data) => {
    const form = document.querySelector('#contact-form')

    console.log(data);
    generateContactNumber()
    sendForm("contact_form","template_5sln56o", '#contact-form').then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
        setmessageSent('success')
      },
      function (error) {
        console.log('FAILED...', error)
        setmessageSent('failed')
      },
      form.reset()
    )
  }

  return (
    <>
      <div className={styles.wrapper}>
        <form
          id='contact-form'
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          name="submit-to-google-sheet"
          // action={'scriptURL4'}
          method="POST"
        >
        {messageSent==='success' && <div>The Form has been sent!</div> }
        {messageSent==='failed' && <div>something gone wrong,please try again!</div>}
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
          {/* hidden input to update contact random number (onSubmit()) */}
          <input type="hidden" name="contact_number" value={contactNumber} /> 
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
            placeholder="example@yourEmail.com"
            name="email"
            />
          <div className={styles.subtitle}>Confirm Email</div>
          {errors.confirm && (
            <div role={'alert'} className={styles.alertdiv}>
              <p>you must confirm your email</p>
            </div>
          )}
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
            placeholder="example@yourEmail.com"
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
            placeholder="Name"
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
            placeholder="Write your message here"
            name="message"
          ></textarea>
          <br />
          {/* <input id="mensaje" type="checkbox" className={styles.termsConditions} value="Term"/> */}
          {/* <label  htmlFor="terms"> I Accept the</label> */}
          <button className={styles['submit']} type="submit" >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Formulario
