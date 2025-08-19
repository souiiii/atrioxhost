import HeroSection from '../Components/HeroSection';
import styles from './HomePage.module.css';
import FeatureSection from '../Components/FeatureSection';
import ServerSection from '../Components/ServerSection';
import TestimonialSection from '../Components/TestimonialSection';
import LazyBlurShape from '../Components/LazyBlurShape';
import PlansSection from '../Components/PlansSection';
import PingSection from '../Components/PingSection';
import FaqSection from '../Components/FaqSection';

export default function HomePage() {
  return (
    <div className={styles.parent}>
      <LazyBlurShape
        width={1000}
        height={1025}
        style={{ top: 200, right: '-5%', position: "absolute" }}
      />
      <LazyBlurShape
        width={900}
        height={925}
        style={{ top: -200, left: "10%", position: "absolute" }}
      />
      <LazyBlurShape
        width={1000}
        height={1025}
        style={{ top: 1100, right: "-5%", position: "absolute", opacity: 0.05 }}
      />
      <LazyBlurShape
        width={900}
        height={925}
        style={{ top: 1300, left: "-5%", position: "absolute", opacity: 0.08 }}
      />
      <LazyBlurShape
        width={1000}
        height={1025}
        style={{ top: 2500, right: "0", position: "absolute" }}
      />
      <LazyBlurShape
        width={1400}
        height={1425}
        style={{ top: 1600, right: "-40%", position: "absolute", opacity: 0.08 }}
      />
      <LazyBlurShape
        width={1200}
        height={1625}
        style={{ top: 3000, left:"-30%", position: "absolute", opacity: 0.1 }}
      />
      <LazyBlurShape
        width={1400}
        height={1425}
        style={{ top: 4200, right:"-10%", position: "absolute", opacity: 0.08 }}
      />
      <HeroSection />
      <FeatureSection />
      <ServerSection/>
      <TestimonialSection/>
      <PlansSection/>
      <PingSection/>
      <FaqSection/>
    </div>
  );
}