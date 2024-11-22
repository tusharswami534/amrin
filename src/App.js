import './App.css';
import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import About from './components/home/About';
import Contact from './components/home/Contact';
import Hero from './components/home/Hero';
import Projects from './components/home/Projects';
import Technologies from './components/home/Technologies';

function App() {
  return (
   <div>
    <NavBar/>
    <Hero/>
    <About/>
    <Projects/>
    <Technologies/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default App;
