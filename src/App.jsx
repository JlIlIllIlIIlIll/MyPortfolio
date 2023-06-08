import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
