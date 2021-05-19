import styles from "./features.module.css";
import Link from "next/link";
import Image from "next/image";

const Features = () => {
  return (
    <section className={styles.section}>
      <h2>Le projet Ecolometrics</h2>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.image}>
            <Image src="/images/features/graph.svg" height={500} width={600} />
          </div>
          <div className={styles.details}>
            <h3>Graphiques et dashboards personnalisés</h3>
            <p>
              Créez, enregistrez et partagez vos propres graphiques et tableaux alimentés par des données
              environnementales en accès libre
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.image}>
            <Image src="/images/features/papers.svg" height={500} width={600} />
          </div>
          <div className={styles.details}>
            <h3>Synthèse d'articles académiques</h3>
            <p>
              Recherchez des articles universitaires liés aux transitions écologiques et accédez à leur synthèse générée
              par des algorithmes de Machine Learning
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.image}>
            <Image src="/images/features/db.svg" height={500} width={600} />
          </div>
          <div className={styles.details}>
            <h3>Bases de données open knowledge</h3>
            <p>
              Signaler une base de données environnementale disponible sur le web pour l'ajouter à l'écosystème
              Ecolometrics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
