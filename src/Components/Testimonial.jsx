import styles from "./Testimonial.module.css";
import Star from "./Star.jsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial({ t }) {
  const t1 = t[0];
  const t2 = t[1];

  const test = useRef(null);

  useEffect(() => {
    // scope animations to this component (avoids double-invoke in React 18 dev)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        test.current,
        { y: 100, opacity: 0 }, // fromVars
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: test.current,
            start: "top 90%",
            end: "top 90%",
            scrub: false,
            markers: false,
            toggleActions: "play none reverse none",
          },
        } // toVars (put ScrollTrigger here)
      );
    }, test);

    return () => ctx.revert(); // kill tween + ScrollTrigger on unmount
  }, []);

  return (
    <div ref={test} className={styles.parent}>
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
