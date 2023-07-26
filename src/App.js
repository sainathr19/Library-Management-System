import "./App.css";
import Issue from "./components/issue";
import Return from "./components/return";
import Logs from "./components/logs";
import Stats from "./components/stats";
import NavBar from "./components/navabar";
import Credits from "./components/credits";
import Renew from "./components/renew";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/issue",
      element: <Issue />,
    },
    {
      path: "/",
      element: <NavBar />,
    },
    {
      path: "/return",
      element: <Return />,
    },
    {
      path: "/logs",
      element: <Logs />,
    },
    {
      path: "/stats",
      element: <Stats />,
    },
    {
      path: "/credits",
      element: <Credits />,
    },
    {
      path: "/renew",
      element: <Renew />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
