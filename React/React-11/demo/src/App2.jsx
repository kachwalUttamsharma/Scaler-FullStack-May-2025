import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import HomePage from "./components/HomePage";
// import ContactPage from "./components/ContactPage";
// import AboutPage from "./components/AboutPage";
import React, { lazy, Suspense } from "react";

function App() {
  const HomePage = lazy(() => import("./components/HomePage"));
  const ContactPage = lazy(() => import("./components/ContactPage"));
  const AboutPage = lazy(() => import("./components/AboutPage"));

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
