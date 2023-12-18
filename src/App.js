import "./App.css";
import NavBar from "./components/navabar";

import Issue from "./components/issue";
import Return from "./components/return";
import Logs from "./components/logs";
import Stats from "./components/stats";
import Credits from "./components/credits";
import Renew from "./components/renew";
import Searchpage from "./components/Searchpage/searchpage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./components/Homepage/homepage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/issue" element={<Issue />} />
      <Route path="/return" element={<Return />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/renew" element={<Renew />} />
      <Route path="/search" element={<Searchpage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
