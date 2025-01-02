import React, { useState } from "react";
import Logo from "./Logo.png";
import styles from "./Header.module.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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

  //Muestra que boton se esta seleccionando
  console.log(selectedButton);

  return (
    <header className={styles.header}>
      <section className={styles.logoContenido}>
        <img src={Logo} alt="Aluraflix" />
      </section>
      <div>
        <Stack direction="row" spacing={3}>
          {renderButton("Home", "home")}
          {renderButton("Nuevo Video", "nuevo")}
        </Stack>
      </div>
    </header>
  );
};

export default Header;
