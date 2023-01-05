import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import { SidebarData} from './/SidebarData'
import styles from '../styles/Home.module.css';

function Navbar() {
    const [sidebar, setSidebar] = useState (false)

    const showSidebar = () => setSidebar(!sidebar)

    const gotosynopsis = () => window.scrollTo({
        top: synopsis.current.offsetTop,
        behavior: "smooth"
      });
    
      const gotopersonnages = () => window.scrollTo({
        top: personnages.current.offsetTop,
        behavior: "smooth"
      });
    
      const gotoauteure = () => window.scrollTo({
        top: auteure.current.offsetTop,
        behavior: "smooth"
      });
    
      const gotophenomene = () => window.scrollTo({
        top: phenomene.current.offsetTop,
        behavior: "smooth"
      });
    
      const gotoprecommande = () => window.scrollTo({
        top: precommande.current.offsetTop,
        behavior: "smooth"
      });
    
      const gotovideos = () => window.scrollTo({
        top: videos.current.offsetTop,
        behavior: "smooth"
      });
    return (
        <>
            <div className="navbar">
                <div className='menu-bars'>
                <img
                className={styles.temple}
                src="/images/logo-temple.png"
                onClick={showSidebar}
                />
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className="navbar-toggle">
                        <div className='menu-bars'>
                        <img
                        className={styles.temple}
                        src="/images/logo-temple.png"
                        onClick={showSidebar}
                        />
                        </div>
                    </li>
                    {/* {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <p>clicable</p>
                            </li>
                        )
                    }
                    )} */}
                    <div>
          <a className={styles.menu__item2} >INTRODUCTION</a>
          <a className={styles.menu__item2} onClick={gotosynopsis} >SYNOPSIS</a>
          <a className={styles.menu__item2} onClick={gotopersonnages} >PERSONNAGES</a>
          <a className={styles.menu__item2} onClick={gotovideos} >VIDÉOS</a>
          <a className={styles.menu__item2} onClick={gotoauteure} >AUTEURE</a>
          <a className={styles.menu__item2} onClick={gotophenomene} >PHÉNOMÈNE</a>
          <a className={styles.menu__item2} onClick={gotoprecommande} >COMMANDE</a>
        </div>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
