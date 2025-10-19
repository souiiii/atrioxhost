import styles from './PingComponent.module.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function PingComponent() {

    const p= useRef(null);

    useEffect(() => {
      // scope animations to this component (avoids double-invoke in React 18 dev)
      const ctx = gsap.context(() => {
        gsap.fromTo(
          p.current,
          { x: -100, opacity: 0 }, // fromVars
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: p.current,
              start: "top 90%",
              end: "top 90%",
              scrub: false,
              markers: false,
              toggleActions: "play none reverse none",
            },
          } // toVars (put ScrollTrigger here)
        );
      }, p);

      return () => ctx.revert(); // kill tween + ScrollTrigger on unmount
    }, []);

  return (
    <div ref={p} className={styles.parent}>
      <div className={styles.textDiv}>
        <h1 className={styles.heading}>Unmatched Realibility</h1>
        <p className={styles.desc}>
          <span className={styles.skylink}>At Skylink Datacenter,</span> experience lightning-fast connectivity for
          seamless gaming, streaming, and real-time communication.
        </p>
      </div>
      
      <div className={styles.pingDiv}>
        <h1 className={styles.heading2}>TEST YOUR PING!</h1>
        <div className={styles.pingMeterDiv}>
          <div className={styles.pingMeter}>
            <div className={styles.pingMeterProgress}/>
          </div>
          <div className={styles.pingMeterLabels}>
            <p className={styles.pings}>+200ms</p>
            <p className={styles.pings}>100ms</p>
            <p className={styles.pings}>0ms</p>
          </div>
        </div>
        <button className={styles.butt}>Start the test</button>
        <h1 className={styles.pingResult}>78<span className={styles.ms}>MS</span></h1>
      </div>
    </div>
  );
}