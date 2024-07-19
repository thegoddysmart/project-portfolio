import { useState, useEffect } from 'react';
import GSLlogo from './../assets/gsl-logo.png';
// import { render } from 'react-dom';
// import { menuOutline, closeOutline } from 'react-ionicons';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';

import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 20) {
                setIsHeaderSticky(true);
            } else {
                setIsHeaderSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener in component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isHeaderSticky ? 'active' : ''}`} data-header>
            <div className="container">

                <div className={`overlay ${isMenuOpen ? 'active' : ''}`} data-overlay onClick={handleMenuToggle}></div>

                <a href="#" className="logo1">
                    <img src={GSLlogo} alt="Goddy Smart Labs Logo" />
                </a>

                <button className="menu-open-btn" data-menu-open-btn onClick={handleMenuToggle}>
                    <IonIcon icon={menuOutline} />
                </button>

                <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} data-navbar>
                    <button className="menu-close-btn" data-menu-close-btn onClick={handleMenuToggle}>
                        <IonIcon icon={closeOutline} />
                    </button>

                    <a href="#" className="logo">
                        <img src={GSLlogo} alt="Goddy Smart Labs Logo" />
                    </a>

                    <ul className="navbar-list">
                        <li>
                            <a href="/" className="navbar-link">Home</a>
                        </li>

                        <li>
                            <a href="/" className="navbar-link">About</a>
                        </li>

                        <li>
                            <a href="/" className="navbar-link">Services</a>
                        </li>

                        <li>
                            <a href="/" className="navbar-link">Blog</a>
                        </li>

                        <li>
                            <a href="/" className="navbar-link">Contact</a>
                        </li>
                    </ul>

                    <li>
                        <Link to="/signup">
                            <button className="btn btn-secondary">Get Started</button>
                        </Link>
                    </li>
                </nav>
            </div>
        </header>
    )
}

export default Header
