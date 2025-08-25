import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Heading from "./Heading";
import Testimonial from "./Testimonial";
import styles from "./TestimonialSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const test = [
  [
    {
      name: "Nathan Drono",
      title: "Hosting with excellent, budget-friendly servers.",
      desc: "If you need help, they're ready to assist you as quickly as possible until the issue is resolved. They communicate updates clearly—top-notch hosting!",
      img: "/face.png",
      pos: "CEO @ Sparkedhost",
      feedtitle: "Authenticity can't be faked,",
      feed: "neither can results our game to the next level.",
    },
    {
      name: "Nathan Drono",
      title: "Hosting with excellent, budget-friendly servers.",
      desc: "If you need help, they're ready to assist you as quickly as possible until the issue is resolved. They communicate updates clearly—top-notch hosting!",
      img: "/face.png",
      pos: "CEO @ Sparkedhost",
      feedtitle: "This section exists for a reason.",
      feed: "Trust and hardwork cannot be faked.",
    },
  ],
  [
    {
      name: "Nathan Drono",
      title: "Hosting with excellent, budget-friendly servers.",
      desc: "If you need help, they're ready to assist you as quickly as possible until the issue is resolved. They communicate updates clearly—top-notch hosting!",
      img: "/face.png",
      pos: "CEO @ Sparkedhost",
      feedtitle: "Authenticity can't be faked,",
      feed: "neither can results our game to the next level.",
    },
    {
      name: "Nathan Drono",
      title: "Hosting with excellent, budget-friendly servers.",
      desc: "If you need help, they're ready to assist you as quickly as possible until the issue is resolved. They communicate updates clearly—top-notch hosting!",
      img: "/face.png",
      pos: "CEO @ Sparkedhost",
      feedtitle: "This section exists for a reason.",
      feed: "Trust and hardwork cannot be faked.",
    },
  ],
  [
    {
      name: "Nathan Drono",
      title: "Hosting with excellent, budget-friendly servers.",
      desc: "If you need help, they're ready to assist you as quickly as possible until the issue is resolved. They communicate updates clearly—top-notch hosting!",
      img: "/face.png",
      pos: "CEO @ Sparkedhost",
      feedtitle: "Authenticity can't be faked,",
      feed: "neither can results our game to the next level.",
    },
    {
      name: "Nathan Drono",
      title: "Hosting with excellent, budget-friendly servers.",
      desc: "If you need help, they're ready to assist you as quickly as possible until the issue is resolved. They communicate updates clearly—top-notch hosting!",
      img: "/face.png",
      pos: "CEO @ Sparkedhost",
      feedtitle: "This section exists for a reason.",
      feed: "Trust and hardwork cannot be faked.",
    },
  ],
];

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeoutRef, setTimeoutRef] = useState(null);

  const resetTimeout = () => {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }
    const newTimeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % test.length);
    }, 5000);
    setTimeoutRef(newTimeout);
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
    drag: false,
    wheel: false,
  });

  // Sync slider with currentSlide state
  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.moveToIdx(currentSlide);
    }
  }, [currentSlide]);

  // Initialize autoplay
  useEffect(() => {
    resetTimeout();
    return () => {
      if (timeoutRef) {
        clearTimeout(timeoutRef);
      }
    };
  }, [currentSlide]); // Add currentSlide as dependency

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + test.length) % test.length);
    resetTimeout();
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % test.length);
    resetTimeout();
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    resetTimeout();
  };

  return (
    <div className={styles.parent}>
      <Heading>What our customers say</Heading>
      <div className={styles.testimonialCorousel}>
        <div ref={sliderRef} className="keen-slider">
          {test.map((t, i) => (
            <div className="keen-slider__slide" key={i}>
              <Testimonial t={t} />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          className={styles.navButton + " " + styles.prevButton}
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faArrowLeft} className={styles.arrows} />
        </button>
        <button
          className={styles.navButton + " " + styles.nextButton}
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrows} />
        </button>

        {/* Dots */}
        <div className={styles.dots}>
          {test.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                currentSlide === index ? styles.dotActive : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
