import styles from "./roadmap.module.css";
import Image from "next/image";

const Roadmap = () => {
  return (
    <section className={styles.section}>
      <h2>Roadmap</h2>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.icon}>
            Alpha <br /> Release
          </div>
          <div className={styles.details}>
            <h3>Août 2021</h3>
            <p>
              Dashboard creation features on a subset of datasets <br />
              Merger of databases added by contributors to in-app databases
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={`${styles.icon} ${styles.greenIcon}`}>
            Beta <br /> Release
          </div>
          <div className={styles.details}>
            <h3>Late 2021</h3>
            <p>
              Inclusion of academic articles suggestions <br />
              Meta-analyses of policies impact evaluation
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={`${styles.icon} ${styles.blueIcon}`}>
            Official <br /> Release
          </div>
          <div className={styles.details}>
            <h3>Mid 2022</h3>
            <p>Stable version of Ecolometrics with all basic features</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
