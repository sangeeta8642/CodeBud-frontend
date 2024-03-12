import React from 'react'
import ConceptMap from '../../CommonConcepts/ConceptMap'


export default function Python() {

  const language = "Java"

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

  return (
    <div>

      <ConceptMap language={language} C_Concepts={java_Concepts} />

    </div>
  )
}
