
import './Home.css';
import { Link } from 'react-router-dom';

function ContactMe() {
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
                <section className="contact-page">
                    <div className="contact-intro">
                        <p className="section-label">Contact</p>
                        <h2 className="syne-tactile-regular">Let’s connect.</h2>
                        <p>
                            If you would like to get in touch, please fill out the form below or reach out via email or phone.
                        </p>
                    </div>

                    <form className="contact-form">
                        <div className="form-row">
                            <label>
                                Name
                                <input type="text" name="name" placeholder="Your name" />
                            </label>
                        </div>

                        <div className="form-row">
                            <label>
                                Email
                                <input type="email" name="email" placeholder="you@example.com" />
                            </label>
                        </div>

                        <div className="form-row">
                            <label>
                                Message
                                <textarea name="message" rows="5" placeholder="Tell me a little about your needs..." />
                            </label>
                        </div>

                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default ContactMe;