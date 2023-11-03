import "./App.css";
import About from "./components/About";
import Agenda from "./components/Agenda";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Speakers from "./components/Speakers";
import Registering from "./components/Registering";
import Footer from "./components/Footer";
import { useState } from "react";
import Loader from "./Loader";

function App() {
  const [loader, setloader] = useState(true);

  setTimeout(() => {
    setloader(false);
  }, 4000);

  return (
    <div className="bg-black overflow-hidden">
      {!loader && (
        <>
            <Nav />
            <Hero />
          <About />
          <Agenda />
          <Speakers />
          <Registering />
          <Footer />
        </>
      )}
      {loader && <Loader />}
    </div>
  );
}

export default App;
