import styles from "./hero.module.css";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

const Hero = () => {
  const [email, setEmail] = useState("example@email.com");
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const postEmail = async (e) => {
    e.preventDefault();

    if (email === "" || email === "example@email.com") return;

    try {
      const response = await axios.post(`http://api.ecolometrics.org/earlyAccess?email=${email}`);
      setEmailSuccess(<p className={styles.success}>Inscription réussie !</p>);
    } catch (error) {
      setEmailSuccess(<p className={styles.error}>Vous êtes déjà inscrit</p>);
    }
  };

  const [emailSuccess, setEmailSuccess] = useState(
    <p className={styles.normal}>Inscrivez-vous à notre accès anticipé</p>
  );

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h1>La plateforme de savoirs liés aux transitions écologiques</h1>
        <p>
          D'innombrables données et articles universitaires traitant des transitions écologiques sont disséminés sur le
          web
          <br />
          Pourquoi ne pas les regrouper en un seul endroit pour en faciliter l'accès ?
        </p>
        <form action="post" className={styles.form} onSubmit={postEmail}>
          <label htmlFor="email" className={styles.hiddenLabel}>
            Adresse email
          </label>
          <input
            onChange={changeEmail}
            type="email"
            name="email"
            id="email"
            className={styles.formInput}
            placeholder={email}
          />
          <button type="submit" className={styles.formButton}>
            Accès anticipé
          </button>
        </form>
        {emailSuccess}
      </div>
      <div className={styles.image}>
        <Image src="/images/heroImage.svg" height={500} width={500} />
      </div>
    </div>
  );
};

export default Hero;
