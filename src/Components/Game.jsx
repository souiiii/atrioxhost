import styles from './Game.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export default function Game({name, high, desc, features, price}) {

  const game= useRef(null);
  
    useEffect(() => {
      // scope animations to this component (avoids double-invoke in React 18 dev)
      const ctx = gsap.context(() => {
        gsap.fromTo(
          game.current,
          { y: 100, opacity: 0 }, // fromVars
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: game.current,
              start: "top 80%",
              end: "top 80%",
              scrub: false,
              markers: false,
              toggleActions: "play none reverse none",
            },
          } // toVars (put ScrollTrigger here)
        );
      }, game);
  
      return () => ctx.revert(); // kill tween + ScrollTrigger on unmount
    }, []);
  return (
    <div ref={game} className={styles.parent}>
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
          className={styles.cartIcon}
        />
        &nbsp; Get your journey Started
      </button>
    </div>
  );
}