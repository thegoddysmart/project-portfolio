import heroImage from './../assets/images/hero.png'

const Hero = () => {
  return (
    <section className="hero">
        <div className="container">
            <figure className="hero-banner">
                <img src={ heroImage } alt="Goddy Smart Labs pattern" />
            </figure>

            <div className="hero-content">
                <h1 className="h1 hero-title">
                    Design, Strategize, Empower
                </h1>

                <p className="section-text">
                    Empowering Businesses and Individuals Through Creative Solutions and Strategic Insights
                </p>

                <button className="btn btn-primary">
                    Discover More
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero;
