import styles from "./Star.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Star() {
  return (
    <div className={styles.parent}>
      <FontAwesomeIcon icon={faStar} className={styles.star} />
      <FontAwesomeIcon icon={faStar} className={styles.star} />
      <FontAwesomeIcon icon={faStar} className={styles.star} />
      <FontAwesomeIcon icon={faStar} className={styles.star} />
      <FontAwesomeIcon icon={faStar} className={styles.star} />
    </div>
  );
}
