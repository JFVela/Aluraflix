// Obtener los Cursos
export const fetchCursos = async () => {
  try {
    //simulamos retardo de 1 segundos
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
    //simulamos retardo de 1 segundos
    await new Promise((resolve) => setTimeout(resolve, 1000));
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

//Metodo Post para videos
export const postVideo = async (videoData) => {
  try {
    const response = await fetch(
      "https://api-alura-flix-gold.vercel.app/videos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videoData),
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error al enviar el video:", error);
    throw error;
  }
};
