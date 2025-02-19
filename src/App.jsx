import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/About/about';
import Skills from './components/skills/skills';  // Skills comes first now
import Experience from './components/experience/experience';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills /> {/* Skills section first */}
      <Experience /> {/* Experience section after Skills */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
