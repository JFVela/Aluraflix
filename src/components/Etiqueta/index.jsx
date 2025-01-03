import styles from "./Etiqueta.module.css";

const Etiqueta = (props) => {
  let { elColor, elTexto } = props;
  if (!elTexto || !elColor) {
    elTexto = "FRONTEND";
    elColor = "#6BD1FF";
  }
  // console.log(elColor, elTexto); 
  return <span className={styles.Etiqueta} style={{ background: elColor }}>{elTexto}</span>;
};

export default Etiqueta;