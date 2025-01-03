import styles from "./Pie.module.css";
import logo from "/img/Logo.png";

const Pie = () => {
  return (
    <footer className={styles.pie}>
      <img className={styles.imagen} src={logo} alt="Aluralix" />
    </footer>
  );
};

export default Pie;
