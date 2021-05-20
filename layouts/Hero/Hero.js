import styles from "./hero.module.css";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

const Hero = () => {
  const [email, setEmail] = useState("example@email.com");
  const changeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const postEmail = async (e) => {
    if (email === "" || email === "example@email.com") return;

    e.preventDefault();

    const sendEmail = await axios.post("https://ecolometrics.herokuapp.com/earlyAccess", {
      email: email,
    });

    console.log(sendEmail);
  };

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
      </div>
      <div className={styles.image}>
        <Image src="/images/heroImage.svg" height={500} width={500} />
      </div>
    </div>
  );
};

export default Hero;
