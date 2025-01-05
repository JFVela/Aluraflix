import { Container } from "@mui/material";
import Formulario from "../../components/Formulario";
import styled from "styled-components";

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
  return (
    <>
      <Container sx={{ bgcolor: "text.primary", padding: "45px" }} maxWidth="">
        <ContenidoTexto>
          <TituloNuevo>NUEVO VIDEO</TituloNuevo>
          <SubtituloNuevo>
            Complete el formulario para crear una nueva tarjeta de video
          </SubtituloNuevo>
        </ContenidoTexto>
        <Formulario />
      </Container>
    </>
  );
}
export default NuevoVideo;
