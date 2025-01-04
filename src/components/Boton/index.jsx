import styled from "styled-components";

const BotonDinamico = styled.button`
  display: flex;
  align-items: center; /* Centra verticalmente */
  justify-content: center; /* Centra horizontalmente */
  border-color: var(--blanco);
  color: var(--blanco);
  background-color: transparent;
  padding: 10px 20px;
  width: 190px;
  height: 50px;
  min-width: auto;
  border-radius: 15px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
  font-weight: 900;
  border: 5px solid var(--blanco);
  text-align: center;

  &:hover {
    background-color: var(--azulOscuro);
    color: var(--azulado);
    border-color: var(--azulado);
    box-shadow: inset 0 0 10px 0 var(--azulado);
  }
`;

const Boton = ({ titulo }) => {
  return (
    <BotonDinamico>
      <span>{titulo}</span>
    </BotonDinamico>
  );
};

export default Boton;
