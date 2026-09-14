
import './Services.css';
import './Home.css';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className="services" >
            <header className="site-header-services">
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

            <h1>Services</h1>

            <div className="service-grid">
                <div className="service-card">
                    <h2>Prenatal Care</h2>
                    <p>Support during pregnancy with personalized guidance, check-ins, and preparation for the journey ahead.</p>
                </div>

                <div className="service-card">
                    <h2>Birth &amp; Labor</h2>
                    <p>Continuous labor support, comfort techniques, and advocacy to help you feel calm, informed, and empowered.</p>
                </div>

                <div className="service-card">
                    <h2>Postpartum Care</h2>
                    <p>Compassionate care after birth to support recovery, newborn adjustment, and family healing.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;