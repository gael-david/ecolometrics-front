import styles from "./features.module.css";
import Link from "next/link";
import Image from "next/image";

const Features = () => {
  return (
    <div className={styles.features}>
      <h2>Our Project</h2>
      <div className={styles.featuresList}>
        <div className={styles.featureItem}>
          <div className={styles.featureImage}>
            <Image src="/images/features/graph.svg" height={500} width={600} />
          </div>
          <div className={styles.featureDetails}>
            <h3>Personal graphs and dashboards</h3>
            <p>Create, save and share your own graphs & dashboards of environmental open data</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureImage}>
            <Image src="/images/features/db.svg" height={500} width={600} />
          </div>
          <div className={styles.featureDetails}>
            <h3>Open knowledge databases</h3>
            <p>Contributor users will be able to signal a database available on the web and add it to Ecolometrics</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureImage}>
            <Image src="/images/features/papers.svg" height={500} width={600} />
          </div>
          <div className={styles.featureDetails}>
            <h3>Academic papers synthesis</h3>
            <p>Search academic papers on specific environmental-related topics and access their ML-fueled synthesis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
