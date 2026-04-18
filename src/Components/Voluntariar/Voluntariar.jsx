import { useNavigate } from "react-router-dom";
import styles from "./Voluntariar.module.scss";
import cardImage from "../../assets/voluntarios1.jpg";

export default function Voluntariar() {
  const navigate = useNavigate(); // 👈 fica AQUI dentro

  return (
    <section className={styles.section}>
      
      <article className={styles.card}>
        
        <img src={cardImage} alt="Voluntários" />

        <div className={styles.content}>
          <h2>Quero me voluntariar</h2>

          <p>
            Cadastre-se como voluntário e ajude quem precisa.
          </p>

          {/* 👇 SÓ O BOTÃO MUDA */}
          <button onClick={() => navigate("/ajudar")}>
            Quero Ajudar
          </button>

        </div>
      </article>

    </section>
  );
}