import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import "../Css Files/UpdateProfile.css"

export default function UpdateProfile() {



  const [selectedImage, setSelectedImage] = useState(null);
  const params = useParams()
  const [fname, setfname] = useState("")
  const [lname, setLname] = useState("")
  const [profession, setProfession] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [image, setImage] = useState({})
  const [mob, setMob] = useState("")
  const [uname, setUname] = useState("")
  const userData = JSON.parse(localStorage.getItem("user"))
  const nav = useNavigate()
  const [userInfo, setUserInfo] = useState({
    Fname: "",
    Lname: "",
    profession: "",
    email: "",
    mobile: "",
    bio: "",
    username: "",
    image: null

  })

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserInfo({
      ...userInfo,
      image: file
    });
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };


  // const handleImageSelected = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setSelectedImage(file);
  //   }
  // };

  useEffect(() => {
    getProfilePic()
  }, [])

  async function getProfilePic() {
    if (userData) {
      let result = await fetch(`http://localhost:5000/getProfile/${params.id}`)
      result = await result.json()
      console.log(result);
      setUserInfo({
        Fname: result.Fname,
        Lname: result.Lname,
        bio: result.bio,  
        profession: result.profession,
        username: result.username,
        mobile: result.mobile,
        email: result.email
      });
      // setImage(result.image)
      getImage()
    }
  }

  async function getImage() {
    if (userData) {
      try {
        const response = await fetch(`http://localhost:5000/userImage/${userData._id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
        
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }
  }
  async function updateUser() {
    const { Fname, Lname, username, image, email, bio, profession } = userInfo;
  
    const formData = new FormData();
    formData.append("image", image);
    formData.append("Fname", Fname);
    formData.append("Lname", Lname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("profession", profession);
    formData.append("bio", bio);
  
    try {
      let result = await fetch(`http://localhost:5000/updateProfile/${params.id}`, {
        method: "POST",
        body: formData
      });
  
      if (result.ok) {
        result = await result.json();
        console.log(result);
        alert("Profile Updated Successfully");
        nav("/profile");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  }

  

  // async function updateProfile() {
  //   const data = { username: uname, Fname: fname, Lname: lname, email, profession, mobile: mob, bio };

  //   try {
  //     const response = await fetch(`http://localhost:5000/updateProfile/${params.id}`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data)
  //     });

  //     if (!response.ok) {
  //       throw new Error("Error updating profile.");
  //     }

  //     if (selectedImage) {
  //       const formData = new FormData();
  //       formData.append("image", selectedImage);

  //       const imageResponse = await fetch(`http://localhost:5000/uploadImage/${params.id}`, {
  //         method: "POST",
  //         body: formData,
  //       });

  //       if (!imageResponse.ok) {
  //         throw new Error("Error uploading image.");
  //       }
  //     }

  //     alert("Profile updated successfully.");
  //     nav(`/profile`);
  //   } catch (error) {
  //     console.error("Error updating profile:", error);
  //     alert("Error updating profile.");
  //   }
  // }

  return (

    <div className="profilePage">
      <div className="profileDiv" >
        <br></br>
        {/* <h4>Upload Image:</h4> */}
        <div className='profile-table-container'>
          <table>
            <tr>
              <td>
                <h1>Edit Profile</h1>

              </td>
            </tr>
            <br></br>
            <br></br>
            <tr>
              <td>
                <label htmlFor="imageUpload" style={{ cursor: 'pointer' }}>
                  <h4 style={{ textDecoration: "underline" }} >Upload an image:</h4>
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </label>

              </td>
              <td>
                {selectedImage && (
                  <div>
                    {/* <h2>Selected Image:</h2> */}
                    <img src={selectedImage} alt="Selected" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />{" "}
                    <Button variant='danger' onClick={() => { setSelectedImage(null) }}>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                      </svg>
                    </Button>
                  </div>
                )}
              </td>
            </tr>
            <br />
            <br />

            <tr>
              <td>
                <h4>Bio:</h4>
                <input type='text' value={userInfo.bio} name="bio" onChange={handleChange} />
              </td>
              <td>
                <h4>Username:</h4>
                <input type='text' value={userInfo.username} name='username' onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td>

              </td>
            </tr>

            <tr>
              <td>
                <h4>First Name:</h4>
                <input type='text' value={userInfo.Fname} name='Fname' onChange={handleChange} />
              </td>
              <td>
                <h4>Last Name:</h4>
                <input type='text' value={userInfo.Lname} name='Lname' onChange={handleChange} />
              </td>
            </tr>
            <td>
              <h4>Email:</h4>
              <input type='text' value={userInfo.email} name='email' onChange={handleChange} />
            </td>
            <td>
              <h4>profession:</h4>
              <input type='text' value={userInfo.profession} name='profession' onChange={handleChange} />
            </td>
            <tr>

            </tr>
            <tr>
              <td>
                <h4>Mobile:</h4>
                <input type='text' value={userInfo.mobile} name='mobile' onChange={handleChange} />
              </td>
              <td>
                <Button variant='info' onClick={updateUser} >Update</Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
