// services/DeleteVideo.js

import axios from 'axios';

export const deleteVideo = async (videoId) => {
  try {
    const response = await axios.delete(`https://api-alura-flix-gold.vercel.app/videos/${videoId}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el video:", error);
    throw error;
  }
};
