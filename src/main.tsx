import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app-file.tsx";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
