import styles from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Open knowledge hub for ecological transitions</h1>
        <p>
          So much data and academic papers on ecological transitions are disseminated across the web.
          <br />
          How about aggregating them in a single place to facilitate their access?
        </p>
        <form action="post" className={styles.heroForm}>
          <input type="email" name="email" id="email" className={styles.formInput} placeholder="📧 Votre email" />
          <button type="submit" className={styles.formButton}>
            Accès anticipé
          </button>
        </form>
      </div>
      <div className={styles.heroImage}>
        <Image src="/images/heroImage.svg" height={500} width={500} />
      </div>
    </div>
  );
};

export default Hero;
