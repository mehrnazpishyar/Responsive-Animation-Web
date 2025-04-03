import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Parallax />
      <Services />
      <Contact/>
    </>
  );
};

export default App;
