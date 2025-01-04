import React, { useState } from "react";
import Logo from "/img/Logo.png";
import styles from "./Header.module.css";
import Boton from "../Boton";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <section className={styles.logoContenido}>
          <img src={Logo} alt="Aluraflix" />
        </section>
        <div className={styles.buttonsContenido}>
          <Boton titulo="Home"/> 
          <Boton titulo="Nuevo video" />
        </div>
      </div>
    </header>
  );
};

export default Header;
