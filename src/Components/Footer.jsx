import styles from './Footer.module.css';
import dogsFooter from '../assets/dogs-footer.svg';

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <img src={dogsFooter} alt="Dogs ícone" />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}
