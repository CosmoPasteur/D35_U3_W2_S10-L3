import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./component/TopBar";
import Home from "./component/Home";
import TvShow from "./component/TVShow";
import MovieDetails from "./component/Movie";
import DropDown from "./component/DropDown";
import Footer from "./component/footer";

const App = () => {
  return (
    <div>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TvShow />} />
          <Route path="/details/:movieID" element={<MovieDetails />} />
        </Routes>
        <DropDown />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
