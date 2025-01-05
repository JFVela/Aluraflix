// dbService.js

export const updateVideo = async (id, formValues) => {
  try {
    const response = await fetch(
      `https://api-alura-flix-gold.vercel.app/videos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: formValues.titulo,
          url: formValues.video,
          curso: formValues.curso,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al actualizar el video:", error);
    throw error;
  }
};
