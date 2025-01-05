import { Container } from "@mui/material";
import Formulario from "../../components/Formulario";
import styled from "styled-components";
import { useVideoContext } from "../../context/videoContext";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

// Estilo base para los títulos
const EstiloTitulo = styled.div`
  font-family: "Roboto", sans-serif;
  color: white;
  text-align: center;
  text-decoration-skip-ink: none;
  margin: 0;
`;

const ContenidoTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 45px;
`;

const TituloNuevo = styled(EstiloTitulo)`
  font-size: 60px;
  font-weight: 900;
  line-height: 70.31px;
`;

const SubtituloNuevo = styled(EstiloTitulo)`
  font-size: 20px;
  font-weight: 400;
  line-height: 23.44px;
`;

function NuevoVideo() {
  const { setVideoId } = useVideoContext();
  useEffect(() => {
    return () => {
      // Limpiar el videoId cuando el componente se desmonte
      setVideoId(uuidv4());
    };
  }, [setVideoId]);
  return (
    <>
      <Container sx={{ bgcolor: "text.primary", padding: "45px" }} maxWidth="">
        <ContenidoTexto>
          <TituloNuevo>NUEVO VIDEO</TituloNuevo>
          <SubtituloNuevo>
            Complete el formulario para crear una nueva tarjeta de video
          </SubtituloNuevo>
        </ContenidoTexto>
        <Formulario accion="NuevoVideo" />
      </Container>
    </>
  );
}
export default NuevoVideo;
