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
    <BrowserRouter>
      <div>
        <TopBar />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/tv-shows" element={<TvShow />} />
          <Route path="/Movie" element={<Movie />} />
          {/* <Route path="/Recently-Added" element={<RecentlyAdded />} /> */}
          {/* <Route path="/My-List" element={<MyList />} /> */}
        </Routes>
        <DropDown />
        <h3 className="bg-dark text-white mb-0 p-3 px-4 pt-3">Trending Now</h3>
        <TrendingNow />
        <h3 className="bg-dark text-white mb-0 p-3 px-4 pt-3">Watch It Again</h3>
        <WatchItAgain />
        <h3 className="bg-dark text-white mb-0 p-3 px-4 pt-3">New Releases</h3>
        <NewReleases />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
