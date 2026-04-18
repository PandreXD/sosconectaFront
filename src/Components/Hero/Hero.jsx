import styles from "./Hero.module.scss";
import bgImage from "../../assets/header1.jpg";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <h2>
          Durante <span>enchentes</span>, muitas pessoas querem ajudar...
        </h2>

        <p>
          Mas não sabem <span>onde ir</span> ou <span>o que fazer</span>.
        </p>
      </div>
    </section>
  );
}