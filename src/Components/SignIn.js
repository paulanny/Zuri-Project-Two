import Menu from '../Assets/Menu.png';
import classes from './SignIn.module.css';

const SignIn = () => {
  return (
    <div className={classes.SignIn}>
      <p>Sign in</p>
      <img src={Menu} alt="menuIcon" />
    </div>
  );
};

export default SignIn;
