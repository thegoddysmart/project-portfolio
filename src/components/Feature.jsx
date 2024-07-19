import featureBanner from '../assets/images/feature-banner.png';
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiStrategyBold } from "react-icons/pi";

const Feature = () => {
  return (
    <div>
        <section className="feature section" aria-label='feature'>
            <div className="container">
                <img src={ featureBanner } className='feature-banner' width="582" height="585" loading='lazy' alt="Why Choose Goddy Smart Labs" />

                <div className="feature-content">
                    <p className="h2 section-title">
                        Why Choose Goddy Smart Labs?
                    </p>

                    <h2 className="section-text">
                        From identity design to UI/UX design, we offer a wide range of services to meet all your creative needs. Our multidisciplinary approach ensures consistency and quality across all touchpoints.
                    </h2>

                    <ul className="feature-list">
                        <li>
                            <div className="feature-card">
                                <div className="card-icon" style={{color: 'hsl(174, 77%, 50%'}}>
                                    <FaArrowTrendUp className='icon'/>
                                </div>

                                <div>
                                    <h3 className="h3 card-title">
                                        Innovative Solutions
                                    </h3>

                                    <p className="card-text">
                                        We stay ahead of design trends and technologies to make your brand stand out.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="feature-card">
                                <div className="card-icon" style={{color: 'hsl(174, 77%, 50%'}}>
                                    <PiStrategyBold />
                                </div>

                                <div>
                                    <h3 className="h3 card-title">
                                        Strategic Approach                                    
                                    </h3>

                                    <p className="card-text">
                                        Our design process is rooted in strategic thinking.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="feature-card">
                                <div className="card-icon" style={{color: 'hsl(174, 77%, 50%'}}>
                                    <PiStrategyBold />
                                </div>

                                <div>
                                    <h3 className="h3 card-title">
                                        Client-Centric Focus     
                                    </h3>

                                    <p className="card-text">
                                        Our clients are at the heart of everything we do.  
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Feature;