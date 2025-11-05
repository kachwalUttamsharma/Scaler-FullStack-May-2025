import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin/Admin";
import Partner from "./pages/Partner/Partner";
import SingleMovie from "./pages/SingleMovie";
import BookingShow from "./pages/BookingShow";
import MyBookings from "./pages/MyBookings";
import Forget from "./pages/Forget";
import Reset from "./pages/Reset";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/partner"
          element={
            <ProtectedRoute>
              <Partner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <SingleMovie />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book-show/:id"
          element={
            <ProtectedRoute>
              <BookingShow />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myBookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
