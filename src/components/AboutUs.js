import React from 'react';
import "../Css Files/AboutUs.css";
import { Element } from 'react-scroll';
import Footer from "./Footer";

export default function AboutUs() {
    return (
        <div>
            <Element name="aboutUs">
        {/* <div id="target">I'm the target element</div> */}
            <section className='aboutUs' id='aboutUs'>
                <header>
                    <h1>About Us</h1>
                </header>
                <br /><br />
                <article>
                    <p>We are a dedicated team of IT students who have created CodeBud <br />with the aim of making coding accessible to everyone. Our journey with CodeBud began with a <br />simple idea: to create a platform where learning to code is not only educational but also enjoyable.</p>
                    <br /> <p>Think back to when you first started coding. Do you remember the confusion and frustration?<br /> We certainly do. We faced the same challenges - the overwhelming amount of information,<br /> the fear of failure, the uncertainty of where to begin.</p>
                    <br /><p>With CodeBud, we've set out to eliminate those barriers. <br />The platform offers a wide range of resources, from interactive tutorials to hands-on<br /> projects, all designed to cater to different learning styles and skill levels.</p>
                    <br /><p>But CodeBud is more than just a learning platform; it's a community. <br />A place where beginners can find support and encouragement from experienced developers,<br /> and where seasoned coders can share their knowledge and expertise.</p>
                    <br /><p>Our mission is simple: to empower individuals from all walks of life to unlock their potential through coding.<br /> Whether you're a student looking to build a career in tech or someone simply curious about<br /> the world of programming, CodeBud is here to guide you on your journey.</p>
                    <br /><p>So come join us and discover the joy of coding with CodeBud.<br /> Together, let's turn your dreams into code!</p>
                </article>
            </section>
            {/* <Footer /> */}
            </Element>

        </div>
    );
}
