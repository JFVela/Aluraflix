import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Formulario from "../Formulario";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  minWidth: 280,
  maxHeight: "80vh", // Establece una altura máxima del 80% de la pantalla
  bgcolor: "#03122F",
  color: "#2271D1",
  boxShadow: 24,
  p: 4,
  border: "1px solid #2271D1",
  borderRadius: "16px",
  overflowY: "auto", // Permite el desplazamiento vertical
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

const ModalComponente = ({ open, handleClose, accion }) => {
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
          <p>Hola</p>
        )}
      </Box>
    </Modal>
  );
};

export default ModalComponente;
