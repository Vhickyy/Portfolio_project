import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Portfolio from './Components/Portfolio';
import Sections from './Components/Sections'
import Youtube from './Components/Youtube';
function App() {
  return (
    <div className=''>
      <Sections/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Youtube/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
