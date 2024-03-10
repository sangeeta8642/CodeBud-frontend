import "../Css Files/Profile.css"
import React, { useEffect, useState } from 'react'
import UserPic from "../images/User.png"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function Profile() {
  const userData = JSON.parse(localStorage.getItem("user"))
  const [user, setUser] = useState([])
  const [userImage, setUserImage] = useState(null)
const nav=useNavigate();

  useEffect(() => {
    getProfilePic()
  }, [])

async function getProfilePic() {
  if (userData) {
    try {
      let result = await fetch(`http://localhost:5000/getProfile/${userData._id}`);
      if (!result.ok) {
        throw new Error('Failed to fetch profile data');
      }
      result = await result.json();
      console.log(result.image);
      setUser(result);
      if (result.image && result.image.data) {
      //   const imageUrl = `data:${result.image.contentType};base64,${Buffer.from(result.image.data.data).toString('base64')}`;
        setUserImage(result.image);

      } 
       else {
        setUserImage(UserPic); // Assuming UserPic is a default profile picture
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  }
}

function getImageSource(imageData) {
  if (!imageData || !imageData.Data || !imageData.Data.data) {
    return '';
  }

  // Convert the raw image data to base64
  const base64String = arrayBufferToBase64(imageData.Data.data);

  if (base64String) {
    console.log(base64String,"image ");
    return `data:${imageData.contentType};base64,${base64String}`;

  }
  return '';
}

function arrayBufferToBase64(buffer) {
  const binary = new Uint8Array(buffer);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary[i];
  }

  return btoa(String.fromCharCode.apply(null, bytes));
}


// }

//   async function getImage() {
//     if (userData) {
//       try {
//         const response = await fetch(`http://localhost:5000/userImage/${userData._id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch image');
//         }
//         const blob = await response.blob();
//         const imageUrl = URL.createObjectURL(blob);
//         setUserImage(imageUrl);
//       } catch (error) {
//         console.error('Error fetching image:', error);
//       }
//     }
//   }

  // async function getImage(){
  //   if(userData){
  //     let result = await fetch(`http://localhost:5000/userImage/${userData._id}`)
  //     result = await result.json()
  //     console.log(result);
  //     // setUser(result)
  //     // setUserImage(result.image)
  //     const imageData = result.data;
        
  //       if (imageData && imageData.length > 0) {
  //         const imageSrc = `data:${userData.image.contentType};base64,${Buffer.from(userData.image.data).toString('base64')}`;
  //         setUserImage(imageSrc);
  //       } else {
  //         // If image data is empty, set a default image or display a placeholder
  //         setUserImage(UserPic);
  //       }
  //   }
  // }
    // console.log(user);


  return (
    <div className="profilePage">
      <div className="profileDiv" >
        <div className="profileTop">
          <div className="profilePic">
            <img src={getImageSource(userImage)} />
                        {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="10em" width="10em" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg> */}
            
          </div>
          <div className="profileName" >

             <h1>Your Information</h1>
            <h2>{user.username}</h2>

            <Button variant="warning" onClick={()=>{nav(`/updateProfile/${user._id}`)}} >Edit Profile</Button>
          </div>
        </div>

        <div className="profileInfo">
          <div className="Details">
            <h4>Bio:</h4>
            {!user.bio ? <p style={{ fontWeight: "lighter", color: "grey" }}>empty</p> : <p>{user.bio}</p>}

            <br />
            <h4>Name:</h4>
            <p>{user.Fname} {user.Lname}</p>
            <br />
            <h4>Profession:</h4>
            <p>{user.profession}</p>
            <br />
            <h4>Email:</h4>
            <p>{user.email}</p>
            <br />
            <h4>Contact:</h4>

            <p>+91 {user.mobile}</p>
            <br />
            <h4>Conpleted Languages:</h4>
            <p>C, C++, Python</p>
          </div>


        </div>
      </div>
    </div>
  )
}
