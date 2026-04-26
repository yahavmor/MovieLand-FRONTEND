import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieIndex } from "./pages/MovieIndex";
import { MovieDetails } from "./pages/MovieDetails";
import { RegisterForm } from "./pages/RegisterForm.jsx";
import { About } from "./pages/About.jsx";


export function RootCmp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/movies" element={<MovieIndex />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
    </Routes>
  );
}
