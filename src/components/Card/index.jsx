import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Carta = () => {
  const [videos, setVideos] = useState([]);

  // Función para obtener los datos de la API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://api-alura-flix-gold.vercel.app/videos"
        );
        const data = await response.json();

        // Filtrar solo los IDs 1, 2 y 3
        const filteredVideos = data.filter(
          (video) => video.id === 1 || video.id === 2 || video.id === 3
        );
        setVideos(filteredVideos);
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };

    fetchVideos();
  }, []);

  // Función para renderizar cada tarjeta
  const renderCard = (title, videoUrl) => (
    <Card
      className={styles.carta}
      sx={{ borderRadius: "16px", width: "100%", maxWidth: 420 }}
    >
      <div className={styles.videoWrapper}>
        <iframe
          width="100%"
          height="260"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      className={styles.contenido}
    >
      {videos.map((video) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={video.id}
          className={styles.gridItem}
        >
          {renderCard(video.titulo, video.url)}
        </Grid>
      ))}
    </Grid>
  );
};

export default Carta;
