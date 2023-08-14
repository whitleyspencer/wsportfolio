import React, { useEffect, useState} from 'react';
import {BsArrowRightCircle} from "react-icons/bs"
import {BsDot} from "react-icons/bs"
import {AiFillGitlab} from "react-icons/ai"
import {FiGitlab}  from "react-icons/fi";


export default function Porfolio () {
  const [index, setIndex] = useState(0)
  const scoreSections = ["Project Overview", "Account Features", "Jeopardy", "Blackjack", "Go Fish"]
  const [allowScroll, setAllowScroll] = useState(false)
  const [jeopardyHov, setJeopardyHov] = useState(false)
  const [accountHov, setAccountHov] = useState(false)
  const [blackjackHov, setBlackjackHov] = useState(false)
  const [gofishHov, setGofishHov] = useState(false)

  useEffect(()=> {
    setTimeout(()=> {
      setAllowScroll(true)
    }, 2000)
  }, [])

  const handleScroll = (e) => {
    if (!allowScroll) {
      return
    }
    if (e.deltaX > 5) {
      setAllowScroll(false)
      setIndex((prevIndex) =>
        prevIndex===scoreSections.length-1 ? 0 : prevIndex+1
      );
      setTimeout(()=> {
        setAllowScroll(true)
      }, 2000)
    }
  };

    return (
      <section id="portfolio" onWheel={handleScroll}>
      <div id="project-description">
        {
          index!=0 ?
          <div className='portfolio-buttons'>
              <button className='icon-left-circle' id='score-next-button' onClick={()=> setIndex(0)}>
                <h5 style={{color:"#7ef6fa"}}>{scoreSections[0]}</h5>
            </button>
            </div>
                  :
            <div></div>

          }

          <div>
        <h1 style={{color:"white", letterSpacing:".2em"}}>
          SCORE
          <a href="https://gitlab.com/whitleyspencer/score" target="_blank" id="score-gitlab-link"><FiGitlab /></a>
        </h1>
        <h5 style={{marginTop:"5px", color:"rgb(84,84,84)", display:"flex", justifyContent:"center", alignItems:"center"}}>
          FastAPI <BsDot/> React <BsDot/> Redux <BsDot/> PostgreSQL <BsDot /> Websockets
        </h5>
        <h5 style={{color:"#979494"}}>
          A single and multi-player gaming application
        </h5>
        </div>
        <div className='portfolio-buttons'>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
      {index ===0 ?
            <section className="content-section">
            <div className="projects-overview-container">
              <div className='project-blocks'>
              <button
                onClick={()=> {setIndex(1)}}
                onMouseOver={()=> {setAccountHov(true)}}
                onMouseOut={()=> {setAccountHov(false)}}
                className="portfolio-item"
                style={{padding:"0px", backgroundColor:"rgba(0,0,0,0"}}>
                    <div className="caption">
                        <div className="caption-content">
                          {accountHov ? <><div>Account Features</div><span style={{fontSize:"16pt"}}><BsArrowRightCircle /></span></>:<div className="h2">Account Features</div>}
                        </div>
                    </div>
                    <img className="img-fluid" src="images/account1.png" alt="..." style={{opacity:"60%"}}/>
                </button>
                <button
                onClick={()=> {setIndex(2)}}
                onMouseOver={()=> {setJeopardyHov(true)}}
                onMouseOut={()=> {setJeopardyHov(false)}}
                className="portfolio-item"
                style={{padding:"0px", backgroundColor:"rgba(0,0,0,0"}}
                >
                    <div className="caption">
                        <div className="caption-content">
                        {jeopardyHov ? <><div>Jeopardy</div><span style={{fontSize:"16pt"}}><BsArrowRightCircle /></span></>:<div className="h2">Jeopardy</div>}
                        </div>
                    </div>
                    <img className="img-fluid" src="images/jeopardy1.png" alt="..." style={{opacity:"60%"}}/>
                </button>
                <button
                  onClick={()=> {setIndex(3)}}
                  onMouseOver={()=> {setBlackjackHov(true)}}
                  onMouseOut={()=> {setBlackjackHov(false)}}
                  className="portfolio-item"
                  style={{padding:"0px", backgroundColor:"rgba(0,0,0,0"}}
                >
                          <div className="caption">
                              <div className="caption-content">
                              {blackjackHov ? <><div>Blackjack</div><span style={{fontSize:"16pt"}}><BsArrowRightCircle /></span></>:<div className="h2">Blackjack</div>}
                              </div>
                          </div>
                          <img className="img-fluid" src="images/blackjack1.png" alt="..." style={{opacity:"60%"}}/>
                </button>
                <button
                  onClick={()=> {setIndex(4)}}
                  onMouseOver={()=> {setGofishHov(true)}}
                  onMouseOut={()=> {setGofishHov(false)}}
                  className="portfolio-item"
                  style={{padding:"0px",
                  backgroundColor:"rgba(0,0,0,0)"}}
                >
                          <div className="caption">
                              <div className="caption-content">
                                {gofishHov ? <><div>Go Fish</div><span style={{fontSize:"16pt"}}><BsArrowRightCircle /></span></>:<div className="h2">Go Fish</div>}
                              </div>
                          </div>
                          <img className="img-fluid" src="images/gofish1.png" alt="..." style={{opacity:"60%"}}/>
                </button>
              </div>
          </div>
        </section>
        :
        <div id="projects-container">
          {index ===1 && <AccountFeatures />}
          {index ===2 && <JeopardyFeatures />}
          {index ===3 && <BlackjackFeatures />}
          {index ===4 && <GofishFeatures />}
        </div>
      }
      </div>
      <div className="project-footer">
        <div></div>
        <p>Select a feature or scroll right to see more</p>
          <div className='portfolio-buttons' style={{marginTop:"-25px"}}>
            {index != scoreSections.length-1 &&
              <button className='icon-right-circle' id='score-next-button' onClick={()=> setIndex(index+1)}>
                  <h5 style={{color:"#7ef6fa"}}>{scoreSections[index+1]}</h5>
              </button>
            }

            </div>
      </div>
  </section>
        );
}


