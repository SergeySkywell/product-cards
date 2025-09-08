import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "../widgets/Header";
import { AppRoutes } from "./router/AppRoutes";

function App() {
  return (
    <HashRouter>
      <Header />
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
