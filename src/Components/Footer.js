import classes from './Footer.module.css';
import Facebook from '../Assets/facebook.png';
import Instagram from '../Assets/instagram.png';
import Twitter from '../Assets/twitter.png';
import Youtube from '../Assets/youtube.png';

const Footer =() => {
return (


    <div className={classes.Footer}>
        <div className={classes.socials}>
            <img src={Facebook} alt='fbimg' />
            <img src={Instagram} alt='fbimg' />
            <img src={Twitter} alt='fbimg' />
            <img src={Youtube} alt='fbimg' />
        </div>
        <div className={classes.links}>
            <a>Conditions of Use</a>
            <a>Privacy & Policy</a>
            <a>Press Room</a>
        </div>
        <p className={classes.footerp}>© 2021 MovieBox by Adriana Eka Prayudha  </p>

    </div>
);
}

export default Footer