import React, { Component } from 'react';
import resumeData from '../resumeData';

export default function Footer() {


    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          {/* <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul> */}

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#about"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
