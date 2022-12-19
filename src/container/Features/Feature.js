import React from 'react'
import Features from "../../components/feature/Feature"
import "./feature.css"


const FeaturesData = [
{
    title : "improving and distrusts instantly",
    text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptates, odit earum distinctio fuga soluta ipsum facere fugiat vero consequatur mollitia architecto possimus repudiandae debitis ullam qui molestiae omnis! Aut?"
},
{
    title : "Become the tended active",
    text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptates, odit earum distinctio fuga soluta ipsum facere fugiat vero consequatur mollitia architecto possimus repudiandae debitis ullam qui molestiae omnis! Aut?"
},
{
    title: "Message or am nothing" ,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptates, odit earum distinctio fuga soluta ipsum facere fugiat vero consequatur mollitia architecto possimus repudiandae debitis ullam qui molestiae omnis! Aut?"
},
{
    title: "Really boy law country" ,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptates, odit earum distinctio fuga soluta ipsum facere fugiat vero consequatur mollitia architecto possimus repudiandae debitis ullam qui molestiae omnis! Aut?"
},
]

const Feature = () => (
    <div className="gpt3__features section__padding">
        <div className="gpt3__features-heading">
            <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
            <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__features-container">
            {
                    FeaturesData.map((item ,index) => (
                    <Features title = {item.title} text ={item.text} key={item.title + index} />
                ))
            }
        </div>
    </div>
)

export default Feature

