// import styles from '../styles/Home.module.css'
import styles from '../styles/Trabajo.module.css'
import Card from '../components/card'

export default function Trabajo() {
  const myWorkList = [
    {
      title: 'Pokedex App',
      listTechs: ['Next js', 'Chakra-ui', 'React', 'Framer-motion'],
      image: '/podekex-app-shot.png',
      imageDescription: 'Pokedex App',
      link: 'https://pkmn-react.vercel.app/',
      bgstyle: {
        background:
          'linear-gradient(180deg, rgba(35, 176, 255, 0.62) 0%, rgba(0, 243, 170, 0.6039) 100%)',
      },
    },
    {
      title: 'Infusion Tienda',
      listTechs: ['Next js', 'Bootstrap', 'React', 'Next-Auth', 'SQL - Prisma'],
      image: '/infusion-screenshot.png',
      imageDescription: 'static website',
      link: 'https://infusion-prod.vercel.app/',
      bgstyle: {
        background:
          'linear-gradient(180deg, rgba(1, 216, 87, 0.5) 0%, rgba(35, 176, 255, 0.55) 100%)',
      },
    },
    {
      title: 'Country Academy',
      listTechs: ['Next js', 'Tailwind', 'React - TypeScript', 'Redux'],
      image: '/country-academy-screenshot.png',
      imageDescription: 'Country Academy',
      link: 'https://github.com/No-Country/s6-11-t-next',
      bgstyle: {
        background:
          'linear-gradient(90deg, rgba(103, 0, 30, 0.6) 20%, rgba(253, 239, 249, 0.4) 90%)',
      },
    },
    {
      title: 'To Do List',
      listTechs: ['Vite', 'Vitest', 'Tailwind'],
      image: '/todolist-snap.PNG',
      imageDescription: 'to do list',
      link: 'https://freedsoul.github.io/toDoApp/',
      bgstyle: {
        background:
          'linear-gradient(to right, rgba(3, 0, 30, 0.6), rgba(115, 3, 192, 0.6), rgba(236, 56, 188, 0.4), rgba(253, 239, 249, 0.4))',
      },
    },
    {
      title: 'Static Website',
      listTechs: ['Next', 'Css', 'React', 'Framer-motion'],
      image: '/dianas-project-snap.PNG',
      imageDescription: 'static website',
      link: 'https://dianas-project.vercel.app/',
      bgstyle: {
        background:
          // 'linear-gradient(180deg, rgba(35, 176, 255, 0.62) 0%, rgba(0, 243, 170, 0.6039) 100%)',
          'linear-gradient(180deg, rgba(17, 222, 255, 0.6039) 0%, rgba(245, 176, 0, 0.62) 69% )',
      },
    },
    {
      title: 'Clock 25 + 5',
      listTechs: ['React', 'Css'],
      image: '/clock25.PNG',
      imageDescription: 'clock25+5',
      link: 'https://codepen.io/matt07/full/qBYydvQ',
      bgstyle: {
        background:
          'linear-gradient(180deg, rgba(1, 216, 87, 0.4) 0%, rgba(255, 35, 233, 0.47) 100%)',
      },
    },
    {
      title: 'Drum Machine',
      listTechs: ['React', 'Css'],
      image: '/drummachine.PNG',
      imageDescription: 'drum machine',
      link: 'https://codepen.io/matt07/full/NWMyzXX',
      bgstyle: {
        background:
          'linear-gradient(360deg, rgba(1, 216, 87, 0.4) 0%, rgba(255, 35, 233, 0.47) 100%)',
      },
    },
    {
      title: 'Calculator',
      listTechs: ['React', 'Css'],
      image: '/calculator.PNG',
      imageDescription: 'calculator',
      link: 'https://codepen.io/matt07/full/WNJJNZg',
      bgstyle: {
        background:
          'linear-gradient(to bottom, rgba(3, 0, 30, 0.6), rgba(115, 3, 192, 0.6), rgba(236, 56, 188, 0.4), rgba(253, 239, 249, 0.4))',
      },
    },
    {
      title: 'MarkDown Previewer',
      listTechs: ['React', 'Css'],
      image: '/markpreviewer.PNG',
      imageDescription: 'MarkDown Previewer',
      link: 'https://codepen.io/matt07/full/eYrVOMo',
      bgstyle: {
        background:
          'linear-gradient(to top, rgba(3, 0, 30, 0.6), rgba(115, 3, 192, 0.6), rgba(236, 56, 188, 0.4), rgba(253, 239, 249, 0.4))',
      },
    },
    {
      title: 'snake game',
      listTechs: ['Javascript', 'Css', 'Canvas API'],
      image: '/snake-game-snap.PNG',
      imageDescription: 'snake game',
      link: 'https://freedsoul.github.io/snake-game/',
      bgstyle: {
        background:
          'linear-gradient(180deg, rgba(1, 216, 87, 0.4) 0%, rgba(35, 176, 255, 0.62) 100%)',
      },
    },
  ]
  return (
    <>
      <div className={styles['page-container']}>
        <h2 className={styles['page-title']}>My Work</h2>
      </div>
      {/* <div className={styles.card}>
          <div className="tk-blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
              <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
            </svg>
          </div>
        </div>

        <div className={styles.card}>
          <div className="tk-blob" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
              <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-200.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 211.3 135.4z"></path>
            </svg>
          </div>
        </div> */}
      <div className={styles.area}>
        {/* <div className={styles['card-container1']}> */}
        {myWorkList.map((item) => (
          // <link key={item.title} href={"https://stackoverflow.com/"} passHref={true}>
          <a
            key={item.title}
            href={item.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Card
              key={item.title}
              title={item.title}
              list={item.listTechs}
              image={item.image}
              alt={item.imageDescription}
              bgstyle={item.bgstyle}
            >
              {item}
            </Card>
          </a>
          // </link>
        ))}
      </div>
    </>
  )
}
