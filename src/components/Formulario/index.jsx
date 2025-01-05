import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import Boton from "../Boton";
import styles from "./Formulario.module.css";
import { useState } from "react";

// Cambiar a PascalCase
const GrupoDeBotones = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Formulario = () => {
  const [age, setAge] = useState(""); // Mover la declaración de useState dentro de la función

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const commonStyles = {
    color: "white",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "3px solid white"
      },
      "&:hover fieldset": {
        borderColor: "var(--azulado)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--azulado)",
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "white",
      opacity: 0.7,
    },
  };

  return (
    <form className={styles.FormularioCss}>
      <TextField
        sx={commonStyles}
        id="tituloId"
        label="Titulo"
        placeholder="Ingrese el título"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControl sx={commonStyles} fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={commonStyles}
        id="videoId"
        label="URL del Video"
        placeholder="Ingrese la URL del video"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        sx={{
          ...commonStyles,
          width: "500px",
        }}
        id="descripcionId"
        label="Descripcion del video"
        placeholder="Descripción (máximo 4 filas)"
        variant="outlined"
        multiline
        rows={4}
        margin="normal"
      />
      <GrupoDeBotones>
        <Boton titulo="Guardar" />
        <Boton titulo="Limpiar" />
      </GrupoDeBotones>
    </form>
  );
};

export default Formulario;
