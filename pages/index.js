import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="/images/cabsha.jpg" name="Grandes" />
        <CategoryCard image="/images/lemon.jpg" name="Medianas" />
        <CategoryCard image="/images/marquise.jpg" name="Individuales" />
      </div>
      
    </main>
  );
};

export default HomePage;
