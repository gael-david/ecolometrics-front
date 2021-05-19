import styles from "./features.module.css";
import Link from "next/link";
import Image from "next/image";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.heroContent}>
        <h1>Open knowledge hub for ecological transitions</h1>
        <p>So much data and academic papers on ecological transitions are disseminated across the web.</p>
        <p> How about aggregating them in a single place to facilitate their access?</p>
        <form action="">
          <input type="email" name="" id="" />
          <button type="submit">Accès anticipé</button>
        </form>
      </div>
      <div className={styles.heroImage}>
        <Image src="/heroImage.svg" height={500} width={500} />
      </div>
    </div>
  );
};

export default Features;
