import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

function App() {

  return (
    <>
      <Header />

      <main>
        <article>
          <Hero />

          <About />
        </article>
      </main>
    </>
  )
}

export default App
