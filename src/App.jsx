import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/footer";
import NewReleases from "./component/NewReleases";
import TopBar from "./component/TopBar";
import TrendingNow from "./component/TrendingNow";
import TvShow from "./component/TVShow";
import WatchItAgain from "./component/WatchItAgain";
// import { BrowserRouter } from "react-router-dom";
// import gallerieFilm from "./component/GallerieTot";

function App() {
  return (
    <>
      <TopBar />
      <TvShow />
      <h3 className="bg-dark text-white mb-0 p-3 px-4 pt-3">Trending Now</h3>
      <TrendingNow />
      <h3 className="bg-dark text-white mb-0 p-3 px-4 pt-3">Watch It Again</h3>
      <WatchItAgain />
      <h3 className="bg-dark text-white mb-0 p-3 px-4 pt-3">New Releases</h3>
      <NewReleases />
      {/* <gallerieFilm /> */}
      <Footer />
    </>
  );
}

export default App;
