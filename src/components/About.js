import React, { useState } from 'react';
import Typewriter from "typewriter-effect";
import { GrLinkedin } from "react-icons/gr";
import {HiOutlineDocumentText} from "react-icons/hi";
import {FiGitlab}  from "react-icons/fi";
import {AiOutlineMail} from "react-icons/ai"
import {TbApi} from "react-icons/tb"
import {PiInfinityDuotone} from "react-icons/pi"
import {VscTriangleUp} from "react-icons/vsc"
import {GrCopy} from "react-icons/gr"

export default function About () {
   const [showEmail, setShowEmail] = useState(false)

   const handleResumeDownload = () => {
      fetch('whitley-spencer-resume-2023.pdf').then(response => {
        response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          const newTab = window.open(fileURL, '_blank');
          newTab.addEventListener('beforeunload', () => {
            URL.revokeObjectURL(fileURL);
          });
        })
      })
    }

    return (
      <section id="about">
          <nav id="nav-wrap" style={{backgroundColor: "rgba(0,0,0,0)"}}>
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#timeline">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>
         <div id="main-page" style={{height:"100vh"}}>
         <div id="typewriter-text">
               <Typewriter
               onInit={(typewriter)=> {
                  typewriter
                        .typeString("I'm Whitley,")
                        .pauseFor(1000)
                        .typeString("<br/>")
                        .typeString("Full Stack Software Engineer")
                        .start();
               }}
               options={{
                 delay: 150,
                 autoStart: true,
               }}
                />
         </div>
         <div id="main-page-columns">
         <div id="profile-column"style={{display:"grid", gridTemplateColumns:"1fr", justifyItems:"center"}}>
            <img className="profile-pic"  src="images/profile.png" alt="" style={{outline: "5px solid white"}}/>
               <p className="about-links" style={{marginTop:"20px", display:"flex"}}>
                  <a href="https://www.linkedin.com/in/whitley-spencer/" target="_blank" id="about-linkedin-icon"><GrLinkedin /></a>
                  <a href="https://www.gitlab.com/whitleyspencer" target="_blank" id="about-git-icon"><FiGitlab /></a>
                  <button
                     onClick={()=> {setShowEmail(!showEmail)}}
                     className={`tooltip ${showEmail && "show-email"}`}
                     id = "about-email-icon"
                     >

                        <AiOutlineMail />
                        <span className={`tooltiptext-arrow ${showEmail && "animate__animated animate__pulse"}`}><VscTriangleUp/></span>
                        <span className={`tooltiptext ${showEmail && "animate__animated animate__pulse"}`}>
                           <p style={{margin:"0px"}}>whitley.spencer@gmail.com</p>
                           <div
                              onClick={() => {navigator.clipboard.writeText("whitley.spencer@gmail.com")}}
                              className="copy-button"
                              title="copy to clipboard"
                           >
                              <GrCopy />
                           </div>
                        </span>
                  </button>
                  <button
                     id="about-resume-icon"
                     onClick={handleResumeDownload}
                  >
                        <HiOutlineDocumentText />
                     </button>
               </p>
               <h6 style={{color:"white"}} id="about-paragraph">
                  I started learning to code as a hobby and quickly fell in love with the challenging and innovative nature of software development.
                  I continued to expand my skillset through Hack Reactor's 19-week bootcamp program. I went on to work for Hack Reactor as an immersive resident,
                  where I've had the opportunity to gain experience on both the teaching and development side.
                  I'm excited to join a diverse and collaborative team and eager to continue learning from talented and passionate engineers.
               </h6>
            </div>
               <div id="skills-column">
               <h1 style={{color:"black"}}></h1>
               <div className='skills-row' id="language-skills">
               <h3 className='skills-header'>Languages</h3>
               <div  style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", gridTemplateRows:"1fr .5fr", justifyItems:"center", marginBottom:"20px"}}>
                  <img src="images/python.png" alt="python logo" id="skills-logo"/>
                  <img src="images/javascript.png" style={{height:"35px"}}alt="javascript logo"/>
                  {/* <img src="images/csharp.png" style={{height:"35px"}}alt="c-sharp logo"/> */}
                  <img src="images/sql.png" style={{height:"35px"}} alt="sql logo"/>
                  <img src="images/html.png" style={{height:"35px"}}alt="html logo"/>
                  <img src="images/css.png" style={{height:"35px"}}alt="css logo"/>
                  <h6 style={{color:"white"}}>Python</h6>
                  <h6 style={{color:"white"}}>javascript</h6>
                  {/* <h6 style={{color:"white"}}>C Sharp</h6> */}
                  <h6 style={{color:"white"}}>SQL</h6>
                  <h6 style={{color:"white"}}>HTML 5</h6>
                  <h6 style={{color:"white"}}>CSS</h6>
                  </div>
               </div>
               <div id='frontend-skills' className='skills-row'>
               <h3 className='skills-header'>Frontend</h3>
               <div  style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1.1fr ", gridTemplateRows:"1fr .5fr", justifyItems:"center",marginBottom:"20px"}}>
                  <img src="images/react.png" style={{height:"35px"}} alt="python logo"/>
                  <img src="images/redux.png" style={{height:"35px"}}alt="javascript logo"/>
                  <img src="images/websockets.png" style={{height:"35px"}}alt="c-sharp logo"/>
                  <img src="images/dom.png" style={{height:"35px"}} alt="sql logo"/>
                  <h6 style={{color:"white"}}>React</h6>
                  <h6 style={{color:"white"}}>Redux</h6>
                  <h6 style={{color:"white"}}>Websockets</h6>
                  <h6 style={{color:"white"}}>DOM manipulation</h6>
                  </div>
               </div>
               <div id='backend-skills' className='skills-row'>
               <h3 className='skills-header'>Backend</h3>
               <div  style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gridTemplateRows:"1fr .5fr", justifyItems:"center", marginBottom:"20px"}}>
                  <img src="images/django.png" style={{height:"35px"}} alt="django logo"/>
                  <img src="images/fastapi.png" style={{height:"35px"}}alt="fastAPI logo"/>
                  <img src="images/postgresql.png" style={{height:"35px"}}alt="postgreSQL logo"/>
                  <img src="images/rabbitmq.png" style={{height:"35px"}} alt="rabbitMQ logo"/>
                  <h6 style={{color:"white"}}>Django</h6>
                  <h6 style={{color:"white"}}>FastAPI</h6>
                  <h6 style={{color:"white"}}>PostgreSQL</h6>
                  <h6 style={{color:"white"}}>RabbitMQ</h6>
                  </div>
               </div>
               <div id='system-skills' className='skills-row'>
               <h3 className='skills-header'>System Design</h3>
               <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gridTemplateRows:"1fr .5fr", justifyItems:"center"}}>
                  <span style={{fontSize: "26pt"}}><TbApi /></span>
                  <img src="images/microservices.png" style={{height:"35px"}}alt="microservices"/>
                  <span style={{fontSize: "26pt", color:"rgba(66,133,155,90)"}}><PiInfinityDuotone /></span>
                  <img src="images/docker.png" style={{height:"35px"}}alt="docker logo"/>
                  <h6 style={{color:"white"}}>API Development</h6>
                  <h6 style={{color:"white"}}>Microservices</h6>
                  <h6 style={{color:"white"}}>CI/CD</h6>
                  <h6 style={{color:"white"}}>Docker</h6>
               </div>
               </div>
            </div>
         </div>
         </div>
         {/* <div  style={{marginTop:"-11%", textAlign:"right", marginRight:"50px"}}>
         <p className="scrolldown">
            <a className="smoothscroll" href="#timeline" style={{fontSize:"24pt"}}><i className="icon-down-circle"></i></a>
         </p>
         </div> */}
      </section>
    );

}
