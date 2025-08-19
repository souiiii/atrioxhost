import Heading from "./Heading";
import MapComponent from "./MapComponent";
import PingComponent from "./PingComponent";
import styles from "./PingSection.module.css";

export default function PingSection() {
  return (
    <div className={styles.parent}>
      <Heading>
        Our infrastructure: Powered by{" "}
        <span className={styles.skylink}>skylink datacenter</span>.
      </Heading>
      <div className={styles.container}>
        <MapComponent />
        <PingComponent/>
      </div>
    </div>
  );
}
