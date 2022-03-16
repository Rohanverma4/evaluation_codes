import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Navbar } from "../components/Navbar";
import { MoviesDashboard } from "../components/MoviesDashboard";
import { SingleMovieDetails } from "../components/SingleMovieDetails";

export const MainRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<MoviesDashboard />} />
            <Route path="/:id" element={<SingleMovieDetails />} />
        </Routes>
    )
}