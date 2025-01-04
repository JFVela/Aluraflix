import React, { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import ModalComponente from "../ModalComponente";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import styles from "./Card.module.css";

const Carta = ({ title, videoUrl, color }) => {
  const [openModal, setOpenModal] = useState(false); // Estado para el Modal
  const [selectedVideo, setSelectedVideo] = useState(null); // Estado para el video seleccionado
  const [accion, setAccion] = useState(""); // Estado para definir la acción (editar o eliminar)

  // Función para abrir el modal y pasar el video seleccionado
  const handleOpenModal = (accionTipo) => {
    setSelectedVideo({ titulo: title, url: videoUrl, color }); // Guarda el video seleccionado
    setAccion(accionTipo); // Establece la acción (editar o eliminar)
    setOpenModal(true); // Abre el modal
  };

  // Función para cerrar el modal
  const handleCloseModal = () => setOpenModal(false);

  // Función para extraer el ID del video de la URL de YouTube
  const getYouTubeVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;

  return (
    <Card
      className={styles.carta}
      style={{
        border: `5px solid ${color}`,
        boxShadow: `inset 0px 0px 15px 0px ${color}`,
      }}
      sx={{ borderRadius: "16px", width: "100%", maxWidth: 420 }}
    >
      <div style={{ backgroundColor: color }}>
        {thumbnailUrl ? (
          <CardMedia
            component="img"
            height="260"
            image={thumbnailUrl}
            alt={title}
            style={{
              borderBottom: `5px solid ${color}`
            }}
            className={styles.imagen}
          />
        ) : (
          <div
            style={{
              height: 260,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No se pudo cargar la miniatura
          </div>
        )}
      </div>
      <CardActions sx={{ bgcolor: "text.primary" }} className={styles.botones}>
        <Button
          style={{ color: "#fff" }}
          className={styles.boton}
          size="small"
          onClick={() => handleOpenModal("eliminar")} // Llama a la función para abrir el modal con la acción "eliminar"
        >
          <MdOutlineDeleteForever />
          Eliminar
        </Button>
        <Button
          style={{ color: "#fff" }}
          className={styles.boton}
          size="small"
          onClick={() => handleOpenModal("editar")} // Llama a la función para abrir el modal con la acción "editar"
        >
          <CiEdit />
          Editar
        </Button>
      </CardActions>

      {/* Modal */}
      <ModalComponente
        open={openModal} // Pasa el estado de apertura
        handleClose={handleCloseModal} // Pasa la función de cierre
        video={selectedVideo} // Pasa el video seleccionado
        accion={accion} // Pasa la acción (editar o eliminar)
      />
    </Card>
  );
};

export default Carta;
