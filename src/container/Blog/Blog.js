import React from 'react'
import Article from "../../components/Articles/Article"
import Blog01 from "../../assets/blog01.png"
import Blog02 from "../../assets/blog02.png"
import Blog03 from "../../assets/blog03.png"
import Blog04 from "../../assets/blog04.png"
import Blog05 from "../../assets/blog05.png"
import "./Blg.css"

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot of Happening , We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
            <Article imgUrl={Blog01} date="26 sep 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
            <Article imgUrl={Blog02} date="26 sep 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article imgUrl={Blog03} date="26 sep 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article imgUrl={Blog04} date="26 sep 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article imgUrl={Blog05} date="26 sep 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
