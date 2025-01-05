import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const useVideoContext = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
  const [videoId, setVideoId] = useState(null);

  return (
    <VideoContext.Provider value={{ videoId, setVideoId }}>
      {children}
    </VideoContext.Provider>
  );
};
