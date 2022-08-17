import './App.css';
import About from './Components/navbar/about/About';
import Banner from './Components/navbar/banner/Banner';
import Contact from './Components/navbar/contact/Contact';
import Create from './Components/navbar/create/Create';
import Footer from './Components/navbar/footer/Footer';
import Navbar from './Components/navbar/Navbar';
import Project from './Components/navbar/projects/Project';
import Skills from './Components/navbar/skills/Skills';

function App() {
  return (
    <div className='main'>
    <Navbar />
    <Banner/>
    <About/>
    <Skills/>
    <Create/>
    <Project/>
    <Contact/>
    <Footer/>
   
    </div>
  );
}

export default App;
