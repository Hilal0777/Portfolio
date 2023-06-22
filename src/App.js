import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
