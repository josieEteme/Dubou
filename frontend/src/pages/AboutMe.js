
import './Home.css';
import { Link } from 'react-router-dom';

function AboutMe() {
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
                <h1>About</h1>
            </main>
        </div>
    );
}
export default AboutMe; 