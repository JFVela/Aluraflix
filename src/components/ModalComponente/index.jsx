import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Styles from "./ModalComponente.module.css";
import Formulario from "../Formulario";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IconButton } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#03122F",
  color: "#2271D1",
  boxShadow: 24,
  p: 4,
  border: 1,
  borderRadius: "16px",
};

const ModalComponente = ({ open, handleClose, video, accion }) => {
  const handleAction = () => {
    if (accion === "editar") {
      // Lógica para editar el video
      console.log(`Editar video: ${video?.titulo}`);
    } else if (accion === "eliminar") {
      // Lógica para eliminar el video
      console.log(`Eliminar video: ${video?.titulo}`);
    }
    handleClose(); // Cerrar el modal
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} className={Styles.caja}>
        {/* <h2>{accion === "editar" ? `Editar Video: ${video?.titulo}` : `Eliminar Video: ${video?.titulo}`}</h2>
        <p>{accion === "editar" ? "Editar el contenido del video aquí..." : "¿Estás seguro de que quieres eliminar este video?"}</p>
        <Button onClick={handleAction}>
          {accion === "editar" ? "Guardar cambios" : "Confirmar eliminación"}
        </Button> */}
        <IconButton
          variant="contained"
          onClick={handleClose}
          className={Styles.botonCerrar}
        >
          <IoMdCloseCircleOutline color="white" className={Styles.cerrar} />
        </IconButton>
        <Formulario />
      </Box>
    </Modal>
  );
};

export default ModalComponente;
