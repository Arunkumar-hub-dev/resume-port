
import styles from './App.module.css';
import { Navbar } from './component/Navbar/Navbar';
import { Hero } from './component/Hero/Hero';
import { About } from './component/About/About';
import { Experience } from './component/Experience/Experience';
import { Projects } from './component/Projects/Projects';
import { Contact } from './component/Contact/Contact';


function App() {


  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>

    </div>
  )
}

export default App
