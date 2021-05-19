import styles from "./roadmap.module.css";
import Image from "next/image";

const Roadmap = () => {
  return (
    <section className={styles.section}>
      <h2>Planning de sorties</h2>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.icon}>
            Version <br /> Alpha
          </div>
          <div className={styles.details}>
            <h3>Août 2021</h3>
            <p>
              Créez vos graphiques et dashboards personnalisés à partir d'un sous-ensemble de données <br />
              Accédez aux premières bases de données ajoutées par les contributeurs d'Ecolometrics
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={`${styles.icon} ${styles.greenIcon}`}>
            Version <br /> Beta
          </div>
          <div className={styles.details}>
            <h3>Fin 2021</h3>
            <p>
              Recherchez des articles académiques et accédez à leurs résumés générés par du ML
              <br />
              Découvrez des méta-analyses d'évaluation d'impact de politiques publiques environnementales
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={`${styles.icon} ${styles.blueIcon}`}>
            Version <br /> Officielle
          </div>
          <div className={styles.details}>
            <h3>Mi-2022</h3>
            <p>Accédez à la première version publique stable d'Ecolometrics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
