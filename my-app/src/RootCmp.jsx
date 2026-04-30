import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { MovieIndex } from "./pages/MovieIndex.jsx";
import { MovieDetails } from "./pages/MovieDetails.jsx";
import { RegisterForm } from "./pages/RegisterForm.jsx";
import { About } from "./pages/About.jsx";
import { UserPage } from "./pages/UserPage.jsx";


export function RootCmp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/movies" element={<MovieIndex />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/me" element={<UserPage />} />

    </Routes>
  );
}
