import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';

const Home = () => {

  return (
    <>
      <Header />

      <main>
        <article>
          <Hero />

          <About />

          <Services />

          <Feature />

          <Footer />
        </article>
      </main>
    </>
  )
}

export default Home;
