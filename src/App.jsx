import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./Services";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Partner from "./components/Partner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Blogs />
      <Partner />
      <Contact />
      <div className="h-20"></div>
      <Footer />
    </div>
  );
}

export default App;
