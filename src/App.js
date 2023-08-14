import React, { Component } from 'react';
// import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import OtherProjects from  './components/OtherProjects';
import ContactForm from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import ResumeTimeline from './components/Timeline';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header resumeData={resumeData}/> */}
        <About resumeData={resumeData}/>
        {/* <Resume resumeData={resumeData}/> */}
        <ResumeTimeline />
        <Portfolio resumeData={resumeData}/>
        <OtherProjects resumeData={resumeData}/>
        <ContactForm />
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
