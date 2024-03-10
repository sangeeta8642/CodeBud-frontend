import React from 'react'
import { Button } from 'react-bootstrap'

export default function IntroScreens({ scrollToElement }) {
    return (
        <div >
            {/* <h1></h1> */}
            <h3> Hey Programmer...!!</h3>
            <p>Well even you are not familier with coding, being curious to learn it, is enough to make you "The Programmer".
                So, you are a programmer too.</p>
            <p> And here you are landed on the plateform which created for those people who are genuanly
                want to learn progeamming language and be a better or even best programmer, Like You.</p>

            <p> But why learn here??</p>
            <p> Because we, the IT students(who have faced all the problems like you)
                knows how exactly will come at the path of learnig coding, so we have
                decided to work on this and make the coding learnig path easier.</p>
            <p>We are providing the "top scoping" tutorial in understandable and easy English in comletely free of cost..</p>

            <p> The main intention behind our WORK is</p>
            <p>To let you know how easily you can start coding or learn new language.</p>
            <p>And clear your mind with questions such as "what to learn??", "How to learn??",
                "Is it even useful to learn??" even if you have learnt "How will remember??"</p>

            <p>So, without wasting much time, lets get start your coding journey with us.</p>
            <Button variant="dark" style={{height:"6vh"}} onClick={() => scrollToElement('screen2')}>Let's Get Started..!!</Button>{' '}

        </div>
    )
}
