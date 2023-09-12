import classes from "./MovieDeets.module.css";
import Logoblack from "../Assets/Logoblack.png";
import Home from "../Assets/Home.png";
import Movies from "../Assets/Movie Projector.png";
import Series from "../Assets/TV Show.png";
import Upcoming from "../Assets/Calendar.png";
import Logout from "../Assets/Logout.png";

const MovieDeets = () => {
  return (
    <div className={classes.details}>
      {/* <div className={classes.sidebar}> */}
        <img className={classes.Logo} src={Logoblack} alt="LogoImg" />
        <div className={classes.sidebarnavlinks}>
          <a href="/" className={classes.linksa}>
            <img src={Home} alt="homeIcon" />
            <p>Home</p>
          </a>
          <a href="/movies" className={`${classes.linksa} ${classes.active}`}>
            <img src={Movies} alt="movieIcon" />
            <p>Movies</p>
          </a>
          <a href="/series" className={classes.linksa}>
            <img src={Series} alt="seriesIcon" />
            <p>TV Series</p>
          </a>
          <a href="/upcoming" className={classes.linksa}>
            <img src={Upcoming} alt="upcomingIcon" />
            <p>Upcoming</p>
          </a>
        </div>
        <div className={classes.box}>
          <p>Play movie quizes and earn free tickets</p>
          <p>50k people are playing now</p>
          <button>Start Playing</button>
        </div>
        <a href="/upcoming" className={classes.linksa}>
          <img src={Logout} alt="upcomingIcon" />
          <p>Log out</p>
        </a>
      {/* </div> */}
    </div>
  );
};
export default MovieDeets;
