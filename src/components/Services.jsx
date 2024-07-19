import iconOne from './../assets/images/service-icon-1.png'
import iconTwo from './../assets/images/service-icon-2.png'
import iconThree from './../assets/images/service-icon-3.png'
import iconFour from './../assets/images/service-icon-4.png'
// import iconFive from './../assets/images/service-icon-5.png'
import { FiArrowUpRight } from "react-icons/fi";

const Services = () => {
  return (
    <section className="service section">
        <div className="container">
            <p className="section-subtitle has-before text-center">
                Our Services
            </p>

            <h2 className="h2 section-title text-center">
                Let Us Manage Your Business With Our 
                <span className="has-before">
                    Best Service
                </span>
            </h2>

            <ul className="grid-list">
                <li>
                    <div className="service-card" style={{ color: 'hsl(174, 77%, 50%)' }}>

                        <div className="card-icon">
                            <img src={ iconFour } width="30" height="30" loading="lazy"
                                alt="service icon"/>
                        </div>

                        <h3 className="h3">
                            <a href="#" className="card-title">Business Messaging</a>
                        </h3>

                    </div>
                </li>

                <li>
                    <div className="service-card" style={{ color: 'hsl(267, 76%, 57%)' }}>

                        <div className="card-icon">
                        <img src={ iconTwo } width="30" height="30" loading="lazy"
                            alt="service icon"/>
                        </div>

                        <h3 className="h3">
                        <a href="#" className="card-title">Logo Design</a>
                        </h3>

                    </div>
                </li>

                <li>
                    <div className="service-card" style={{ color: 'hsl(17, 100%, 68%)' }}>

                        <div className="card-icon">
                        <img src={ iconThree } width="30" height="30" loading="lazy"
                            alt="service icon"/>
                        </div>

                        <h3 className="h3">
                        <a href="#" className="card-title">Consulting</a>
                        </h3>

                    </div>
                </li>

                <li>
                    <div className="service-card" style={{ color: 'hsl(343, 98%, 60%)' }}>

                        <div className="card-icon">
                        <img src={ iconOne } width="30" height="30" loading="lazy"
                            alt="service icon"/>
                        </div>

                        <h3 className="h3">
                        <a href="#" className="card-title">Brand Identity</a>
                        </h3>

                    </div>
                </li>

                <li>
                    <div className="service-card" style={{ color: 'hsl(343, 98%, 60%)' }}>

                        <div className="card-icon">
                        <img src={ iconOne } width="30" height="30" loading="lazy"
                            alt="service icon"/>
                        </div>

                        <h3 className="h3">
                        <a href="#" className="card-title">UI/UX Design</a>
                        </h3>

                    </div>
                </li>

                <li>
                    <div className="service-card" style={{ color: 'hsl(343, 98%, 60%)' }}>

                        <div className="card-icon">
                        <img src={ iconOne } width="30" height="30" loading="lazy"
                            alt="service icon"/>
                        </div>

                        <h3 className="h3">
                        <a href="#" className="card-title">Branding</a>
                        </h3>

                    </div>
                </li>

                <li>
                    <div className="service-card" style={{ color: 'hsl(343, 98%, 60%)' }}>

                        <div className="card-icon">
                        <img src={ iconOne } width="30" height="30" loading="lazy"
                            alt="service icon"/>
                        </div>

                        <h3 className="h3">
                        <a href="#" className="card-title">Strategy</a>
                        </h3>

                    </div>
                </li>

                <li>
                    <a href="#" className="link-card" style={{color: 'hsl(203, 97%, 75%)'}}>
                        <span className="span">More Service</span>

                        <FiArrowUpRight className='icon' />
                    </a>
                    </li>
            </ul>
        </div>
    </section>
  )
}

export default Services
