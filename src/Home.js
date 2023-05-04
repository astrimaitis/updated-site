// import logo from './logo.svg';
import HeadShot from './images/Andrew_Business_Profile.jpg';
import './App.css';

function Home() {
  return (

    <div className="Header">
            <nav>
        <li>
            About
        </li>
        <li>
            Professional Work
        </li>
        <li>
            Research
        </li>
        <li>
            Articles & Writing
        </li>
        <li>
            Contact
        </li>
    </nav>
      <header className="App-header">
        <img src={HeadShot} className="App-logo" alt="logo" />
        <p>
         This is the App's Header.
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

                {/* <p class="lead">Email: arstrimaitis@gmail.com
                    <br />
                    <a href="https://www.linkedin.com/in/astrimaitis/">  
                        <img src="images/linkedin.jpg" style="width: 30px;" alt />
                    </a>
                    
                    <a href="https://twitter.com/Cookies_Baker/">  
                        <img src="https://www.freeiconspng.com/uploads/twitter-icon-8.png" style="width: 30px;" alt />
                    </a>

                    <a href="https://www.instagram.com/loading_second_life/">  
                        <img src="https://www.freeiconspng.com/uploads/looking-for-instagram-or-android-fonts-or-logos-and-icons-in-png-and--7.png" style="width: 30px;" alt />
                    </a>

                    <a href="https://github.com/astrimaitis">  
                        <img src="images/github.png" style="width: 30px;" alt />
                    </a>

                    <a href="https://github.com/astrimaitis">  
                        <img src="images/github.png" style="width: 30px;" alt />
                    </a>
                </p> */}
      </header>
    </div>
  );
}

export default Home;
