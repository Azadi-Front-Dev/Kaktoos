import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";

const routes = [{ path: "/", element: <Home /> }];

function App() {
  const router = useRoutes(routes);
  return <>{router}</>;
}

export default App;
