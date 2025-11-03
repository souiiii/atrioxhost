import styles from "./Heading2.module.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText, ScrollTrigger); // or just SplitText

export default function Heading2({
  children,
  col1 = "#FFF 19.75%",
  col2 = "rgba(255, 255, 255, 0.13) 106.5%",
  deg = 92,
}) {

    const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [crap, setCrap] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initialize on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

 

useEffect(function(){
    if(size< 550)
        setCrap(c=>!c);
},[size]);


  const heading = useRef(null);
  // useEffect(function () {
  //   gsap.fromTo(
  //     heading.current,
  //     { y: "120px", opacity: 0, filter: "blur(10px)" },
  //     {
  //       y: "0",
  //       opacity: 1,
  //       filter: "blur(0px)",
  //       duration: 0.3,
  //       ease: "power1.inOut",
  //       scrollTrigger: {
  //         trigger: heading.current,
  //         start: "top 90%",
  //         end: "top 90%",
  //         scrub: false,
  //         markers: false,
  //         toggleActions: "play none reverse none",
  //       },
  //     }
  //   );
  //   ScrollTrigger.refresh();
  // }, []);
  return (
    <div className={styles.parent} ref={heading}>
      {children}
    </div>
  );
}
