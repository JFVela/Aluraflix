// Obtener los Cursos
export const fetchCursos = async () => {
  try {
    const response = await fetch(
      "https://api-alura-flix-gold.vercel.app/cursos"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los cursos:", error);
    throw error;
  }
};

//Obtener los videos
export const fetchVideos = async () => {
  try {
    const response = await fetch(
      "https://api-alura-flix-gold.vercel.app/videos"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los videos:", error);
    throw error;
  }
};
