import {Navbar,About, Portfolio, Contact, Footer,Reviews} from './Components/index'
function App() {
  return (
    <div className='md:absolute top-0 left-[30%]'>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Reviews/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
