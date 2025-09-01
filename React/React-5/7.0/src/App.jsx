import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Users from "./components/Users";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/users/:id",
      element: <Users />,
    },
    {
      path: "/login",
      element: <Navigate to={"/home"}></Navigate>,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      {/* <NavBar /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
