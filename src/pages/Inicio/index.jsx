import { useEffect, useState } from "react";
import Contenido from "../../components/Contenido";
import Banner from "../../components/Banner";
import { fetchCursos } from "../../services/dbService"; // Importar el servicio

function Inicio() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCursos = async () => {
      setLoading(true);
      try {
        const data = await fetchCursos(); // Usar el servicio
        setCursos(data);
      } catch (error) {
        console.error("Error al cargar los cursos", error);
      } finally {
        setLoading(false);
      }
    };

    loadCursos();
  }, []);

  return (
    <>
      <Banner />
      {loading ? (
        <p>Cargando cursos...</p>
      ) : (
        cursos.map((curso) => (
          <Contenido key={curso.id} curso={curso.titulo} color={curso.color} />
        ))
      )}
    </>
  );
}

export default Inicio;
