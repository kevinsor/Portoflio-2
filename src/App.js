import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Links from "./components/Links";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Links/>
    </div>
  );
}

export default App;
