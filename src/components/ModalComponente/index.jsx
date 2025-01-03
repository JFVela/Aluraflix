// ModalComponente/index.jsx
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalComponente = ({ open, handleClose, video }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h2>Editar Video: {video?.titulo}</h2>
        <p>Editar el contenido del video aquí...</p>
        <Button onClick={handleClose}>Cerrar</Button>
      </Box>
    </Modal>
  );
};

export default ModalComponente;
