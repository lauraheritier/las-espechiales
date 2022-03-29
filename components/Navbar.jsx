import Link from 'next/link';
import Image from 'next/image'
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';
import logoImg from '../public/images/logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}><Image src={logoImg} /></h1>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Inicio</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/shop">Productos</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">
            <p>
<FaShoppingCart /> ({getItemsCount()})</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
