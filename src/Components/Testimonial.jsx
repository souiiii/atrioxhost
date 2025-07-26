import styles from "./Testimonial.module.css";
import Star from "./Star.jsx";
export default function Testimonial({ t }) {
  const t1 = t[0];
  const t2 = t[1];
  return (
    <div className={styles.parent}>
      <div className={`${styles.test} ${styles.test1}`}>
        <div className={styles.testDiv}>
          <Star />
          <div className={styles.testActually}>
            <span className={styles.highlightGreen}>{t1.title}</span>&nbsp;
            {t1.desc}
          </div>
          <div className={styles.testDetails}>
            <div className={styles.imgDiv}>
              <img className={styles.img} src={t1.img} />
            </div>
            <div className={styles.nameDiv}>
              <h1 className={styles.name}>{t1.name}</h1>
              <p className={styles.pos}>{t1.pos}</p>
            </div>
          </div>
        </div>
        <div className={styles.testFeedbackDiv}>
          <span className={styles.highlight}>{t1.feedtitle}</span> {t1.feed}
        </div>
      </div>
      <div className={`${styles.test} ${styles.test2}`}>
        <div className={styles.testFeedbackDiv}>
          <span className={styles.highlight}>{t2.feedtitle}</span> {t2.feed}
        </div>
        <div className={styles.testDiv}>
          <Star />
          <div className={styles.testActually}>
            <span className={styles.highlightGreen}>{t2.title}</span>&nbsp;
            {t2.desc}
          </div>
          <div className={styles.testDetails}>
            <div className={styles.imgDiv}>
              <img className={styles.img} src={t2.img} />
            </div>
            <div className={styles.nameDiv}>
              <h1 className={styles.name}>{t2.name}</h1>
              <p className={styles.pos}>{t2.pos}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
