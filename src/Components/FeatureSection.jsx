import styles from "./FeatureSection.module.css";
import Heading from "./Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faMicrochip,
  faLock,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { startTransition, useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText, ScrollTrigger);
export default function FeatureSection() {
  const box = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const desc = useRef(null);

  useEffect(function () {
    setTimeout(function hell(){ const myText = new SplitText(desc.current, { type: "words" });
    gsap.fromTo(
      [box1.current, box2.current, box3.current, box4.current],
      { y: "120px", opacity: 0, filter: "blur(10px)" },
      {
        y: "0",
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.3,
        stagger: 0.08,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: box.current,
          start: "top 50%",
          end: "top 50%",
          scrub: false,
          toggleActions: "play none reverse none",
        },
      }
    );
    gsap.fromTo(
      myText.words,
      { y: 60, filter: "blur(5px)", opacity: 0.01 },

      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.3,
        stagger: 0.04,
        y: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: desc.current,
          start: "top 85%",
          end: "top 85%",
          scrub: false,
          markers: false,
          toggleActions: "play none reverse none",
        },
      }
    );},100);

   
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className={styles.parent}>
      <div className={styles.textContainer}>
        <Heading>What sets us apart</Heading>
        <div ref={box} className={styles.grid}>
          <div ref={box1} className={styles.gridBox}>
            <div className={styles.featureHeadingDiv}>
              {" "}
              <FontAwesomeIcon icon={faSliders} className={styles.icon} />
              &nbsp;Instant setup
            </div>
            <p className={styles.para}>
              Right after the first payment, our automated system gets to work.
              Start your game just after your purchase!
            </p>
          </div>
          <div ref={box2} className={styles.gridBox}>
            <div className={styles.featureHeadingDiv}>
              <FontAwesomeIcon icon={faMicrochip} className={styles.icon} />
              &nbsp;Our hardware
            </div>
            <p className={styles.para}>
              Enjoy unmatched speed and performance with Ryzen 9900X CPUs, DDR5
              RAM, and NVMe SSDs.
            </p>
          </div>
          <div ref={box3} className={styles.gridBox}>
            <div className={styles.featureHeadingDiv}>
              <FontAwesomeIcon icon={faLock} className={styles.icon} />
              &nbsp;DDoS Protected
            </div>
            <p className={styles.para}>
              We partner with premium DDOS protection providers to protect your
              server from bad actors.
            </p>
          </div>
          <div ref={box4} className={styles.gridBox}>
            <div className={styles.featureHeadingDiv}>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className={styles.icon}
              />
              &nbsp;Premium Support
            </div>
            <p className={styles.para}>
              We’re happy to assist you anytime, available 15 hours a day, from
              9 AM to 12 AM CET.
            </p>
          </div>
        </div>
        <p ref={desc} className={styles.footer}>
          <span className={styles.highlightedText}>Unlock potential</span> with
          Atrioxhosting and powerful hardware and software, you can take your
          game to the next level.
        </p>
      </div>
      <div className={styles.dragonContainer}>
        <img className={styles.dragon} src="/dragonm.png" alt="Dragon Image" />
      </div>
    </div>
  );
}
