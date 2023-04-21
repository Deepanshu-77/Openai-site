import React from 'react'
import './whatgpt.css'
import { Feature } from '../../components'

const Whatgpt = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3_feature">
        <Feature title='What is OpenAI' text='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo recusandae mollitia id quidem nulla labore quo qui ex dicta fuga inventore ipsam, saepe cumque temporibus, cupiditate, animi quibusdam quis. Repellendus, omnis eos. Sunt, vel?' />


      </div>
      <div className='gpt3__whatgpt3_heading'>
        <h1 className='gradient__text'>The possibility are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3_container'>
        <Feature title='Chatbots' text=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus neque eos doloremque quod fugiat nesciunt odio id reiciendis, qui a?' />
        <Feature title='Knowledgebase' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, alias aliquam numquam recusandae ab animi laborum corrupti rem ex velit.' />
        <Feature title='Education' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, alias aliquam numquam recusandae ab animi laborum corrupti rem ex velit asdasd asd as.' />
      </div>
    </div>
  )
}


export default Whatgpt
