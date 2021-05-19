import Image from "next/image";
import styles from "../styles/Coming.module.css";

export default function Coming() {
  return (
    <div className={styles.container}>
      <Image src="/ecologo.svg" height={150} width={150} />
      <h1>
        Welcome to <em>Ecolometrics!</em>
      </h1>
      <h2 className={styles.description}>Open knowledge hub on ecological transitions</h2>
      <p className={styles.update}>⚡ Coming soon.</p>
    </div>
  );
}
