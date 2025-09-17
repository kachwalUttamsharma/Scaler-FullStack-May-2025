import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import MovieContextWrapper from "./context/MovieContextWrapper";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";

function App() {
  const Home = lazy(() => import("./Pages/Home"));
  const WatchList = lazy(() => import("./Pages/WatchList"));
  const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
  return (
    <>
      {/* 3. Add Provider to common parent */}
      <MovieContextWrapper>
        <NavBar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/watchList" element={<WatchList />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </MovieContextWrapper>
    </>
  );
}

export default App;
