import styles from "./team.module.css";
import Image from "next/image";

const Team = () => {
  return (
    <section className={styles.section} id="team">
      <h2>L'équipe</h2>
      <div className={styles.list}>
        <div className={styles.item}>
          <img src="/images/team/profileYD.png" className={styles.image} />
          <div className={styles.details}>
            <h3>Yann David</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src="/images/team/profileGD.png" className={`${styles.image} ${styles.blueBG}`} />
          <div className={styles.details}>
            <h3>Gaël David</h3>
          </div>
        </div>
      </div>
      <p>
        Si rejoindre le projet vous intéresse,{" "}
        <a href="mailto:ecolometricsapp@gmail.com" className={styles.anchor}>
          contactez-nous!
        </a>
      </p>
    </section>
  );
};

export default Team;
