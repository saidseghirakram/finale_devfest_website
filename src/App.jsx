import "./App.css";
import About from "./components/About";
import Agenda from "./components/Agenda";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Speakers from "./components/Speakers";
import Registering from "./components/Registering";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-black overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Agenda />
      <Speakers />
      <Registering />
      <Footer />

    </div>
  );
}

export default App;
