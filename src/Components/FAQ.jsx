import { useEffect } from "react";
import styles from "./FAQ.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnDown } from "@fortawesome/free-solid-svg-icons";

export default function FAQ({ question, answer, index, display, setDisplay }) {

    useEffect(function(){

    },[display])

  return (
    <div className={styles.parent}>
      <div
        className={styles.question}
        onClick={() => setDisplay(() => (index === display ? -1 : index))}
      >
        <FontAwesomeIcon icon={faTurnDown} color="#00CE79" />
        {question}
      </div>
      {index === display ? <div className={styles.answer}>{answer}</div> : null}
    </div>
  );
}
