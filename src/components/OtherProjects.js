import React from 'react';
import { useState } from 'react';
import {BsDot} from "react-icons/bs"
import {FiGitlab}  from "react-icons/fi";

export default function OtherProjects() {
  const [conferenceHover, setConferenceHover] = useState(false)
  const [autoHover, setAutoHover] = useState(false)

  return (
      <section id="more-projects">
        <div className='other-projects-main'>
          <h2 style={{textAlign:"center", borderBottom:"1px solid white", width:"40%", color:"white"}}>More Recent Projects</h2>
          <div className='other-projects-container'>

            <div
              id="conference-go"

            >
            <h3 style={{color:"white"}}>
                ConferenceGO
                <a href="gitlab.com/whitleyspencer/team-conference" target="_blank" id="auto-gitlab-link"><FiGitlab /></a>
            </h3>
            <div className='project-item'
              onMouseOver={()=> {setConferenceHover(true)}}
              onMouseOut={()=> {setConferenceHover(false)}}
            >
            <div className='caption'>
              <div className='caption-content' style={{fontWeight:"bold", fontSize:"12pt"}}>
                {conferenceHover && <> Micoservice-based Conference management application developed using principles of Domain Driven Design</>}
              </div>
            </div>
              <img src="images/conferencego.png" alt="image of conference application" />
              </div>
              <h5 style={{marginTop:"5px", color:"lightgrey", display:"flex", justifyContent:"center", alignItems:"center"}}>
              Django <BsDot/> React <BsDot/> SQLite <BsDot/> RabbitMQ
              </h5>
            </div>


            <div
              id="auto-project"
            >

            <h3 style={{color:"white"}}>
              DeaerHub Pro
              <a href="https://www.gitlab.com/whitleyspencer" target="_blank" id="auto-gitlab-link"><FiGitlab /></a>
              </h3>
            <div
            className='project-item'
            onMouseOver={()=> {setAutoHover(true)}}
            onMouseOut={()=> {setAutoHover(false)}}
            >
              <div className='caption'>
                <div className='caption-content' style={{fontWeight:"bold", fontSize:"12pt"}}>
                  {autoHover && <> Automobile dealership management application featuring sales, service, and inventory microservices</>}
                </div>
              </div>
                <img src="images/dealerhubpro.png" alt="image of conference application" />
            </div>
            <h5 style={{marginTop:"5px", color:"lightgrey", display:"flex", justifyContent:"center", alignItems:"center"}}>
              Django <BsDot/> React <BsDot/> SQLite
            </h5>
            </div>

            <div id="prollercoaster">

            </div>
          </div>

        </div>
      </section>
        );
}
