import React from 'react';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdWorkOutline} from "react-icons/md"
import {LiaCertificateSolid} from "react-icons/lia"
import "./timeline.css"
import {MdOutlineSchool} from "react-icons/md"
import {HiOutlineDocumentText} from "react-icons/hi";

export default function ResumeTimeline () {
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
        <section  id="timeline">
    <div className='resume-timeline-container' style={{backgroundColor:"black", paddingTop:"60px"}}>
        <div style={{padding:"0px", width:"70vw" }}>
            <div className='experience-header' style={{width: "95%", margin:"0 auto"}}>
                <div className='experience-line'>
                    <p></p>
                    <p style={{borderTop: "4px solid white", borderLeft:"4px solid white", marginLeft:"18px", marginBottom:"0px", color:"black"}}>no content</p>
                </div>
                <div className='experience-line'>
                    <p></p>
                    <p style={{borderTop: "4px solid white", marginBottom:"0px", color:"black"}}>no content</p>
                </div>
                <div   style={{textAlign:"center", color:"#979494", paddingRight:"10vw"}}>
                <h1 style={{marginBottom:"0px"}}>
                    Experience
                    <button
                     style={{fontSize:"22px", color:"lightgrey", backgroundColor:"rgba(0,0,0,0)", padding:"0px", margin:"0px", marginLeft:"10px"}}
                     onClick={handleResumeDownload}
                  >
                        <HiOutlineDocumentText />
                     </button>
                </h1>
                </div>
            </div>
            <VerticalTimeline layout='1-column-left'>
                <SeirTimeline />
                <CertificationTimeline />
                <PccTimeline />
                <EducationTimeline />

            </VerticalTimeline>
            </div>
            <div  style={{textAlign:"right", marginRight:"50px"}}>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#portfolio" style={{fontSize:"24pt"}}><i className="icon-down-circle"></i></a>
                </p>
         </div>
    </div>
    </section>
    )
}

function SeirTimeline() {
    return (
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{  padding:"0px", color: '#fff', height:"fitcontent" }}
        contentArrowStyle={{borderRight: '7px solid  lightgrey' }}
        iconStyle={{ background: '#9EC1CF', color: 'black' }}
        style={{ height:"auto"}}
        icon={<MdWorkOutline />}
    >
        <div className='subtitle-row'>
            <h5 className="vertical-timeline-element-title timeline-header">Software Engineering Immersive Resident</h5>
            <h6 className='timeline-items-date'>April 2023-Present</h6>
        </div>
        <h6 className="vertical-timeline-element-subtitle timeline-items-subtitle" style={{color:"black"}}>Galvanize - Hack Reactor</h6>
        <ul style={{fontSize:"12pt"}} className="timeline-items-list">
        <li>Resolve individual help desk tickets by providing guidance and technical support to over 100 students</li>
        <li>Provide technical mentoring to students, conducting one-on-one and small group whiteboarding sessions</li>
        <li>Perform thorough code reviews on students' project work, offering constructive feedback to help them refine their coding abilities and meet industry standards</li>
        <li>Develop and deploy software updates to a live production environment for the Galvanize Student Information System</li>
        </ul>
    </VerticalTimelineElement>
    )
}
function CertificationTimeline () {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{height:"fitcontent", padding:"0px"}}
            iconStyle={{ background: '#9EE09E', color: 'black' }}
            icon = {<LiaCertificateSolid />}
            style={{height:"auto"}}
        >
            <div className='subtitle-row'>
                <h5 className="vertical-timeline-element-title timeline-header">Advanced Software Engineering Immersive Certificate</h5>
                <h6 className='timeline-items-date'>2022-2023</h6>
            </div>
            <h6 className="vertical-timeline-element-subtitle timeline-items-subtitle" style={{color:"black"}}>Hack Reactor</h6>
            <ul style={{fontSize:"12pt", paddingBottom:"0px"}} className="timeline-items-list">
            <li>Completed 774 hours of coursework in software engineering with Python and JavaScript</li>
            </ul>
            <p style={{fontSize:"11pt", color:"#313131", paddingTop:"2px", marginTop:"-17px", paddingLeft:"5px", borderTop:"1px dashed lightgrey"}}><span style={{fontWeight:"bold"}}>Curriculum highlights:</span> Python, JavaScript, SQL, multiple backend and frontend frameworks, algorithms, data structures, databases, networks, Domain Driven Design, deployment, version control, agile methodologies</p>
        </VerticalTimelineElement>
    )
}


function PccTimeline() {
    return (
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: '#FDFD97', color: 'black' }}
        contentStyle={{height:"fitcontent", padding:"0px"}}
        style={{height:"auto"}}
        icon={<MdWorkOutline />}
    >
        <div className='subtitle-row'>
            <h5 className="vertical-timeline-element-title timeline-header">Patient Care Coordinator</h5>
            <h6 className='timeline-items-date'>2019-2022</h6>
        </div>
        <h6 className="vertical-timeline-element-subtitle timeline-items-subtitle" style={{color:"black"}}>Outpatient Psychiatry Office</h6>
        <ul style={{fontSize:"12pt"}} className="timeline-items-list">
        <li>Managed outpatient care services for over 200 clients</li>
        <li>Analyzed neuropsychological evaluations and laboratory testing in order to provide the treating physician with a general synopsis, points of interest, and treatment considerations</li>
        </ul>
        <p style={{fontSize:"11pt", color:"#313131", marginTop:"-17px", paddingTop:"2px",  marginTop:"-17px", paddingLeft:"5px", borderTop:"1px dashed lightgrey"}}>
            <LiaCertificateSolid />NeuroStar Transcranial Magnetic Stimulation Certification {"("}2022{")"}
        </p>
    </VerticalTimelineElement>
    )
}

function EducationTimeline() {
    return (
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{height:"fitcontent", padding:"0px"}}
        iconStyle={{ background: '#FEB144', color: 'black' }}
        style={{height:"auto"}}
        icon={<MdOutlineSchool />}
    >
        <div className='subtitle-row'>
            <h5 className="vertical-timeline-element-title timeline-header">Education</h5>
            <h6 className='timeline-items-date'>2015-2019</h6>
        </div>

        <h6 className="vertical-timeline-element-subtitle timeline-items-subtitle" style={{color:"black"}}>
            University of South Carolina <span>{"("}2017-2019{")"}</span>
        </h6>
        <ul style={{fontSize:"12pt"}} className="timeline-items-list">
        <li><span>Major:</span> Biological Sciences</li>
        </ul>
        <h6 className="vertical-timeline-element-subtitle timeline-items-subtitle" style={{color:"black", marginTop:"-17px"}}>
            University of New Hampshire <span>{"("}2015-2017{")"}</span>
        </h6>
        <ul style={{fontSize:"12pt"}} className="timeline-items-list">
        <li><span>Major:</span> Biological Sciences</li>
        </ul>
    </VerticalTimelineElement>
    )
}
