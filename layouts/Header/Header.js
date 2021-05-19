import styles from "./header.module.scss";
import Link from "next/link";

const Header = () => (
  <>
    <header className={styles.appHeader}>
      <Link href="/">
        <a className={styles.navBrand}>
          <img src="/images/ecologo.svg" className={`${styles.navIcon}`} />
          <p className={styles.navText}>
            ecolo<em>metrics</em>
          </p>
        </a>
      </Link>
      <div className={styles.navBar}>
        <div className={styles.navButtons}>
          <Link href="/about">
            <a>À propos</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </header>
  </>
);

export default Header;
