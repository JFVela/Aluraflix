import styles from "./Card.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // Importamos Grid para la disposición responsiva
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import foto from "./lima.jpg";

const Carta = () => {
  const renderCard = (title) => (
    <Card className={styles.carta} sx={{ borderRadius: "16px", maxWidth: 400 }}>
      <CardMedia
        className={styles.imagen}
        sx={{ height: 260 }}
        image={foto}
        title={title}
      />
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
    <Grid container spacing={3} className={styles.contenido}>
      <Grid item xs={12} sm={6} md={3}>
        {renderCard("Lima 1")}
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        {renderCard("Lima 2")}
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        {renderCard("Lima 3")}
      </Grid>

    </Grid>
  );
};

export default Carta;
