import React from "react";
import styles from "./Card.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Carta = ({ title, videoUrl, color }) => {
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
        <Button style={{ color: "#fff" }} className={styles.boton} size="small">
          <MdOutlineDeleteForever />
          Borrar
        </Button>
        <Button style={{ color: "#fff" }} className={styles.boton} size="small">
          <CiEdit />
          Editar
        </Button>
      </CardActions>
    </Card>
  );
};

export default Carta;
