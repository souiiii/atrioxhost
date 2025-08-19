import { useEffect, useRef } from "react";
import styles from "./FAQ.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQ({ question, answer, index, display, setDisplay }) {
  const tile = useRef(null);

  // useEffect(function(){
  //     gsap.fromTo(tile.current, { height:0}, {y:0, opacity: 1, height: 'auto'})

  // },[display])

  return (
    <div className={styles.parent}>
      <div
        className={styles.question}
        onClick={() => setDisplay(() => (index === display ? -1 : index))}
      >
        <div className={styles.quesSubDiv}>
          <FontAwesomeIcon icon={faTurnDown} color="#00CE79" />
          &nbsp;
          {question}
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          
          className={`${styles.arrow} ${display===index && styles.up}`}
        />
      </div>
      {index === display ? (
        <div ref={tile} className={styles.answer}>
          {answer}
        </div>
      ) : null}
    </div>
  );
}
