import { useEffect, useState } from "react";
import Heading2 from "./Heading2";
import MapComponent from "./MapComponent";
import PingComponent from "./PingComponent";
import styles from "./PingSection.module.css";

export default function PingSection() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [crap, setCrap] = useState(window.innerWidth >= 550);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // run once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Compare width, not the whole size object
    setCrap(size.width >= 550);
  }, [size.width]);

  return (
    <div className={styles.parent}>
      <Heading2>
        {crap && <div>Our infrastructure: Powered by</div>}{!crap && <div>Powered by </div>}
        <span className={styles.skylink}>skylink datacenter.</span>
      </Heading2>
      <div className={styles.container}>
        <MapComponent />
        <PingComponent />
      </div>
    </div>
  );
}
