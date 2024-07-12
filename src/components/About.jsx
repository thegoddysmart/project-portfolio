import aboutBanner from './../assets/images/about-banner.png'

const About = () => {
  return (
    <div>
        <section className="about">
            <div className="container">

                {/* <figure className="about-banner"> */}
                <img src={ aboutBanner } className='about-banner' alt="About Goddy Smart Labs" />
                {/* </figure> */}

                <div className="about-content">
                    <h2 className="h2 about-title">
                        What Problems are We Here to Solve?
                    </h2>

                    <p className="section-text">
                        Goddy Smart Labs is a multidisciplinary creative lab dedicated to transforming ideas into captivating visual stories. Our mission is to bridge the communication gap between businesses and their audiences, empowering our clients through strategic design and innovative solutions. With a vision to create a world where creative solutions transform lives, we strive to make every message, idea, or story more impactful and memorable.
                    </p>

                    <button className="btn btn-primary">
                        Read More About Us
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About;
