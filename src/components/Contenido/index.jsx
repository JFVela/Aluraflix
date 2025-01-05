import React, { useEffect, useState } from "react";
import styles from "./Contenido.module.css";
import Grid from "@mui/material/Grid";
import Carta from "./../Card";
import Etiqueta from "./../Etiqueta";
import Container from "@mui/material/Container";
import { fetchVideos } from "../../services/dbService"; // Importar el servicio

const Contenido = (props) => {
  let { curso, color } = props;
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true);
      try {
        const data = await fetchVideos(); // Usar el servicio
        setVideos(data);
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  const videosFiltrados = videos.filter((video) => video.curso === curso);

  return (
    <Container
      sx={{ bgcolor: "text.primary" }}
      maxWidth="mx"
      className={styles.container}
    >
      <Etiqueta elColor={color} elTexto={curso} className={styles.etiqueta} />
      <br />
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        className={styles.contenido}
      >
        {loading ? (
          <Grid item>
            <p>Cargando videos...</p>
          </Grid>
        ) : videosFiltrados.length > 0 ? (
          videosFiltrados.map((video) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={video.id}
              className={styles.gridItem}
            >
              <Carta
                curso={curso}
                color={color}
                title={video.titulo}
                videoUrl={video.url}
              />
            </Grid>
          ))
        ) : (
          <Grid item>
            <p>No hay videos disponibles para este curso.</p>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Contenido;
