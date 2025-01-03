import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Pie from "./components/Pie";
import Contenido from "./components/Contenido";

function App() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCursos = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api-alura-flix-gold.vercel.app/cursos");
        const data = await response.json();
        setCursos(data); // Guarda los cursos en el estado
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      {loading ? (
        <p>Cargando cursos...</p>
      ) : (
        cursos.map((curso) => (
          <Contenido key={curso.id} curso={curso.titulo} color={curso.color} />
        ))
      )}
      <Pie />
    </>
  );
}

export default App;
