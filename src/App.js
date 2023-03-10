import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// components

import NavBar from "./components/Navbar/Navbar";

// pages
import HomePage from "./pages/Home/HomePage";
import CVPage from "./pages/CV/CVPage";
import ProjectPage from "./pages/Projects/ProjectPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<HomePage />} />
      <Route path="cv" element={<CVPage />} />
      <Route path="projects" element={<ProjectPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
