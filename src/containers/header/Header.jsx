import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header_content">
        <h1 className="gradient__text">
          Let's Build Something amazing with AI using OpenAI
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi eos unde eius est perferendis dicta, omnis vel vero voluptatem maxime repudiandae atque labore at, cumque culpa perspiciatis error quisquam quaerat cum assumenda sapiente voluptas possimus illo? Natus, pariatur veritatis.</p>
        <div className="gpt3__header_content__input">
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header_content__people">
          <img src={people} alt="people" />
          <p>2,000 people requested access in last 24 hours </p>
          </div>
        </div>
        <div className="gpt3__header_image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header
