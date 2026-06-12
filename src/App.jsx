import { useRoutes } from "react-router-dom";

const routes = [{ path: "/", element: <></> }];

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <div className="bg-gray-300">hello</div>
      {router}
    </>
  );
}

export default App;
