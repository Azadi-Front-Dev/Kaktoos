import { useRoutes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Login /> },

];

function App() {
  const router = useRoutes(routes);
  return <>{router}</>;
}

export default App;
