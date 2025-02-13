import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/footer";
import NewReleases from "./component/NewReleases";
import TopBar from "./component/TopBar";
import TrendingNow from "./component/TrendingNow";
import DropDown from "./component/DropDown";
import WatchItAgain from "./component/WatchItAgain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShow from "./component/TVShow";
import Movie from "./component/Movie";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopBar />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/tv-shows" element={<TvShow />} />
          <Route path="/Movie" element={<Movie />} />
          {/* <Route path="/Recently-Added" element={<RecentlyAdded />} /> */}
          {/* <Route path="/My-List" element={<MyList />} /> */}
        </Routes>
        <DropDown />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
