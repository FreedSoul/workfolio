import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CgMenu } from 'react-icons/cg'
// import { ImCancelCircle } from 'react-icons/im'

const Header = () => {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    if (!openMenu) {
      setOpenMenu(true)
    }
    if (openMenu) {
      setOpenMenu(false)
    }
  }
  // console.log('este es el width ',props.widthx)
  const OpcionesMenu = [
    '',
    'trabajo',
    'aboutme',
    'contact',
    // 'Blog',
  ]
  const OpcionTitulo = {
    '': 'Home',
    trabajo: 'Mi Trabajo',
    aboutme: 'About Me',
    contact: 'contact me',
    // blog: 'Blog',
  }

  const Selected = (opcion) => (
    <a
      className={router.pathname == concat(opcion) || '' ? styles[opcion] : ''}
    >
      {OpcionTitulo[opcion]}
    </a>
  )

  const concat = (opcion) => '/' + opcion

  const OpcionesGeneradas = OpcionesMenu.map((opcion, id) => (
    <li onClick={toggleMenu} key={id}>
      <Link href={'/' + opcion}>{Selected(opcion)}</Link>
    </li>
  ))

  return (
    <div className={styles['navbar-wrapper']}>
      {router.pathname === '/' && (
        <div
          className={
            styles.navbar +
            ' ' +
            (router.pathname !== '/' && !openMenu
              ? styles.displaynavbar
              : styles.displaypages)
          }
        >
          <ul className={styles.opciones}>{OpcionesGeneradas}</ul>
        </div>
      )}
      {router.pathname !== '/' && (
        <div
          onClick={() => {
            toggleMenu()
          }}
          className={styles.burger}
        >
          <CgMenu />
        </div>
      )}
      {/* {!openMenu && (
        <div
          className={
            styles.navbar +
            ' ' +
            (router.pathname !== '/'
              ? ''
              : styles.displaypages)
          }
        >
          <ul className={styles.opciones}>{OpcionesGeneradas}</ul>
        </div>
      )} */}
    </div>
  )
}

export default Header
