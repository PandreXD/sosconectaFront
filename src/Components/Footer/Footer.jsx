import styles from "./Footer.module.scss";
import footerImg from "../../assets/footer1.jpg";

export default function Footer() {
  return (
    <footer
      className={styles.banner}
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className={styles.overlay}>
        <h3>Seja parte da solução.</h3>
        <h2>Seja um voluntário.</h2>
      </div>
    </footer>
  );
}