import React from 'react'
import ConceptMap from '../../CommonConcepts/ConceptMap'


export default function Python() {

  const language = "Python"

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

  return (
    <div>

      <ConceptMap language={language} C_Concepts={python_Concepts} />

    </div>
  )
}
