import Boton from "../Boton";
import styled from "styled-components";

// Cambiar a PascalCase
const GrupoDeBotones = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Formulario = () => {
  return (
    <form action="">
      <p>Hola</p>
      {/* Usar PascalCase */}
      <GrupoDeBotones>
        <Boton titulo="Guardar" />
        <Boton titulo="Limpiar" />
      </GrupoDeBotones>
    </form>
  );
};

export default Formulario;
