import React, { Component } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import OtherProjects from  './components/OtherProjects';
import ContactForm from './components/ContactUs';
import Footer from './components/Footer';
import ResumeTimeline from './components/Timeline';


class App extends Component {
  render() {
    return (
      <div className="App">
        <About/>
        <ResumeTimeline />
        <Portfolio />
        <OtherProjects/>
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
