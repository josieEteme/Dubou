import './Home.css';
import { Link } from 'react-router-dom';
import img1 from '../assets/img2.jpeg';
import servicesCover from '../assets/servicesCover.jpg';

function Home() {

  return (
    <div className="home">
      <header className="site-header">
        <nav className="menu-bar" aria-label="Main navigation">
          <Link to="/" className="syne-tactile-regular logo-link">
            <h1 className="syne-tactile-regular">Dubou</h1>
          </Link>
         <div className="syne-tactile-regular">
          <Link className="menu-button" to="/about">About</Link>
          <Link className="menu-button" to="/services">Services</Link>
          <Link className="menu-button" to="/contact">Contact</Link>
          <Link className="menu-button-BookNow" to="/book">Book Now</Link>
          </div>
        </nav>
      </header>
      <main className="home-content">
        <section className="home-section bio-section" aria-labelledby="bio-heading">
          <div className="section-content bio-content">
            <div className="bio-copy">
              <p className="section-label">About Me</p>
              <h2 className = "syne-tactile-regular" id="bio-heading">Meet Vyann Your Doula</h2>
              <p>
                I offer calm, personal support for families throughout pregnancy,
                birth, and the early days of parenthood. My goal is to help you
                feel informed, confident, and cared for at every step.
              </p>
            </div>
            <img className="bio-image" src={img1} alt="Doula providing family support" />
          </div>
        </section>

        <section className="home-section services-section" aria-labelledby="services-heading">
          <div className="section-content services-layout">
            <div className="colored-box1" style={{ backgroundImage: `url(${servicesCover})` }}></div>

            <div className="services-copy">
              <p className="section-label">Services</p>
              <h2 className="syne-tactile-regular" id="services-heading">pooopoooooo</h2>
              <p>
                Explore personalized birth and postpartum services created to
                meet your family where you are.
              </p>
              <Link className="learn-more-button" to="/services">Learn More</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
