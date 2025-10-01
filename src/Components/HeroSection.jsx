import styles from "./HeroSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeaf, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const settings = {
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,  
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: false,
    dots: false,
    speed: 1000,
    cssEase: "linear",
    pauseOnFocus: false,
    useCSS: true,
    useTransform: true,
    swipeToSlide: false,
    waitForAnimate: false,
  };
  // const [key, setKey] = useState(0);

  const baseCards = [
    {
      title: "Minecraft Java",
      high: "Unleash your creativity",
      desc: "and design epic worlds, create unique gameplay, and bring your community together.",
      price: "0.74",
    },
    {
      title: "FIVEM",
      high: "Unleash your creativity",
      desc: "and design epic worlds, create unique gameplay, and bring your community together.",
      price: "1.74",
    },
    {
      title: "Satisfactory",
      high: "Unleash your creativity",
      desc: "and design epic worlds, create unique gameplay, and bring your community together. ",
      price: "0.74",
    },
    {
      title: "Minecraft Bedrock",
      high: "Unleash your creativity",
      desc: "and design epic worlds, create unique gameplay, and bring your community together.",
      price: "0.74",
    },
    {
      title: "Factorio",
      high: "Unleash your creativity",
      desc: "and design epic worlds, create unique gameplay, and bring your community together.",
      price: "0.74",
    },
  ];
// const cards = Array(100).fill(c).flat();


  // useEffect(function(){
  //   setTimeout(()=>setKey(k=>k+1), 15000);
  // },[key])
const TOTAL_SLIDES = 50;  
 

 

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.serverDiv}>
            <img className={styles.server} src="/server-good.png" />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.hallow}></div>
            <h1 className={styles.atriox}>ATRIOX</h1>
            <h2 className={styles.hosting}>HOSTING</h2>
            <p className={styles.priceTag}>
              Start your journey at just{" "}
              <span className={styles.price}>$6.99</span>
            </p>
            <p className={styles.desc}>
              With Atrioxhosting and powerful hardware and software, you can
              take your game to the next level. 
            </p>
            <div className={styles.duoButtons}>
              <button className={`${styles.button} ${styles.butt1}`}>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className={styles.bIcon1}
                />
                &nbsp; Order Now
              </button>
              <button className={`${styles.button} ${styles.butt2}`}>
                <FontAwesomeIcon
                  icon={faDiscord}
                  className={styles.bIcon2}
                />
                &nbsp; Our Discord
              </button>
            </div>
          </div>
        </div>

        <div className={styles.container2}>
          <div className="mask topMask"></div>
          <div className="mask bottomMask"></div>
          <Slider className={styles.corousel} {...settings}>
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => {
              const c = baseCards[i % baseCards.length]; // safe: no shared mutations
              return (
                <div
                  key={i}
                  className={`${styles.slide} ${styles[`slide${i}`]}`} // keep your CSS hook
                >
                  <div className={styles.title}>{c.title}</div>
                  <div className={styles.gameDesc}>
                    <span className={styles.high}>{c.high}&nbsp;</span>
                    {c.desc}
                  </div>
                  <div className={styles.price}>Starting at: {c.price}</div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
