// import logo from './logo.svg';
import HeadShot from './images/Andrew_Business_Profile.jpg';
import './App.css';

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <img src={HeadShot} alt="logo" />
        <p>
         This is the App's Header.
        </p>

        <p className='Header-Sigature'>
          Andrew Strimaitis
        </p>
        <p class="lead">
            Software Engineer <i class="fi-rr-computer"></i>
            <br />
            Biomedical Engineer <i class="fi-rr-doctor"></i>
            <br />
            Avid Finanical Investor <i class="fi-rr-money"></i>
            <br />
            Cocktail Enthusiast <i class="fi-rr-marker"></i>
            <br />
            Love Learning and Traveling <i class="fi-rr-paper-plane"></i>
            <br />
        </p>
      </header>
    </div>
  );
}

export default Header;
