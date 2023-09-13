import SearchInput from './Search';
import LogoImg from '../Assets/Logo.png';
import SignIn from './SignIn';
import classes from './HeaderDiv.module.css';
import Hero from './Hero';
const Header = ({ onSearch }) => {
 

  return (
    <div className={classes.HeaderBg}>
      <div className={classes.HeaderDiv}>
        <img src={LogoImg} alt="LogoImg" />;
        <SearchInput onSearch={onSearch}/>;
        <SignIn />
      </div>
      <Hero />
    </div>
  );
};

export default Header;
