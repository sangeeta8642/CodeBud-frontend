import "../Css Files/ConceptMap.css"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Concepts from '../Languages/C/Concepts'

export default function ConceptMap(props) {
    const nav = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    const C_Concepts = props.C_Concepts
    const languageName = props.language
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics();
    }, [])


    async function getTopics() {
        if (user) {
            const userId = user._id
            let data = { userId, languageName }
            console.log(data);
            let result = await fetch("http://localhost:5000/getTopics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            result = await result.json()
            setTopics(result)
              console.log(topics);

        }
        else {
            setTopics([])
        }
    }
    // console.log(topics);
    return (

        <div className='conceptPage'>
            <div className='conceptDiv'>
                <h1>Concepts of {props.language}</h1>
                <div className='concepts'>
                    <div className='concept' onClick={() => {
                        nav(`/${props.language}/${C_Concepts[0]}`)
                    }}>
                        <h5>{C_Concepts[0]}</h5>
                    </div>



                    {topics.includes(C_Concepts[0]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[1]}`);
                        }}>
                            <h5>{C_Concepts[1]}</h5>
                        </div>
                    )} 


                    {topics.includes(C_Concepts[1]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[2]}`);
                        }}>
                            <h5>{C_Concepts[2]}</h5>
                        </div>
                    )}

                    {topics.includes(C_Concepts[2]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[3]}`);
                        }}>
                            <h5>{C_Concepts[3]}</h5>
                        </div>
                    )}

                    {topics.includes(C_Concepts[3]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[4]}`);
                        }}>
                            <h5>{C_Concepts[4]}</h5>
                        </div>
                 )} 


                    {topics.includes(C_Concepts[4]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[5]}`);
                        }}>
                            <h5>{C_Concepts[5]}</h5>
                        </div>
                    )}

                    {topics.includes(C_Concepts[5]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[6]}`);
                        }}>
                            <h5>{C_Concepts[6]}</h5>
                        </div>
                    )}

                    {topics.includes(C_Concepts[6]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[7]}`);
                        }}>
                            <h5>{C_Concepts[7]}</h5>
                        </div>
                    )}

                    {topics.includes(C_Concepts[7]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[8]}`);
                        }}>
                            <h5>{C_Concepts[8]}</h5>
                        </div>
                    )}

                    {topics.includes(C_Concepts[8]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[9]}`);
                        }}>
                            <h5>{C_Concepts[9]}</h5>
                        </div>
                    )}

                    {topics.includes(C_Concepts[9]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[10]}`);
                        }}>
                            <h5>{C_Concepts[10]}</h5>
                        </div>
                    )}

                    {topics.includes(C_Concepts[10]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[11]}`);
                        }}>
                            <h5>{C_Concepts[11]}</h5>
                        </div>
                    )}

                    {topics.includes(C_Concepts[11]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[12]}`);
                        }}>
                            <h5>{C_Concepts[12]}</h5>
                        </div>
                     )} 

{topics.includes(C_Concepts[12]) && (
                        <div className='concept' onClick={() => {
                            nav(`/${props.language}/${C_Concepts[13]}`);
                        }}>
                            <h5>{C_Concepts[13]}</h5>
                        </div>
                     )} 


                    {/* <div className='concept' onClick={() => {
                        nav(`/${props.language}/${C_Concepts[6]}`);
                    }}>
                        <h5>{C_Concepts[6]}</h5>
                    </div>

                    <div className='concept' onClick={() => {
                        nav(`/${props.language}/${C_Concepts[7]}`);
                    }}>
                        <h5>{C_Concepts[7]}</h5>
                    </div>

                    <div className='concept' onClick={() => {
                        nav(`/${props.language}/${C_Concepts[8]}`);
                    }}>
                        <h5>{C_Concepts[8]}</h5>
                    </div>

                    <div className='concept' onClick={() => {
                        nav(`/${props.language}/${C_Concepts[9]}`);
                    }}>
                        <h5>{C_Concepts[9]}</h5>
                    </div>

                    <div className='concept' onClick={() => {
                        nav(`/${props.language}/${C_Concepts[9]}`);
                    }}>
                        <h5>{C_Concepts[10]}</h5>
                    </div>

                    <div className='concept' onClick={() => {
                        nav(`/${props.language}/${C_Concepts[9]}`);
                    }}>
                        <h5>{C_Concepts[11]}</h5>
                    </div>

                    <div className='concept' onClick={() => {
                        nav(`/${props.language}/${C_Concepts[9]}`);
                    }}>
                        <h5>{C_Concepts[12]}</h5>
                    </div>
 */}


                </div>
            </div>
        </div>
    )
}

