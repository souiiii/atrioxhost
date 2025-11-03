import styles from "./PingComponent.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function PingComponent() {
  const p = useRef(null);
  const bar = useRef(null);
  const [test, setTest] = useState(0);
  const [time, setTime] = useState(200);
  const [progress, setProgress] = useState(75);
  const [status, setStatus] = useState(null);

  // ✅ Fixed IPv4 URL — must include protocol
  const url = "/89.251.21.1/";

  useEffect(() => {
    if (test > 0) {
      const controller = new AbortController();

      const timeoutId = setTimeout(() => {
        controller.abort(); // cancel fetch if it takes too long
        setStatus("error"); // mark as error on timeout
      }, 5000); // 5-second limit

      const start = performance.now();
      setStatus("loading");

      fetch(url, {
        method: "HEAD",
        cache: "no-store",
        mode: "no-cors",
        signal: controller.signal,
      })
        .then(() => {
          clearTimeout(timeoutId);
          const ms = Math.round(performance.now() - start);
          setProgress(200);
          if (ms > 200) setStatus("exceed");
          else {
            setTime(ms);
            setStatus("ok");
          }
        })
        .catch(() => {
          clearTimeout(timeoutId);
          const ms = Math.round(performance.now() - start);
          setTime(ms);
          setStatus("error");
        });

      // ✅ Cleanup: clear timeout and abort fetch
      return () => {
        clearTimeout(timeoutId);
        controller.abort();
      };
    }
  }, [test]);

  useEffect(() => {
    if (test > 0) {
      const current = progress;
      if (current > time) {
        let dec = 1;
        let rate = 90;
        if ((current - time) / 6 > 1) {
          dec = 6;
          rate = Math.max(30, 90 - (current - time) / 10); // ✅ clamp min rate
        } else {
          dec = 1;
          rate = Math.max(30, (90 - (current - time) / 10) / 2); // ✅ clamp min rate
        }

        const timeoutId = setTimeout(() => {
          setProgress((p) => Math.max(time, Math.max(0, p - dec))); // ✅ prevent negative
        }, rate);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [time, progress, test]);

  useEffect(() => {
    // ✅ Update progress bar width
    bar.current.style.width = `${((200 - progress) / 200) * 100}%`;
  }, [progress, time]);

  // useEffect(() => {
  //   // ✅ GSAP entrance animation
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       p.current,
  //       { x: -100, opacity: 0 },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 0.3,
  //         ease: "power1.inOut",
  //         scrollTrigger: {
  //           trigger: p.current,
  //           start: "top 90%",
  //           end: "top 90%",
  //           scrub: false,
  //           markers: false,
  //           toggleActions: "play none reverse none",
  //         },
  //       }
  //     );
  //   }, p);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={p} className={styles.parent}>
      <div className={styles.textDiv}>
        <h1 className={styles.heading}>Unmatched Realibility</h1>
        <p className={styles.desc}>
          <span className={styles.skylink}>At Skylink Datacenter,</span>{" "}
          experience lightning-fast connectivity for seamless gaming, streaming,
          and real-time communication.
        </p>
      </div>

      <div className={styles.pingDiv}>
        <h1 className={styles.heading2}>TEST YOUR PING!</h1>
        <div className={styles.pingMeterDiv}>
          <div className={styles.pingMeter}>
            <div ref={bar} className={styles.pingMeterProgress} />
          </div>
          <div className={styles.pingMeterLabels}>
            <p className={styles.pings}>+200ms</p>
            <p className={styles.pings}>100ms</p>
            <p className={styles.pings}>0ms</p>
          </div>
        </div>
        <button className={styles.butt} onClick={() => setTest((t) => t + 1)}>
          Start the test
        </button>
        <h1 className={styles.pingResult}>
          {status === "ok" ? (
            <div className={styles.pingDivv}>
              {progress < 100
                ? progress < 10
                  ? `00${progress}`
                  : `0${progress}`
                : progress}
              <span className={styles.ms}>MS</span>
            </div>
          ) : status === "loading" ? (
            <span className={styles.pinging}>Pinging..</span>
          ) : status === "error" ? (
            <span className={styles.pinging}>Server Down</span>
          ) : status === "exceed" ? (
            <span className={styles.pinging}>Bad Gateway</span>
          ) : (
            <span className={styles.pinging}>Ready!</span>
          )}
        </h1>
      </div>
    </div>
  );
}
