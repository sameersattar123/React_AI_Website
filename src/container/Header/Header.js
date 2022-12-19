import React from 'react'
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
import "./Header.css"



const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
    <div className='gpt3__header-content'>
      <h2 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque reiciendis, sequi, officia repellendus obcaecati, nisi dicta commodi laudantium rem beatae magni repudiandae totam id blanditiis illum culpa odit dolor!</p>
      <div className='gpt3__header-content__input'>
      <input type="email" placeholder='Enter your Email Address' />
      <button type='button'>Get Started</button>
      </div>
      <div className='gpt3__header-content__people'>
      <img src={people} alt="" />
      <p>
      1,600 people requested access a visit in last 24 hours
      </p>
      </div>
    </div>
    <div className='gpt3__header-image'>
      <img src={ai} alt=""/>
    </div>
    </div>
  )
}

export default Header