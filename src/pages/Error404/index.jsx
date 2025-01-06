import React from "react";
import {
  Button,
  Typography,
  Container,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled, keyframes } from "@mui/system";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";

const blinkingCursor = keyframes`
  0% {opacity: 0;}
  50% {opacity: 1;}
  100% {opacity: 0;}
`;

const RootContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "63.4vh",  // Cambiado a 100vh para ocupar toda la altura de la ventana
  width: "100vw",  // Asegura que ocupe todo el ancho de la ventana
  margin: 0,
  padding: theme.spacing(3),
  boxSizing: "border-box",
  textAlign: "center",
  backgroundColor: "#1e1e1e",
  color: "#d4d4d4",
  maxWidth: "100%",  // Cambiado a 100% para asegurar que no haya límite de ancho
  overflow: "hidden",  // Previene el scroll horizontal
}));

const CodeBlock = styled(Box)(({ theme }) => ({
  fontFamily: "monospace",
  backgroundColor: "#2d2d2d",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(4),
  position: "relative",
  width: "100%",  // Asegura que ocupe todo el ancho disponible
  maxWidth: "600px",  // Limita el ancho máximo para mejor legibilidad
  overflow: "auto",
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: "#ce9178",
  marginBottom: theme.spacing(1),
}));

const Cursor = styled("span")({
  borderLeft: "2px solid #d4d4d4",
  animation: `${blinkingCursor} 0.7s infinite`,
  paddingRight: "3px",
});

const FloatingIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  animation: "float 3s ease-in-out infinite",
  "@keyframes float": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-20px)" },
  },
}));

export default function Custom404() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <RootContainer disableGutters maxWidth={false}>
      <CodeBlock>
        <ErrorMessage variant={isMobile ? "h5" : "h4"}>
          Error 404: Page not found
          <Cursor />
        </ErrorMessage>
      </CodeBlock>
      <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
        No te preocupes, incluso los mejores desarrolladores cometen errores
      </Typography>
      <Typography variant={isMobile ? "body2" : "body1"} paragraph>
        La página que buscas se ha movido o no existe. ¿Quizás es hora de
        depurar?
      </Typography>
      <FloatingIcon style={{ left: "10%", top: "20%" }}>
        <BugReportIcon style={{ fontSize: 40, opacity: 0.7 }} />
      </FloatingIcon>
      <FloatingIcon style={{ right: "10%", bottom: "20%" }}>
        <CodeIcon style={{ fontSize: 40, opacity: 0.7 }} />
      </FloatingIcon>
    </RootContainer>
  );
}

