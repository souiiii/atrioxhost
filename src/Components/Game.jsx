import styles from './Game.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Game({name, high, desc, features, price}) {
  return (
    <div className={styles.parent}>
      <h1 className={styles.gameName}>{name}</h1>
      <p className={styles.desc}>
        <span className={styles.high}>{high}</span>&nbsp;{desc}
      </p>
      <div className={styles.featureDiv}>
        {features.map((f, i) => (
          <div key={i} className={styles.feature}>
            <FontAwesomeIcon
              icon={faBolt}
              style={{ color: "#00CE79", fontSize: "18px" }}
            />
            &nbsp;{f}
          </div>
        ))}
      </div>
      <div className={styles.priceDiv}>
        Starting at: <span className={styles.price}>${price}</span>
      </div>
      <button className={`${styles.button}`}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          style={{ color: "#000", fontSize: "32px" }}
        />
        &nbsp; Get your journey Started
      </button>
    </div>
  );
}