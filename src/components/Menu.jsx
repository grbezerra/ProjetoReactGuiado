import { Link } from "react-router-dom";

import styles from "../styles/components/menu.module.css";

export function Menu() {
  return (
        <ul className={styles.menuContainer}>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/">
        ●HOME●
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/sobre">
        ●SOBRE●
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/portfolio">
        ●PORTFÓLIO●
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/contato">
        ●CONTATO●
        </Link>
      </li>
    </ul>
    
  );
}
