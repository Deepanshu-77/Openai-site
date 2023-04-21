import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.jpg'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility_image">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__possibility_content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae, amet illo blanditiis nihil incidunt nam delectus? Suscipit sit ut natus rerum, nesciunt ipsa libero fugiat animi corrupti distinctio iste blanditiis quas ea aspernatur illo vero maiores numquam hic eveniet!</p>
        <h4>Request Early Access to Get Started</h4>
      </div> 
    </div>
  )
}


export default Possibility
