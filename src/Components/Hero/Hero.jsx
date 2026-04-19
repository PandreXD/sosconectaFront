import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h2>Ajude quem precisa</h2>
      <p>Conectando voluntários a locais de ajuda</p>
    </section>
  );
}