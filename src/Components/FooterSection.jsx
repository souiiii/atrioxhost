import styles from "./FooterSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone, // phone handset
  faTicket, // ticket (or use faTicketSimple)
  faConciergeBell, // service bell (fallback to faBell if unavailable)
  faCartShopping, // shopping cart
  faBell, // generic bell (optional fallback)
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function FooterSection() {
  return (
    <div className={styles.parent}>
      <div className={styles.sec1Outer}>
        <div className={styles.sec1}>
          <div className={styles.textDiv}>
            <p className={styles.subHead}>Still not convinced?</p>
            <h1 className={styles.heading}>Join our Discord server </h1>
            <p className={styles.desc}>
              Connect with our team and get your queries resolved promptly.
            </p>
            <div className={styles.buttDiv}>
              <button className={styles.butt1}>
                <FontAwesomeIcon fontSize="30" icon={faCartShopping} />
                &nbsp;&nbsp;Order Now
              </button>
              <button className={styles.butt2}>
                <FontAwesomeIcon fontSize="30" icon={faDiscord} />
                &nbsp;&nbsp;Join our discord
              </button>
            </div>
          </div>
          <div className={styles.iconsDiv}>
            <div className={styles.firstCol}>
              <a href="#" className={styles.iconContainer}>
                <FontAwesomeIcon className={styles.icon} icon={faPhone} />
              </a>
              <a href="#" className={styles.iconContainer}>
                <FontAwesomeIcon className={styles.icon} icon={faTicket} />
              </a>
            </div>
            <div className={styles.secondCol}>
              <a href="#" className={styles.iconContainer}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faConciergeBell}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sec2Outer}>
        <div className={styles.sec2}>
          <div className={styles.firstPart}>
            <a className={styles.logoDiv}>
              <img src="/footerlogo.webp" className={styles.logo} />
            </a>
            <p className={styles.description}>
              At Atrioxhosting, we believe that premium services shouldn't come
              with premium prices. We’re not here for profit—we're here to make
              high-quality hosting accessible to everyone, including those with
              a limited budget.
            </p>
          </div>
          <div className={styles.secondPart}>
            <div className={styles.column}>
              <div className={styles.linkDiv}>
                <h2 className={styles.linkHeading}>Game Servers</h2>
                <a className={styles.links}>Minecraft - Java</a>
                <a className={styles.links}>Minecraft - Bedrock</a>
                <a className={styles.links}>FiveM</a>
                <a className={styles.links}>Satisfactory</a>
                <a className={styles.links}>Factorio</a>
              </div>
              <div className={styles.linkDiv}>
                <h2 className={styles.linkHeading}>Services</h2>
                <a className={styles.links}>Discord Bots</a>
                <a className={styles.links}>VoiceCraft Server</a>
                <a className={styles.links}>Remote DDoS Mitigation</a>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.linkDiv}>
                <h2 className={styles.linkHeading}>Pages</h2>
                <a className={styles.links}>Game Server </a>
                <a className={styles.links}>Services</a>
                <a className={styles.links}>Knowledgebase</a>
                <a className={styles.links}>About Us</a>
                <a className={styles.links}>Affliates</a>
                <a className={styles.links}>Locations</a>
                <a className={styles.links}>News</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.endingFooter}>
          <div className={styles.div}>
            <div className={styles.firstPart}>
              <p className={`${styles.description} ${styles.love}`}>Made with love and passion. </p>
              <p className={styles.description}>
                © Copyright 2021-2025 | Atrioxhosting by MennoJob G.
              </p>
            </div>
            <div className={styles.secondPart}>
              <div className={styles.column}>
                <div className={styles.linkDiv}>
                  <a className={styles.links}>Terms of Service</a>
                  <a className={styles.links}>Service Level Agreement</a>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.linkDiv}>
                  <a className={styles.links}>Privacy Policy</a>
                  <p className={styles.description}>VAT: NL004746559B36</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
