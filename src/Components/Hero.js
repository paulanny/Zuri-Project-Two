import HeroImg from '../Assets/Poster.png';
import classes from './HeroStyles.module.css';
import Imdb from '../Assets/imdb.png';
import Tomatoes from '../Assets/tomato.png';
import PLayIcon from '../Assets/play.png';

const Hero = () => {
  return (
    <div className={classes.HeroStyles}>
      <h2>John Wick 3 : Parabellum</h2>
      <div className={classes.ratings}>
        <div className={classes.imdbimg}>
          <img src={Imdb} alt="imdbimge" />
          <p className={classes.ratep}>86.0/100</p>
        </div>
        <div className={classes.imdbimg}>
          <img src={Tomatoes} alt="imdbimge" />
          <p className={classes.rateptwo}>97%</p>
        </div>
      </div>
      <p className={classes.describep}>
        MovieBox What do you want to watch? Sign in John Wick 3 : Parabellum 1 2
        86.0 / 100 97% 3 John Wick is on the run after killing a member of the
        international assassins' guild, and with a $14 million price tag on his
        head, he is the target of hit men and women everywhere. 4 5 Watch
        trailer
      </p>
      <button className={classes.herobtn}>
        <div className={classes.imgtexts}>
          <img src={PLayIcon} alt="playIcon" />
          <p>WATCH TRAILER</p>
        </div>
      </button>
    </div>
  );
};

export default Hero;
