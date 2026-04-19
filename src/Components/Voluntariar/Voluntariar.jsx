import styles from "./Voluntariar.module.scss";
import cardImg from "../../assets/voluntarios1.jpg";
import footerImg from "../../assets/footer1.jpg";

export default function Voluntariar() {
  return (
    <section className={styles.container}>
      <div className={styles.texto}>
        <h2>
          Durante <span>enchentes</span>, muitas pessoas querem ajudar...
        </h2>
        <p>
          Mas não sabem <span>onde ir</span> ou <span>o que fazer</span>.
        </p>
      </div>

      <div className={styles.card}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${cardImg})` }}
        ></div>

        <div className={styles.content}>
          <p>
            Cadastre-se como <span>voluntário</span> e seja direcionado para onde sua ajuda fará diferença real.
          </p>

          <button>Quero Ajudar</button>
        </div>
      </div>

     
    </section>
  );
}