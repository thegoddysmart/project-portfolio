import GSLlogo from './../assets/gsl-logo-footer.png';
import { FaBehance } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
        <footer className="section footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand">
                        {/* put a link here */}
                        <img src={GSLlogo} width='8%' alt="Goddy Smart Labs Logo" />

                        <p className="footer-text">
                            Strategize, Design, Empower
                        </p>

                        <ul className="social-list">
                            <li>
                                <a href="#" className="social-link">
                                    <FaBehance className='icon' />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <FaPinterest className='icon' />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <FaInstagram className='icon' />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <FaLinkedin className='icon' />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <FaFacebookF className='icon' />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-link-box">
                        <ul className="footer-list">
                            
                            <li>
                                <p className="footer-link-title">
                                    Services
                                </p>
                            </li>

                            <li>
                                <a href="#" className="footer-link">
                                    Design
                                </a>
                            </li>

                            <li>
                                <a href="#" className="footer-link">
                                    UI/UX
                                </a>
                            </li>

                            <li>
                                <a href="#" className="footer-link">
                                    Consulting
                                </a>
                            </li>

                            <li>
                                <a href="#" className="footer-link">
                                    Branding
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-list">
                            
                            <li>
                                <p className="footer-link-title">
                                    Company
                                </p>
                            </li>

                            <li>
                                <a href="#" className="footer-link">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="footer-link">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-list">
                            
                            <li>
                                <p className="footer-link-title">
                                    Partners
                                </p>
                            </li>

                            <li>
                                <a href="#" className="footer-link">
                                    Nel technologies
                                </a>
                            </li>

                            <li>
                                <a href="#" className="footer-link">
                                    Monarch Studios
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-list">
                            
                            <li>
                                <p className="footer-link-title">
                                    Contact
                                </p>
                            </li>

                            <li className='contact-item'>
                                <span>Call : </span>

                                <a href="tel:273484296" className="contact-link">
                                    <span className='text'>273 484 296</span>
                                </a>
                            </li>

                            <li className='contact-item'>
                                <span>Email : </span>

                                <a href="mailto:goddysmartgraphics@gmail.com" className="contact-link">
                                    goddysmartgraphics@gmail.com
                                </a>
                            </li>


                            <li className='contact-item'>
                                <span>Address : </span>

                                <a href="#" className="contact-link">
                                    <address>Ghana</address>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        &copy; 2021 <a href="">Goddy Smart Labs</a>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer