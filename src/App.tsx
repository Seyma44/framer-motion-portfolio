import "./App.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { Home } from "./components/home/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App(): JSX.Element {
  //aos
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
     <Router>
    <Header />
      <Home />
    <Footer />
  </Router>
    </>
  );
}

export default App;
