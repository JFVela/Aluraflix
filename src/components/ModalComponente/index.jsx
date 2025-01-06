import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Formulario from "../Formulario";
import styled from "styled-components";
import { Button, IconButton, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { GrupoDeBotones } from "../Formulario";
import { deleteVideo } from "../../services/DeleteVideo"; // Asegúrate de importar la función

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  minWidth: 280,
  maxHeight: "80vh",
  bgcolor: "#03122F",
  color: "#2271D1",
  boxShadow: 24,
  p: 4,
  border: "1px solid #2271D1",
  borderRadius: "16px",
  overflowY: "auto",
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const TituloModal = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 60px;
  font-weight: 900;
  color: #2271d1;
  margin: 0;
`;

const ModalComponente = ({
  open,
  handleClose,
  accion,
  video,
  handleEliminar,
}) => {
  const handleDeleteClick = async () => {
    try {
      await deleteVideo(video.id); // Llama la función deleteVideo con el id del video
      handleEliminar(video.id); // Llama a la función pasada como prop para actualizar el estado en el componente superior
      handleClose(); // Cierra el modal
    } catch (error) {
      console.error("Error al eliminar el video", error);
    }
    window.location.reload(true);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {accion === "editar" ? (
          <>
            <Header>
              <TituloModal>Editar Card:</TituloModal>
              <IconButton onClick={handleClose}>
                <HighlightOffIcon
                  fontSize="large"
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#ff0000",
                    },
                  }}
                />
              </IconButton>
            </Header>
            <Formulario accion="ModificarVideo" />
          </>
        ) : (
          <>
            <TituloModal style={{ color: "red" }}>Eliminar Card:</TituloModal>
            <Typography variant="h6" id="confirm-eliminar-video">
              ¿Estás seguro de que deseas eliminar este video?
            </Typography>
            <br />
            <GrupoDeBotones>
              <Button
                color="info"
                variant="contained"
                onClick={handleDeleteClick}
              >
                Eliminar
              </Button>
              <Button color="warning" variant="contained" onClick={handleClose}>
                Cancelar
              </Button>
            </GrupoDeBotones>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ModalComponente;
