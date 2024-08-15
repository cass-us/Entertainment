import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from "./components/NavBar";
import MovieSection from "./components/MovieSection";
import SeriesSection from "./components/SeriesSection";
import FooterSection from "./components/FooterSection";
import AllMovies from "./components/AllMovies";
import AllSeries from "./components/AllSeries";
import ViewMovie from "./components/ViewMovie";
import EditMovie from "./components/EditMovie";
import AddMovie from "./components/AddMovie";
import EditSeries from "./components/EditSeries";
import ViewSeries from "./components/ViewSeries";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<><MovieSection /><SeriesSection /><FooterSection /></>} />
        <Route path="/AllMovies" element={<><AllMovies /><FooterSection /></>} />
        <Route path="/AllSeries" element={<><AllSeries /><FooterSection /></>} />
        <Route path="/ViewMovie/:id" element={<><ViewMovie /><FooterSection /></>} />
        <Route path="/EditMovie/:movieId" element={<><EditMovie /><FooterSection /></>} />
        <Route path="/AddMovie" element={<><AddMovie /><FooterSection /></>} />
        <Route path="/ViewSeries/:getId" element={<><ViewSeries /><FooterSection /></>} />
        <Route path="/EditSeries/:id" element={<><EditSeries /><FooterSection /></>} />
        
      </Routes>
    </BrowserRouter>
  );
}
