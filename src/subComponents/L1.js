import React from 'react'
import C from "../images/c-programming-language-logo.png"
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function L1(props) {
//    let image=props.image
const nav=useNavigate()
    return (
        <div className='language'>
            <div className='LanguageLogo'><img src={props.image} onClick={()=>{
                nav(`/${props.name}`)
            }} height="200vh" width="200vw" /></div>
            <div className='LanguageIntro'><h5>{props.intro}</h5>
            <Button variant="success" onClick={()=>{
                nav(`/${props.name}`)
                // console.log(nav(`/${props.name}`));
            }}>Let's Learn..!! </Button>
            </div>
        </div>
    )
}
