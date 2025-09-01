import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Users from "./components/Users";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/login" element={<Navigate to={"/home"}></Navigate>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
