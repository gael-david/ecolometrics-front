import styles from "./footer.module.scss";

const Footer = () => (
  <>
    <footer className={styles.footer}>
      <p>©Ecolometrics - 2021</p>
      <p>
        Powered by the <span className={styles.logo}>David Bros</span>
      </p>
    </footer>
  </>
);

export default Footer;
