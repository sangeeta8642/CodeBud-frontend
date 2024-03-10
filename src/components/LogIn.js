import "../Css Files/LogIn.css"
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function LogIn({ onClose, onSignupClick }) {
    const [uname, setUname] = useState("");
    const [pswrd, setPswrd] = useState("");
    const nav = useNavigate();

    const handleClose = () => {
        onClose(); // Call the onClose function passed as a prop to close the login component
    };

    const handleSignup = () => {
        onClose();
        onSignupClick()
    }

    const Login = async () => {
        if (uname == '' || pswrd == '') {
            alert("Please fill requried fields..")
        }
        else {
            let data = { username: uname, password: pswrd }
            let result = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if (result.status === 404) {
                alert("User Not Found")
            }
            else if (result.status === 409) {
                alert("Please..!! Enter Valid Password")
            }
            else {
                result = await result.json();
                // console.log(result.authToken);
                localStorage.setItem("user", JSON.stringify(result.user));
                localStorage.setItem("token", JSON.stringify(result.authToken));

                handleClose();
                alert("Login Successfull..!!")
            }
        }


    }

    return (
        <div className='signuppage'>
            <div className='form signupdiv'>
                <button className='close-button' onClick={handleClose}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></button>

                <form >
                    <div className="table-container">
                        <table >

                            <tr>
                                <td>
                                    <h1>Log In</h1>
                                </td>
                            </tr>


                            <br />
                            <tr>
                                <td>
                                    <p>Username: *<br />
                                        <input type='text' value={uname} onChange={(e) => { setUname(e.target.value) }} /></p>
                                </td>


                            </tr>
                            <br />
                            <tr>

                                <td>
                                    <p>Password: *<br />
                                        <input type='text' value={pswrd} onChange={(e) => { setPswrd(e.target.value) }} /></p>
                                    <p>Forget Password?</p>
                                </td>
                                <td>
                                </td>

                            </tr>
                            <br />

                            <tr>

                                <td>
                                    <Button variant='success' onClick={Login}>LogIn</Button>

                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <p style={{ cursor: "pointer", width: "max-content", fontSize: "20px" }}> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z"></path></svg> Signup with google</p>
                                </td>
                            </tr>
                            <br />
                            <tr>

                            </tr>
                            <tr>

                                <td>
                                    <p style={{ fontSize: "20px" }}>Not a member?<span style={{ color: "#228b22", cursor: "pointer" }} onClick={() => {
                                        // nav("/signup")
                                        handleSignup()
                                    }}>SignUp</span></p>

                                </td>

                            </tr>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    )
}
