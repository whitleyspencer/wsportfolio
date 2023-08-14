import React from 'react';
import { useState } from "react";
import { GrLinkedin } from "react-icons/gr";
import {AiOutlineMail} from "react-icons/ai"
import {GrCopy} from "react-icons/gr"
import {VscTriangleUp} from "react-icons/vsc"

// import { useForm, ValidationError} from '@formspree/react';

export default function ContactForm() {
  const [messageSent, setMessageSent] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  const [formData, setFormData] = useState({
    "name":"",
    "email": "",
    "message": ""
  })


  const handleFormChange = (e)=> {
    e.preventDefault()
    const value = e.target.value
    const field= e.target.name
    setFormData({...formData, [field]:value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch(
      "https://formspree.io/f/mgejandv",
      {
        method:"POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json'
        }
      }
    )
    console.log(response)
    if (response.ok) {
      setFormData({
        "name":"",
        "email": "",
        "message": ""
      })
      setMessageSent(true)
    }

  }

    return (
      <section id="contact" style={{textAlign:"center", marginTop:"75px", paddingTop:"10px", height:"fitcontent", paddingBottom:"10px"}}>
        <h2>Contact</h2>
        {messageSent && <h4>Thanks for reaching out!</h4>}
        <div style={{display:"grid", gridTemplateColumns:".5fr 1fr", paddingLeft:"100px", paddingRight:"100px", marginTop:"20px", alignItems:"center"}}>

          <div style={{marginTop:"-200px"}}>
            <h2 style={{color:"white", letterSpacing:".1em", paddingBottom:"10px"}}>Whitley Spencer</h2>
            <h6 style={{color:"lightgrey", display:"flex", justifyContent:"center"}}>
            <button
                     onClick={()=> {setShowEmail(!showEmail)}}
                     className={`tooltip ${showEmail && "show-email"}`}
                     style={{fontSize:"24px", color:"#11ABB0", padding:"3px", backgroundColor:"rgba(0,0,0,0)", margin:"0px"}}>
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
              <a href="https://www.linkedin.com/in/whitley-spencer/" target="_blank" style={{fontSize:"20pt", paddingLeft:"10px"}}>
                <GrLinkedin />
              </a>
            </h6>
          </div>

        <form >
        <label htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value ={formData.name}
          onChange={handleFormChange}
        />
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value ={formData.email}
          onChange={handleFormChange}
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value ={formData.message}
          onChange={handleFormChange}
          style={{height:"100px"}}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
    </section>
  );
}
