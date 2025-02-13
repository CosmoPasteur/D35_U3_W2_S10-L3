import { Link } from "react-router-dom";
import TrendingNow from "./component/TrendingNow";
import WatchItAgain from "./component/WatchItAgain";
import NewReleases from "./component/NewReleases";

const Home = () => {
  return (
    <div>
      HOME
      <Link></Link>
      <h3 className="bg-dark text-white mb-0 p-3 px-4 pt-3">Trending Now</h3>
      <TrendingNow />
      <h3 className="bg-dark text-white mb-0 p-3 px-4 pt-3">Watch It Again</h3>
      <WatchItAgain />
      <h3 className="bg-dark text-white mb-0 p-3 px-4 pt-3">New Releases</h3>
      <NewReleases />
    </div>
  );
};

export default Home;
