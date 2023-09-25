// import Image from 'next/image'
import { FC } from 'react'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import { CardContent } from '../pages/trabajo'
// import Navbar from '../components/navbar'

type CardProps = {
  children: CardContent
  key: string
  title: string
  image: string
  alt: string
  list: string[]
  bgstyle: object
}

 const Card:FC<CardProps> = (props) => {
  return (
    <div className={styles.card} style={props.bgstyle}>
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
        <h2>{props.title}</h2>
        {/* <p className={styles['card-description-title']}>
        </p> */}
        <div className={styles['description-stack']}>
          <ul className={styles['list']}>
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

export default Card;