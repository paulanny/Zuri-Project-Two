import classes from "./AboutMovie.module.css";
import ImageVid from "../Assets/Rectangle 29 (1).png";
import PlayIcon from "../Assets/Play (2).png";
import StarIcon from "../Assets/Star.png";
import ExpandIcon from "../Assets/Expand Arrow.png";
import Tickets from "../Assets/Two Tickets.png";
import Lists from "../Assets/List.png";
import Listss from "../Assets/List (2).png"
import GridPosters from "../Assets/Rectangle 37.png";

const AboutMovie = () => {
  return (
    <div className={classes.AboutMovie}>
      <div className={classes.Imgcontainer}>
        <img src={ImageVid} alt="Your Image" />
        <div className={classes.overlay}>
          <div className={classes.playelement}>
            <img src={PlayIcon} alt="iconplay" />
          </div>
          <p className={classes.text}>Watch Trailer</p>
        </div>
      </div>
      <div className={classes.allunderposterattr}>
        <div className={classes.underposterp}>
          <p>Top Gun: Maverick • 2022 • PG-13 • 2h 10m</p>
          {/* <div className="classes.circle"></div>
          <p>2022</p>
          <div className="classes.circle"></div>
          <p>PG-13</p>
          <div className="classes.circle"></div>
          <p>2h10m</p> */}
          <div className={classes.movbtn}>
            <button>Action</button>
            <button>Drama</button>
          </div>
        </div>
        <div className={classes.favourite}>
          <img src={StarIcon} alt="staricon" />
          <p className={classes.favp}>8.5</p>
          <p className={classes.favp2}>|350k</p>
        </div>
      </div>
      <div className={classes.moredeets}>
        <div className={classes.moredeetsp}>
          <p className={classes.firstdeetp}>
            After thirty years, Maverick is still pushing the envelope as a top
            naval aviator, but must confront ghosts of his past when he leads
            TOP GUN's elite graduates on a mission that demands the ultimate
            sacrifice from those chosen to fly it.
          </p>
          <p className={classes.deetp}>
            Director : <span>Joseph Kosinski</span>
          </p>
          <p className={classes.deetp}>
            Writers : <span> Jim Cash, Jack Epps Jr, Peter Craig</span>
          </p>
          <p className={classes.deetp}>
            Stars : <span> Tom Cruise, Jennifer Connelly, Miles Teller</span>
          </p>
          <div className={classes.btnlikediv}>
            <div className={classes.firstdiv}>
              <p>Top rated movie #65</p>
            </div>
            <div className={classes.seconddiv}>
              <p>Awards 9 Nominations</p>
              <img src={ExpandIcon} alt="expicon" />
            </div>
          </div>
        </div>
        <div className={classes.endbtn}>
          <button className={classes.endbtn1}>
            <img src={Tickets} alt="tickets" />
            <p>See Showtimes</p>
          </button>
          <button className={classes.endbtn2}>
            <img src={Lists} alt="tickets" />
            <p>More Watch Options</p>
          </button>
          <div className={classes.gridpost}>
            <img src={GridPosters} alt="gridposters" />
            <div className={classes.enddivv}>
            <img src={Listss} alt="tickets" />
            <p>The Best Movies and Shows in September</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMovie;
