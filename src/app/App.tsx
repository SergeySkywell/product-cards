import { HashRouter } from "react-router-dom";
import { Header } from "../widgets/Header";
import { AppRoutes } from "./router/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Header />
        <AppRoutes />
      </Provider>
    </HashRouter>
  );
}

export default App;
