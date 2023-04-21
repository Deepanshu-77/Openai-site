import React from 'react'
import './footer.css'
// import gpt3Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer_heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer_btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer_links">
        <div className='gpt3__footer_links_logo'>
          <h1>OpenAI</h1>
          <p>Nizhniy Novgorod CHaadaeva Ul., bld. 50, appt. 43 </p>
        </div>
        <div className="gpt3__footer_links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>

        </div>
        <div className="gpt3__footer_links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>

        </div>
        <div className="gpt3__footer_links_div">
          <h4>Get in touch</h4>
          <p>izhniy Novgorod CHaadaeva Ul., bld. 50, appt. 43 </p>
          <p>077889662</p>
          <p>info@gmail.com</p>

        </div>
      </div>
      <div className="gpt3__footer_copyright">
        <p> © 2023 GPT. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
