import { createRoot } from "react-dom/client";

import { ScreenVerifierProvider } from "./Contexts/useScreenVerifier.tsx";
import { ShowMenuProvider } from "./Contexts/useShowMenu.tsx";

import App from "./Components/App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ScreenVerifierProvider>
    <ShowMenuProvider>
      <App />
    </ShowMenuProvider>
  </ScreenVerifierProvider>,
);
