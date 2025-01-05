import React, { useState, useEffect } from "react";
import {
  Alert,
  AlertTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import Boton from "../Boton";
import styles from "./Formulario.module.css";
import { fetchCursos, postVideo } from "../../services/dbService"; // Importar el servicio

const GrupoDeBotones = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Formulario = ({ accion }) => {
  const [formValues, setFormValues] = useState({
    titulo: "",
    video: "",
    descripcion: "",
    curso: "",
  });

  const [formErrors, setFormErrors] = useState({
    titulo: { error: false, message: "El título no puede estar vacío" },
    video: { error: false, message: "La URL del video no puede estar vacía" },
    descripcion: {
      error: false,
      message: "La descripción no puede estar vacía",
    },
  });

  const [showAlert, setShowAlert] = useState(false);
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const loadCursos = async () => {
      try {
        const data = await fetchCursos(); // Usar el servicio
        setCursos(data);
      } catch (error) {
        console.error("Error fetching cursos:", error);
      }
    };

    loadCursos();
  }, []);

  const isFormValid = () =>
    Object.values(formErrors).every((error) => !error.error) &&
    Object.values(formValues).every(
      (value) => typeof value === "string" && value.trim() !== ""
    );

  const handleBlur = (field, value) => {
    validateField(field, value);
  };

  const validateField = (field, value) => {
    let error = false;
    let message = "";

    if (value.trim() === "") {
      error = true;
      message = `El campo ${field} no puede estar vacío`;
    }

    setFormErrors((prev) => ({
      ...prev,
      [field]: { error, message },
    }));
  };

  const handleChange = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));

    validateField(field, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmpty = Object.values(formValues).some(
      (value) => typeof value !== "string" || value.trim() === ""
    );
    if (isEmpty) {
      setShowAlert(true); // Mostrar alerta
    } else {
      setShowAlert(false); // Ocultar alerta

      // Usando switch en lugar de if
      switch (accion) {
        case "NuevoVideo":
          console.log("Video Nuevo:", formValues);
          postVideo(formValues); // Llamada a la función POST
          break;
        case "ModificarVideo":
          console.log("Video Modificado:", formValues);
          break;
        default:
          console.log("Acción desconocida");
          break;
      }
    }
  };

  const handleClear = (event) => {
    event.preventDefault();
    setFormValues({
      titulo: "",
      video: "",
      descripcion: "",
      curso: "",
    });

    setFormErrors({
      titulo: { error: false, message: "El título no puede estar vacío" },
      video: { error: false, message: "La URL del video no puede estar vacía" },
      descripcion: {
        error: false,
        message: "La descripción no puede estar vacía",
      },
    });
  };

  const commonStyles = {
    color: "white",
    "& .MuiOutlinedInput-root": {
      "& fieldset": { border: "3px solid white" },
      "&:hover fieldset": { borderColor: "var(--azulado)" },
      "&.Mui-focused fieldset": { borderColor: "var(--azulado)" },
    },
    "& .MuiInputLabel-root": { color: "white" },
    "& .MuiInputLabel-root.Mui-focused": { color: "white" },
    "& .MuiOutlinedInput-input": { color: "white" },
    "& .MuiInputBase-input::placeholder": { color: "white", opacity: 0.7 },
  };

  return (
    <form
      autoComplete="off"
      className={styles.FormularioCss}
      onSubmit={handleSubmit}
    >
      <TextField
        sx={commonStyles}
        id="tituloId"
        label="Título"
        placeholder="Ingrese el título"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formValues.titulo}
        onChange={(e) => handleChange("titulo", e.target.value)}
        onBlur={(e) => handleBlur("titulo", e.target.value)}
        error={formErrors.titulo.error}
        helperText={formErrors.titulo.error ? formErrors.titulo.message : ""}
      />

      <FormControl sx={commonStyles} fullWidth>
        <InputLabel id="curso-label">Curso</InputLabel>
        <Select
          labelId="curso-label"
          id="curso"
          value={formValues.curso}
          onChange={(e) => handleChange("curso", e.target.value)}
        >
          <MenuItem value="">Selecciona un curso</MenuItem>
          {cursos.map((curso) => (
            <MenuItem key={curso.id} value={curso.titulo}>
              {curso.titulo}
            </MenuItem>
          ))}
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
        value={formValues.video}
        onChange={(e) => handleChange("video", e.target.value)}
        onBlur={(e) => handleBlur("video", e.target.value)}
        error={formErrors.video.error}
        helperText={formErrors.video.error ? formErrors.video.message : ""}
      />

      <TextField
        sx={{ ...commonStyles }}
        id="descripcionId"
        label="Descripción del video"
        placeholder="Descripción (máximo 4 filas)"
        variant="outlined"
        multiline
        rows={4}
        margin="normal"
        value={formValues.descripcion}
        onChange={(e) => handleChange("descripcion", e.target.value)}
        onBlur={(e) => handleBlur("descripcion", e.target.value)}
        error={formErrors.descripcion.error}
        helperText={
          formErrors.descripcion.error ? formErrors.descripcion.message : ""
        }
      />

      {showAlert && (
        <Alert severity="warning">
          <AlertTitle>Advertencia</AlertTitle>
          Debes llenar todos los campos antes de guardar.
        </Alert>
      )}

      <GrupoDeBotones>
        <Boton
          titulo="Guardar"
          onClick={handleSubmit}
          disabled={!isFormValid()}
        />
        <Boton titulo="Limpiar" onClick={handleClear} />
      </GrupoDeBotones>
    </form>
  );
};

export default Formulario;
