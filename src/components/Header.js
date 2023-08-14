// import React from 'react';
// import resumeData from '../resumeData';
// import Typewriter from "typewriter-effect";

// export default function Header () {
//   // fontFamily:"'opensans', sans-serif"
//     return (
//       <header id="home" style={{}}>
//          <nav id="nav-wrap">
//             <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
//           <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
//             <ul id="nav" className="nav">
//                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
//                <li><a className="smoothscroll" href="#about">About</a></li>
//              <li><a className="smoothscroll" href="#resume">Resume</a></li>
//                <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
//                {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
//                <li><a className="smoothscroll" href="#contact">Contact</a></li>
//             </ul>
//          </nav>
//          <div className="row banner">
//             <div className="banner-text">
//                <h1 className="responsive-headline">Welcome</h1>
//                <div className='typewriter' style={{color:"white", fontSize:"25pt", fontFamily:"'lucinda console', monospace", letterSpacing:".1em"}}>
//                <Typewriter
//                          options={{
//                           strings: [
//                             "I'm Whitley,",
//                             "Full Stack Software Engineer",
//                           ],
//                           delay: 150,
//                           pauseFor: 1200,
//                           autoStart: true,
//                           loop: true,
//                 }}
//                 />
//                 </div>
//                {/* <h3 style={{color:'#fff', fontFamily:'sans-serif', marginTop: "50px"}}>I am a
//                </h3> */}
//                <hr/>
//                <ul className="social">
//                   {
//                     resumeData.socialLinks && resumeData.socialLinks.map(item =>{
//                       return(
//                               <li key={item.name}>
//                                 <a href={item.url} target="_blank"><i className={item.className}></i></a>
//                               </li>
//                             )
//                           }
//                     )
//                   }
//                </ul>
//             </div>
//          </div>

//          <p className="scrolldown">
//             <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
//          </p>

//       </header>
//     );
// }
