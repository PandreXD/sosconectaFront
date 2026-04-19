import styles from "./Header.module.scss";
import bgHeader from "../../assets/header1.jpg";

export default function Header() {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      <div className={styles.overlay}>
        <h1>
          <span>SOS</span> Conecta
        </h1>
        <p>Conectando quem quer ajudar com quem precisa</p>
      </div>
    </header>
  );
}