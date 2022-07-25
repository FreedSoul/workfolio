// import Image from 'next/image'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
// import Navbar from '../components/navbar'

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div
        style={{
          borderBottomLeftRadius: '15px',
          borderTopLeftRadius: '15px',
          overflow: 'hidden',
        }}
        className={styles['card-image']}
      >
        <Image
          alt={props.alt}
          src={props.image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles['card-description']}>
        <h3>{props.title}</h3>
        {/* <p className={styles['card-description-title']}>
        </p> */}
        <div className={styles['description-stack']}>
          <ul>
            {props.list.map((item, count) => (
              <li key={1 + count}>{item}</li>
            ))}
            {/* <li>node</li>
            <li>javascript</li>
            <li>react</li> */}
          </ul>
        </div>
      </div>

      {/* <div className={styles['container-matt']}>
          <Image
            src={'/sentado-sinfondo.png'}
            // width={'300px'}
            // height={'300px'}
            layout={'fill'}
            alt="hola mundo"
          />
        </div> */}

      {/* <div className={styles['circle-dev']}></div> */}
    </div>
  )
}