export function AccountFeatures() {
  return (
    <>
    <div id="score-account" className='indv-projects'>
    <video className="feature-videos" src="images/accountvideo.mov" autoPlay controls style={{width: "90%"}}/>
    </div>
    <div className="indv-projects-text">
    <h2 style={{color:"rgba(255,255,255,0.5)"}}>Backend Account Features</h2>
    <ul id="features-list">
      <li>
      Security features include token authentication and password encryption
      </li>
      <li>
      PostgreSQL database manages social connections, allowing users to search for, add, and
      remove friends or block users from viewing account
      </li>
      <li>
      Stores game data, providing access to game statistics and balance history
      </li>
      <li>
      Handles multi-player game invitations
      </li>
    </ul>
    </div>
    </>
  )
}

export function BlackjackFeatures() {
  return (
    <>
    <div id="score-account" className='indv-projects'>
    <video className="feature-videos" src="images/blackjack-video.mov" autoPlay controls style={{width: "90%"}}/>
    </div>
    <div className="indv-projects-text">
    <h2 style={{color:"rgba(255,255,255,0.5)"}}>Blackjack Features</h2>
    <ul id="features-list">
      <li>
      Classic version of blackjack game that handles dealer’s logic
      </li>
      <li>
      Users can toggle between classic and tutorial mode, which shows the most statistically favorable move based on user’s
      hand and what the dealer is showing
      </li>
      <li>
      Option to view history of the current game period, including balance changes, percentage of hands won/ lost, etc.
      </li>
    </ul>
    </div>
    </>
  )
}


export function JeopardyFeatures() {
  return (
    <>
    <div id="score-account" className='indv-projects'>
    <video className="feature-videos" src="images/jeopardyvideo.mov" autoPlay controls style={{width: "90%"}}/>
    </div>
    <div className="indv-projects-text">
    <h2 style={{color:"rgba(255,255,255,0.5)"}}>Jeopardy Features</h2>
    <ul id="features-list">
      <li>
      Multi-player rendition of the classic game show <i>Jeopardy!</i>, featuring clues from past episodes using the <a href="https://jservice.io/">JService API</a>
      </li>
      <li>
      Utilizes WebSocket protocol to enable real-time communication and a seemless gaming interface
      </li>
      <li>
      Response validation integrates Levenshtein distance algorithm to measure string similarity between a user's answers and the correct response. Includes modifications to allow for some differences in spelling and structure while still ensuring responses are accurately verified
      </li>
    </ul>
    </div>
    </>
  )
}

export function GofishFeatures() {
  return (
<>
    <div id="score-account" className='indv-projects'>
    <video className="feature-videos" src="images/gofish-video.mov" autoPlay controls style={{width: "90%"}}/>
    </div>
    <div className="indv-projects-text">
    <h2 style={{color:"rgba(255,255,255,0.5)"}}>Go Fish Features</h2>
    <ul id="features-list">
      <li>
      Multi-player Go Fish card game
      </li>
      <li>
      Utlizes WebSocket protocol for game logic, chat feature, and friend requests sent to other users in the game
      </li>
      <li>
      more stuff
      </li>
    </ul>
    </div>
    </>
  )
}
