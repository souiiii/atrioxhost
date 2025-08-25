import styles from './PlanContainer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faMemory,
  faHardDrive,
  faShieldHalved,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";


export default function PlanContainer({title, price, cpu, speed, tagLine, ram, num=0}) {

  
  
  return (
    <div  className={`${styles.parent} ${num === 0 && styles.down}`}>
      <h1 className={styles.planName}>{title}</h1>
      <p className={styles.price}>${price}</p>
      <div className={styles.specList}>
        <p className={styles.specs}>
          <FontAwesomeIcon icon={faMicrochip} className={styles.icons} />
          &nbsp;{cpu}
        </p>
        <p className={styles.specs}>
          <FontAwesomeIcon icon={faMemory} className={styles.icons} />
          &nbsp;{ram} RAM
        </p>
        <p className={styles.specs}>
          <FontAwesomeIcon icon={faHardDrive} className={styles.icons} />
          &nbsp;NVMe Storage
        </p>
        <p className={styles.specs}>
          <FontAwesomeIcon icon={faShieldHalved} className={styles.icons} />
          &nbsp;{speed}+ Tbit/s DDos Management
        </p>
        <p className={styles.specs}>
          <FontAwesomeIcon icon={faHeadphones} className={styles.icons} />
          &nbsp;Active Support System
        </p>
      </div>
      <p className={styles.tagLine}>{tagLine}</p>
    </div>
  );
}