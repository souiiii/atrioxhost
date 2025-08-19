import Heading from "./Heading";
import PlanContainer from "./PlanContainer";
import styles from "./PlansSection.module.css";

const plans = [{title: 'Budget', price: 0.75 , cpu: 'Intel Core i7-8700' , ram: 'DDR4' , speed: '230', tagLine: 'Best for personal ventures with a few friends too!'},{title: 'Premium', price: '1.50' , cpu: 'Intel Core i9-9900K' , ram: 'DDR4' , speed: '230', tagLine: 'Get the most possible value out of our services!'},{title: 'Enterprise', price: 2.25 , cpu: 'AMD Ryzen 9 7950X3D' , ram: 'DDR5' , speed: '230', tagLine: 'Go all in with extreme performance and stability.'}]

export default function PlansSection() {
  return (
    <div className={styles.parent}>
      <Heading>We have plans for everyone</Heading>
      <p className={styles.desc}>
        Choose the plan that fits your needs — from entry-level to extreme
        performance. All tiers include top-tier security, fast NVMe storage, and
        expert support.
      </p>
      <div className={styles.plansGrid}>
        {plans.map((p, i)=><PlanContainer key={i} title={p.title} price= {p.price} cpu={p.cpu} ram={p.ram} speed = {p.speed} tagLine={p.tagLine} num = {i===1?  1:0}/>)}
      </div>
    </div>
  );
}
