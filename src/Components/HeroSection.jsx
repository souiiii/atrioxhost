import styles from "./HeroSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeaf, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function HeroSection() {
  const settings = {
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    infinite: true,
    arrows: false,
    dots: false,
    speed: 1000,
    cssEase: "ease-in-out",
    pauseOnFocus: true,
  };

  const cards = [
    {
      title: "Minecraft Java",
      high: "Unleash your creativity",
      desc: "and design epic worlds, create unique gameplay, and bring your community together.",
      price: "0.74",
    },
    {
      title: "Satisfactory",
      high: "Unleash your creativity",
      desc: "and design epic worlds, create unique gameplay, and bring your community together. ",
      price: "0.74",
    },
    {
      title: "FIVEM",
      high: "Unleash your creativity",
      desc: "and design epic worlds, create unique gameplay, and bring your community together.",
      price: "0.74",
    },
  ];
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.serverDiv}>
            <img className={styles.server} src="/server.png" />
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
                  style={{ color: "#000", fontSize: "32px" }}
                />
                &nbsp; Order Now
              </button>
              <button className={`${styles.button} ${styles.butt2}`}>
                <FontAwesomeIcon
                  icon={faDiscord}
                  style={{ color: "fafafa", fontSize: "28px" }}
                />
                &nbsp; Join our discord
              </button>
            </div>
          </div>
        </div>

        <div className={styles.container2}>
          <Slider className={styles.corousel} {...settings}>
            {cards.map((c, i) => (
              <div key={i} className={styles.slide}>
                <div className={styles.title}>{c.title}</div>
                <div className={styles.gameDesc}><span className={styles.high}>{c.high}&nbsp;</span>{c.desc}</div>
                <div className={styles.price}>Starting at: {c.price}</div>
              </div>
            ))}
          </Slider>
        </div>
        <div></div>
      </div>
    </div>
  );
}
