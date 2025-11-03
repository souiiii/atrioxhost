import HeroSection from "../Components/HeroSection";
import styles from "./HomePage.module.css";
import FeatureSection from "../Components/FeatureSection";
import ServerSection from "../Components/ServerSection";
import TestimonialSection from "../Components/TestimonialSection";
import LazyBlurShape from "../Components/LazyBlurShape";
import PlansSection from "../Components/PlansSection";
import PingSection from "../Components/PingSection";
import FaqSection from "../Components/FaqSection";
import FooterSection from "../Components/FooterSection";
import { useEffect, useState } from "react";

function useIsMobile(breakpoint = 700) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= breakpoint);
    update(); // first client render
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [breakpoint]);

  return isMobile;
}

export default function HomePage() {
  const isMobile = useIsMobile(700);
  return (
    <div className={`${styles.parent} `}>
      {/* {isMobile ? (
        <>
          {" "}
          <LazyBlurShape
            width={500}
            height={502}
            style={{ top: 200, right: 0, position: "absolute" }}
          />
          <LazyBlurShape
            width={390}
            height={392}
            style={{ top: -200, left: 0, position: "absolute" }}
          />
          <LazyBlurShape
            width={100}
            height={102}
            style={{
              top: 1100,
              right: 0,
              position: "absolute",
              opacity: 0.15,
            }}
          />
          <LazyBlurShape
            width={390}
            height={392}
            style={{
              top: 1300,
              left: 0,
              position: "absolute",
              opacity: 0.16,
            }}
          />
          <LazyBlurShape
            width={300}
            height={302}
            style={{ top: 2500, right: "0", position: "absolute" }}
          />
          <LazyBlurShape
            width={340}
            height={342}
            style={{
              top: 1600,
              right: 0,
              position: "absolute",
              opacity: 0.16,
            }}
          />
          <LazyBlurShape
            width={220}
            height={262}
            style={{
              top: 3000,
              left: 0,
              position: "absolute",
              opacity: 0.16,
            }}
          />
          <LazyBlurShape
            width={340}
            height={342}
            style={{
              top: 4200,
              right: 0,
              position: "absolute",
              opacity: 0.16,
            }}
          />
          <LazyBlurShape
            width={360}
            height={362}
            style={{
              top: 5800,
              left: 0,
              position: "absolute",
              opacity: 0.14,
            }}
          />
          <LazyBlurShape
            width={240}
            height={242}
            style={{
              top: 6900,
              right: 0,
              position: "absolute",
              opacity: 0.14,
            }}
          />
          <LazyBlurShape
            width={350}
            height={355}
            style={{
              top: 7900,
              left: 0,
              position: "absolute",
              opacity: 0.14,
            }}
          />
        </>
      ) : (
        <>
          {" "}
          <LazyBlurShape
            width={1000}
            height={1025}
            style={{ top: 200, right: "-5%", position: "absolute" }}
          />
          <LazyBlurShape
            width={900}
            height={925}
            style={{ top: -200, left: "10%", position: "absolute" }}
          />
          <LazyBlurShape
            width={1000}
            height={1025}
            style={{
              top: 1100,
              right: "-5%",
              position: "absolute",
              opacity: 0.05,
            }}
          />
          <LazyBlurShape
            width={900}
            height={925}
            style={{
              top: 1300,
              left: "-5%",
              position: "absolute",
              opacity: 0.06,
            }}
          />
          <LazyBlurShape
            width={1000}
            height={1025}
            style={{ top: 2500, right: "0", position: "absolute" }}
          />
          <LazyBlurShape
            width={1400}
            height={1425}
            style={{
              top: 1600,
              right: "-40%",
              position: "absolute",
              opacity: 0.06,
            }}
          />
          <LazyBlurShape
            width={1200}
            height={1625}
            style={{
              top: 3000,
              left: "-30%",
              position: "absolute",
              opacity: 0.06,
            }}
          />
          <LazyBlurShape
            width={1400}
            height={1425}
            style={{
              top: 4200,
              right: "-10%",
              position: "absolute",
              opacity: 0.06,
            }}
          />
          <LazyBlurShape
            width={1600}
            height={1625}
            style={{
              top: 5800,
              left: "-20%",
              position: "absolute",
              opacity: 0.04,
            }}
          />
          <LazyBlurShape
            width={1400}
            height={1425}
            style={{
              top: 6900,
              right: "-10%",
              position: "absolute",
              opacity: 0.04,
            }}
          />
          <LazyBlurShape
            width={1500}
            height={1550}
            style={{
              top: 7900,
              left: "-20%",
              position: "absolute",
              opacity: 0.04,
            }}
          />
        </>
      )} */}

      <HeroSection />
      <FeatureSection />
      <ServerSection />
      <TestimonialSection />
      <PlansSection />
      <PingSection />
      {/* <FaqSection /> */}
      {/* <FooterSection /> */}
    </div>
  );
}
