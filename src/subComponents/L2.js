import React from 'react'
import CC from "../images/c++.png"
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function L2(props) {
    const nav=useNavigate()
    return (
        <div className='language'>
            <div className='LanguageIntro'><h5>{props.intro}</h5>
            <Button variant='success' onClick={()=>{
                nav(`/${props.name}`)
            }}>Let's Learn..!!</Button>
            </div>
            <div className='LanguageLogo'><img src={props.image} height="200vh" onClick={()=>{
                nav(`/${props.name}`)
            }} width="200vw" /></div>
        </div>
    )
}
