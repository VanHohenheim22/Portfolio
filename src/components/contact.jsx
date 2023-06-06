import React, { useRef } from 'react'
import "../styles/contact.css"

const Contact = () => {

  const emailAddress = "jhongonzalez10-03@hotmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <>
        <div className="contact_container" id='contact'>
            <h3>Contac me!</h3>
            <div className="contacts">
              <div className="contacta"><a target='_blank' href="https://www.linkedin.com/in/alex-an-a28803232/"><i className='bx bxl-linkedin-square'></i></a><br /> Linkedin</div>

              <div className="contacta"> <a target='_blank' href="https://github.com/VanHohenheim22"><i className='bx bxl-github'></i></a> <br /> Github</div>

              <div className="contacta">
                <i className="bx bxs-envelope" onClick={handleEmailClick}></i> <br /> Email
              </div>
              
            </div>
            
        </div>
    </>
  )
}

export default Contact