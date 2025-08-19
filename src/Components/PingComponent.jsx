import styles from './PingComponent.module.css';

export default function PingComponent() {
  return (
    <div className={styles.parent}>
      <div className={styles.textDiv}>
        <h1 className={styles.heading}>Unmatched Realibility</h1>
        <p className={styles.desc}>
          <span className={styles.skylink}>At Skylink Datacenter,</span> experience lightning-fast connectivity for
          seamless gaming, streaming, and real-time communication.
        </p>
      </div>
      
      <div className={styles.pingDiv}>
        <h1 className={styles.heading2}>TEST YOUR PING!</h1>
        <div className={styles.pingMeterDiv}>
          <div className={styles.pingMeter}>
            <div className={styles.pingMeterProgress}/>
          </div>
          <div className={styles.pingMeterLabels}>
            <p className={styles.pings}>+200ms</p>
            <p className={styles.pings}>100ms</p>
            <p className={styles.pings}>0ms</p>
          </div>
        </div>
        <button className={styles.butt}>Start the test</button>
        <h1 className={styles.pingResult}>78<span className={styles.ms}>MS</span></h1>
      </div>
    </div>
  );
}