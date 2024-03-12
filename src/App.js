import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Screen3 from './screens/Screen3';
import Python from './Languages/Python/Python';
import Cpp from "./Languages/Cpp/cpp"
import Java from "./Languages/Java/java"
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
import CppConcepts from './Languages/Cpp/Concepts'
import PyConcepts from './Languages/Python/Concepts'
import JavaConcepts from './Languages/Java/Concepts'

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

  const Cpp_Concepts = [
    'Introduction to C++',
    'Basics Of C++',
    'Variables, Constants and Keywords Of C++',
    'Datatypes Of C++',
    'Operators Of C',
    'ConditionalFlow of C++',
    'ControlFlow Of C',
    'Array And Pointers Of C',
    'Functions Of C',
    'OOPS',
    'Classes and Objects',
    'Encapsulation',
    'Abstarction',
    'Inheritance',
    'Polymorphism',
    'File handling',
    'Exception handling',
  ];

  const python_Concepts = [
    'Introduction to python',
    'Basics of python',
    'Memory and Variables',
    'Datatypes in python',
    'Operators in python',
    'Arrays in python',
    'Functions in python',
    'ConditionalFlow in python',
    'ControlFlow in python',
    'Lists in python',
    'Tuples in python',
    'Dictionaries in python ',
    'Oops in python',
    'Classes and objects in python',
    'Inheritance in python',
    'Encapsulation in python',
    'Abstraction in python',
    'Polymorphism in python',
    'Contructor and destructor',
    'File handling in python'
  ];

  
  const java_Concepts = [
    'Introduction to java',
    'Basics of java' ,
    'Access modifiers in java', 
    'Valuables constants and keywords in java',
    'Datatypes in java',
    'Operators in java',
    'Arrays in java',
    'Functions in java', 
    'Conditional flow in java',
    'Control flow in java',
    'Oops in java',
    'Classes and objects in java', 
    'Encapsulation in java', 
    'Inheritance in java', 
    'Polymorphism in java',
    'Abstraction in java', 
    'Constructor in java', 
    'Abstract classes in java', 
    'Interfaces in java', 
    'Enums in java',
    'Exception handling in java', 
    'Threads in java', 
    'File handling in java'
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

          <Route path='/Python' element={<Python />} />
          {python_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`Python/${concept}/*`}
              element={<PyConcepts conceptType={concept} />}
            />
          ))}

          <Route path='/c++' element={<Cpp />} />
          {Cpp_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`C++/${concept}/*`}
              element={<CppConcepts conceptType={concept} />}
            />
          ))}

          {/* <Route path='/c++/Introduction' element={<Introductioncpp />} /> */}

          <Route path='/C' element={<C />} />
          {C_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`C/${concept}/*`}
              element={<Concepts conceptType={concept} />}
            />
          ))}


          <Route path='/js' element={<JS />} />

          <Route path='/Java' element={<Java />} />
          {java_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`Java/${concept}/*`}
              element={<JavaConcepts conceptType={concept} />}
            />
          ))}




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
