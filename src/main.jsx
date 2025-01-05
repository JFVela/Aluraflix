import React from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./Routes";
import { VideoProvider } from "./context/videoContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VideoProvider>
      <AppRoutes />
    </VideoProvider>
  </React.StrictMode>
);
