import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>SOS Conecta</h1>
      <p>Conectando quem quer ajudar com quem precisa</p>
    </header>
  );
}