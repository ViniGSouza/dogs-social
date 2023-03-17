import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useMedia } from "../../Hooks/useMedia";
import styles from './UserHeaderNav.module.css';
import {ReactComponent as Fotos} from '../../assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../assets/estatisticas.svg';
import {ReactComponent as AdicionarPost} from '../../assets/adicionar.svg';
import {ReactComponent as Sair} from '../../assets/sair.svg';


export const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  return (
    <>
    {mobile &&
    <button
      aria-label="Menu"
      className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
      onClick={() => setMobileMenu(!mobileMenu)}>
    </button>
    }

    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink to="/conta" end><Fotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas"><Estatisticas />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar"><AdicionarPost />
        {mobile && 'Postar Foto'}
      </NavLink>
      <button onClick={userLogout}><Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
    </>
  )
}