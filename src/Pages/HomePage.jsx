import HeroSection from '../Components/HeroSection';
import styles from './HomePage.module.css';
import BlurShape from "../Components/BlurShape";

export default function HomePage() {
  return (
    <div className={styles.parent}>
      <BlurShape
        width={800}
        height={825}
        style={{ top: 200, right: 0, position: "absolute" }}
      />
      <BlurShape
        width={700}
        height={725}
        style={{ top: -200, left: '10%', position: "absolute" }}
      />
      <HeroSection />
    </div>
  );
}