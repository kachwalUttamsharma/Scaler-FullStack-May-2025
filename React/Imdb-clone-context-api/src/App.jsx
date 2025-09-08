import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import WatchList from "./Pages/WatchList";
import PageNotFound from "./Pages/PageNotFound";
import MovieContextWrapper from "./context/MovieContextWrapper";

function App() {
  return (
    <>
      {/* 3. Add Provider to common parent */}
      <MovieContextWrapper>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/watchList" element={<WatchList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </MovieContextWrapper>
    </>
  );
}

export default App;
