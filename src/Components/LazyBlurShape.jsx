import { useEffect, useRef, useState } from "react";
import BlurShape from "./BlurShape"; // your current BlurShape component

export default function LazyBlurShape(props) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop watching after it becomes visible
        }
      },
      {
        threshold: 0.1, // how much of it should be in view (10%)
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible && <BlurShape {...props} />}</div>;
}
