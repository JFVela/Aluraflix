import React from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import Logo from "/img/Logo.png";
import styles from "./Header.module.css";
import Boton from "../Boton";

const Header = () => {
  const navigate = useNavigate(); // Inicializa el hook

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <section className={styles.logoContenido}>
          <a className={styles.logoImagen} onClick={() => navigate("/")}>
            <img src={Logo} alt="Aluraflix" />
          </a>
        </section>
        <div className={styles.buttonsContenido}>
          <Boton titulo="Home" onClick={() => navigate("/")} />
          {/* Redirige a "/" */}
          <Boton
            titulo="Nuevo video"
            onClick={() => navigate("/nuevo-video")}
          />
          {/* Redirige a "/nuevo-video" */}
        </div>
      </div>
    </header>
  );
};

export default Header;
