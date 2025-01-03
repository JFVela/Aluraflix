import React from "react";
import styles from "./Card.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Carta = ({ title, videoUrl }) => (
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

export default Carta;
