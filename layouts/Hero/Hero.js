import styles from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h1>Le hub open knowledge des transitions écologiques</h1>
        <p>
          D'innombrables données et articles universitaires traitant des transitions écologiques sont disséminés sur le
          web
          <br />
          Pourquoi ne pas les regrouper en un seul endroit pour en faciliter l'accès ?
        </p>
        <form action="post" className={styles.form}>
          <input type="email" name="email" id="email" className={styles.formInput} placeholder="📧 Votre email" />
          <button type="submit" className={styles.formButton}>
            Accès anticipé
          </button>
        </form>
      </div>
      <div className={styles.image}>
        <Image src="/images/heroImage.svg" height={500} width={500} />
      </div>
    </div>
  );
};

export default Hero;
