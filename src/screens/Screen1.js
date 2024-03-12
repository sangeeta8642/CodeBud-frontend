import "../Css Files/Screen1.css"
import { Button } from 'react-bootstrap'
import React from 'react'
import img from "../images/workplace.png"
import { Element } from "react-scroll"

export default function Screen1() {
    return (
        <Element name="screen1">
        <div className='screen1'>
            <div className="introHeader">
                <h1>Welcome To The World's Best Coding Platform</h1>
                <p>“   Break the code barrier with us! [Your Website Name] invites you to a realm where learning is exciting, coding is an art, and your journey to mastery begins now."</p>
                {/* <Button variant="info">Explore More..!!</Button> */}
            </div>
            <div className="introImg">
                <img src={img} />
            </div>
        </div>
         </Element>
    )
}
