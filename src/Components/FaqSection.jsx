import Heading from "./Heading.jsx";
import styles from "./FaqSection.module.css";
import FAQ from "./FAQ.jsx";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Why should I choose Atrioxhosting?",
    answer:
      "We offer the most reliable game server hosting at the best prices you'll find anywhere. We've deployed over 100,000 servers since 2017, backed  by 1700+ 4 and 5 star reviews. Don't believe us? Try your server risk  free with our 48 hour refund guarantee.",
  },
  {
    question: "How fast will support respond?",
    answer:
      "We offer the most reliable game server hosting at the best prices you'll find anywhere. We've deployed over 100,000 servers since 2017, backed  by 1700+ 4 and 5 star reviews. Don't believe us? Try your server risk  free with our 48 hour refund guarantee.",
  },
  {
    question: "Can I upgrade my server hosting later?",
    answer:
      "We offer the most reliable game server hosting at the best prices you'll find anywhere. We've deployed over 100,000 servers since 2017, backed  by 1700+ 4 and 5 star reviews. Don't believe us? Try your server risk  free with our 48 hour refund guarantee.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer the most reliable game server hosting at the best prices you'll find anywhere. We've deployed over 100,000 servers since 2017, backed  by 1700+ 4 and 5 star reviews. Don't believe us? Try your server risk  free with our 48 hour refund guarantee.",
  },
  {
    question: "How much professionalism can I expect?",
    answer:
      "We offer the most reliable game server hosting at the best prices you'll find anywhere. We've deployed over 100,000 servers since 2017, backed  by 1700+ 4 and 5 star reviews. Don't believe us? Try your server risk  free with our 48 hour refund guarantee.",
  },
];

export default function FaqSection() {
  const [display, setDisplay] = useState(0);

  const faq = useRef(null);

  useEffect(() => {
    // scope animations to this component (avoids double-invoke in React 18 dev)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [faq.current],
        { y: 100, opacity: 0 }, // fromVars
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power1.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: faq.current,
            start: "top 90%",
            end: "top 90%",
            scrub: false,
            markers: false,
            toggleActions: "play none reverse none",
          },
        } // toVars (put ScrollTrigger here)
      );
    }, faq);

    return () => ctx.revert(); // kill tween + ScrollTrigger on unmount
  }, []);

  return (
    <div  className={styles.parent}>
      <Heading>FREQUENTLY ASKED QUESTIONS</Heading>
      <div ref={faq} className={styles.faqs}>
        {faqs.map((f, i) => (
          <FAQ
            key={i}
            index={i}
            question={f.question}
            setDisplay={setDisplay}
            display={display}
            answer={f.answer}
          />
        ))}
      </div>
    </div>
  );
}
