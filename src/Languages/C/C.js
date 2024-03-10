import React from 'react'
import ConceptMap from '../../CommonConcepts/ConceptMap'


export default function C() {

  const language = "C"

  // const C_Concepts = [

  //   {
  //     name: 'Introduction to C',
  //     cases: [
  //       { value: 'Case1', data: 'Introduction Case 1 data' },
  //       { value: 'Case2', data: 'Introduction Case 2 data' },
  //       { value: 'Case3', data: 'Introduction Case 3 data' },
  //       { value: 'Case4', data: 'Introduction Case 4 data' },
  //       { value: 'Case5', data: 'Introduction case 5 data' },
  //       { value: 'Case6', data: 'Introduction case 6 data' },
  //       { value: 'LastCase', data: 'Introduction Last case data' },
  //     ],
  //     ques: [
  //       { q: "0What is your name ?", a: "Anthoni" },
  //       { q: "1What is your name ?", a: "Anthoni" },
  //       { q: "2What is your name ?", a: "Anthoni" },
  //       { q: "3What is your name ?", a: "Anthoni" },
  //       { q: "4What is your name ?", a: "Anthoni" }
  //     ]
  //   },
  //   {
  //     name : 'Basics Of C',
  //     cases : [
  //         { value: 'Case1', data: 'Basics Case 1 data' },
  //         { value: 'Case2', data: 'Basics Case 2 data' },
  //         { value: 'Case3', data: 'BasicsCase 3 data' },
  //         { value: 'Case4', data: 'BasicsCase 4 data' },
  //         { value: 'Case5', data: 'BasicsCase 5 data' },
  //         { value: 'LastCase', data: 'Basics Last case data' },

  //     ],
  //     ques : [
  //         { q: "0What is your name ?", a: "Anthoni" },
  //         { q: "1What is your name ?", a: "Anthoni" },
  //         { q: "2What is your name ?", a: "Anthoni" },
  //         { q: "3What is your name ?", a: "Anthoni" },
  //         { q: "4What is your name ?", a: "Anthoni" }
  //     ]
  //   },
  //   {
  //     name : 'Variables Of C',
  //     cases : [
  //         { value: 'Case1', data: 'Basics Case 1 data' },
  //         { value: 'Case2', data: 'Basics Case 2 data' },
  //         { value: 'Case3', data: 'BasicsCase 3 data' },
  //         { value: 'Case4', data: 'BasicsCase 4 data' },
  //         { value: 'Case5', data: 'BasicsCase 5 data' },
  //         { value: 'LastCase', data: 'Basics Last case data' },

  //     ],
  //     ques : [
  //         { q: "0What is your name ?", a: "Anthoni" },
  //         { q: "1What is your name ?", a: "Anthoni" },
  //         { q: "2What is your name ?", a: "Anthoni" },
  //         { q: "3What is your name ?", a: "Anthoni" },
  //         { q: "4What is your name ?", a: "Anthoni" }
  //     ]
  //   }

  // ]

  const C_Concepts = [
    'Introduction to C',
    'Basics Of C',
    'Variables, Constants and Keywords Of C',
    'Datatypes Of C',
    'ControlFlow Of C',
    'Functions Of C',
    'Array And Strings Of C',
    'Pointers And Memory Of C',
    'Structures And Unions Of C',
    'File Handling Of C',
    'Error Handling Of C',
    'Advanced Topics Of C',
  ];

  return (
    <div>

      <ConceptMap language={language} C_Concepts={C_Concepts} />

    </div>
  )
}

// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import Intro from './Intro';

// export default function C() {

//   const nav = useNavigate();
//   return (
//     <div className='conceptPage'>
//       <div className='conceptDiv'>
//         <h1>Concepts of C</h1>
//         <div className='concepts'>
//           <div className='concept' onClick={() => {
//             nav('/C/Introduction to C')
//           }}>
//             <h5>Introduction to C</h5>
//           </div>



//           <div className='concept'>
//             <h5>Basics to C</h5>
//           </div>
//           <div className='concept'>
//             <h5>Variables to C</h5>
//           </div>
//           <div className='concept'>
//             <h5>Loops in C</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

