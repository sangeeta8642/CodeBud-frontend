import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Screen3 from './screens/Screen3';
import Python from './Languages/Python';
import Cpp from "./Languages/Cpp/cpp"
import Java from "./Languages/java"
import JS from "./Languages/JS"
import ContentPage from './CommonConcepts/ContentPage';
import C from "./Languages/C/C"
import Introductioncpp from './Languages/Cpp/Introduction'
import Concepts from './Languages/C/Concepts';
import Intro from './Languages/C/Intro';
import ReactNavBar from './components/ReactNavBar';
import Protected from './components/Protected';
import Private from './components/Private';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Help from './components/Help';
import UpdateProfile from './CommonConcepts/UpdateProfile';

// import Intro from "./Languages/C/Intro"
// import { lazy } from 'react';
// import Intro from "./Languages/C";
// import Intro from './Languages/Cpp/Intro';

function App() {
  const C_Concepts = [
    'Introduction to C',
    'Basics Of C',
    'Variables, Constants and Keywords Of C',
    'Datatypes Of C',
    'Operators Of C',
    'ControlFlow Of C',
    'Functions Of C',
    'Array And Strings Of C',
    'Pointers And Memory Of C',
    'Structures And Unions Of C',
    'File Handling Of C',
    'Error Handling Of C',
    'Advanced Topics Of C',
  ];

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Protected />} >
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>
          <Route element={<Private/>}>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/updateProfile/:id' element={<UpdateProfile/>} />
          </Route>

          <Route path='/s3' element={<Screen3 />} />

          <Route path='/python' element={<Python />} />

          <Route path='/c++' element={<Cpp />} />
          <Route path='/c++/Introduction' element={<Introductioncpp />} />

          <Route path='/C' element={<C />} />
          {C_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`C/${concept}/*`}
              element={<Concepts conceptType={concept} />}
            />
          ))}


          <Route path='/js' element={<JS />} />

          <Route path='/java' element={<Java />} />





            <Route path='/aboutUs' element={<AboutUs/>} />
            <Route path='/contactUs' element={<ContactUs/>} />
            <Route path='/help' element={<Help/>} />
          {/* npm install -g react-devtools */}
          {/* <Route path='/*' element={<h1>Page Not Found</h1>}/> */}

        </Routes>

      </BrowserRouter>
      {/* <Intro/> */}
      {/* <Intro/> */}
    </div>
  );
}

export default App;
