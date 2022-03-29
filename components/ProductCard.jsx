import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles}>
      <div className={styles.imgcontainer}>
      <h5 className={styles.category}>{product.category}</h5>
      <Image src={product.image} layout="fill" />
      </div>
      <div className={styles.details}>
      <h4 className={styles.title}>{product.product}</h4>
      
      <p>{product.description}</p>
      <p>${product.price}</p>
        </div>     
      
      <button
        onClick={() => dispatch(addToCart(product))}
        className={styles.button}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
