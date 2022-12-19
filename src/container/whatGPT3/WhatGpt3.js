import React from 'react'
import Features from "../../components/feature/Feature"
import "./WhatGpt3.css"

const WhatGpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin">
        <div className="gpt3__whatgpt3-feature">
            <Features  title = "What is GPT-3" text = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam dolor consectetur. Labore aliquam corporis modi eum libero blanditiis , , recusandae optio temporibus facere possimus, eius fuga dolores consectetur itaque quasi." />
        </div>
        <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">The possibilities are beyound your imagination</h1>
            <p>Explore the library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
            <Features title = "Chatboxs" text = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam dolor consectetur. Labore aliquam corporis modi eum libero blanditiis"  />
            <Features  title = "KnowlegdeBase" text = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam dolor consectetur. Labore aliquam corporis modi eum libero blanditiis" />
            <Features title = "Education" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam dolor consectetur. Labore aliquam corporis modi eum libero blanditiis"  />
        </div>
    </div>
  )
}

export default WhatGpt3
