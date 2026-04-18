import styles from "./Footer.module.scss";
import bg from "../../assets/footer1.jpg";

export default function Footer() {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2>
        Seja parte da solução.
        <br />
        <span>Seja um voluntário.</span>
      </h2>
    </footer>
  );
}