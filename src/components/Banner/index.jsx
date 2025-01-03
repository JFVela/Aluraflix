import Etiqueta from "../Etiqueta";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <section className={styles.seccion}>
        <Etiqueta />
        <h1 className={styles.title}>Challenge React</h1>
        <p className={styles.p}>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </section>
      <div className={styles.video}>
        <iframe
          src="https://www.youtube.com/embed/ov7vA5HFe6w?si=krAgzxVGWrdMxOEJ&amp;start=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Banner;
