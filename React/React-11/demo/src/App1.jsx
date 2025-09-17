import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import HomePage from "./components/HomePage";
// import ContactPage from "./components/ContactPage";
// import AboutPage from "./components/AboutPage";
import { useEffect, useState } from "react";

function App1() {
  const [HomePage, setHomePage] = useState(null);
  const [AboutPage, setAboutPage] = useState(null);
  const [ContactPage, setContactPage] = useState(null);

  useEffect(() => {
    import("./components/HomePage").then((module) =>
      setHomePage(() => module.default)
    );
  }, []);

  const loadHomePage = () => {
    import("./components/HomePage")
      .then((module) => setHomePage(() => module.default))
      .catch((error) => {
        console.log("Path not found", error);
      });
  };
  const loadAboutPage = () => {
    import("./components/AboutPage")
      .then((module) => setAboutPage(() => module.default))
      .catch((error) => {
        console.log("Path not found", error);
      });
  };
  const loadContactPage = () => {
    import("./components/ContactPage")
      .then((module) => setContactPage(() => module.default))
      .catch((error) => {
        console.log("Path not found", error);
      });
  };
  return (
    <>
      <Navbar
        loadAboutPage={loadAboutPage}
        loadContactPage={loadContactPage}
        loadHomePage={loadHomePage}
      />
      <Routes>
        <Route
          path="/"
          element={HomePage ? <HomePage /> : <div>Loading ...</div>}
        />
        <Route
          path="/about"
          element={AboutPage ? <AboutPage /> : <div>Loading ...</div>}
        />
        <Route
          path="/contact"
          element={ContactPage ? <ContactPage /> : <div>Loading ...</div>}
        />
      </Routes>
    </>
  );
}

export default App1;
