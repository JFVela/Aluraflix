import React, { useState } from "react";
import Logo from "/img/Logo.png";
import styles from "./Header.module.css";
import Button from "@mui/material/Button";

const Header = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton((prevButton) => (prevButton === button ? null : button));
  };

  const renderButton = (label, buttonKey) => (
    <Button
      variant="outlined"
      className={`${styles.button} ${
        selectedButton === buttonKey ? styles.active : ""
      }`}
      onClick={() => handleButtonClick(buttonKey)}
    >
      {label}
    </Button>
  );

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <section className={styles.logoContenido}>
          <img src={Logo} alt="Aluraflix" />
        </section>
        <div className={styles.buttonsContenido}>
          {renderButton("Home", "home")}
          {renderButton("Nuevo Video", "nuevo")}
        </div>
      </div>
    </header>
  );
};

export default Header;
