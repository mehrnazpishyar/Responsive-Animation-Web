import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Parallax from "./components/Parallax/Parallax";

const App = () => {
  return (
    <>
    <section id="Homepage">
    <Navbar />
    <Header/>
    </section>
    <section id="Services">
        <Parallax/>
      </section>

    </>
  );
};

export default App;
