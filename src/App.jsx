import styles from "./App.module.css";
import About from "./components/about.jsx/About";
import Foot from "./components/Foot/Foot";
import { Hero } from "./components/Hero/Hero";
import Kalams from "./components/Kalams/Kalams";
import { Navbar } from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Samplek from "./components/Samplek/Samplek";





function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Kalams/>
      <Projects/>
      <Samplek/>
      <Foot/>
      
      
      
      
      
      
      
      
      
      
      
      
         </div>
  );
}

export default App;