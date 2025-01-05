// Método POST
export const postVideo = async (formValues) => {
    try {
      const response = await fetch(
        "https://api-alura-flix-gold.vercel.app/videos",
        {
          method: "POST",
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
  
      if (response.ok) {
        const data = await response.json();
        console.log("Video subido exitosamente:", data);
      } else {
        console.error("Error al subir el video:", response.statusText);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };