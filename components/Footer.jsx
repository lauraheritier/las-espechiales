import styles from '../styles/Footer.module.css';
import { FaInstagram, FaFacebookSquare, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.prefooter}>
        <div><FaPhoneAlt /> 3834619507</div>
        <a className={styles.instagram} href="https://www.instagram.com/lasespechialescba/" target="_blank"><FaInstagram /> Instagram</a>
        <a href="https://www.facebook.com/lasespechialescba" target="_blank"><FaFacebookSquare /> Facebook</a>
      </div>
      <div className={styles.copyright}>Copyright <span className={styles.brand}>Las Espechiales</span> &copy;{' '}
        {new Date().getFullYear()}</div>

    </footer>
  );
};

export default Footer;
