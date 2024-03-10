// CombinedConcepts.js

import React, { useEffect, useState } from 'react';
import ContentPage from '../../CommonConcepts/ContentPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

export default function Concepts({ conceptType }) {
    let name, cases, ques, language = "C", complete = false;
    let user = JSON.parse(localStorage.getItem("user"))


    let [q1, setQ1] = useState("")
    let [q2, setQ2] = useState("")


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    let quesAndAns = [];


    switch (conceptType) {
        case 'Introduction to C':
            name = 'Introduction to C';
            cases = [
                {
                    value: 'Case1',
                    data:
                        <div className='case-div'>
                            {user ? <p>Hello {user.Fname},</p> : <p> Hello User,</p>}
                            <p>Now we are going to learn one of the oldest yet the powerful programming language "C". </p>
                            <p>It is developed by "Danis Ritchie" in 1972.</p>
                            <p>Many of the programming languages like C++, Java etc are derived from C.<br />that's why it known to be a mother of programming languages.</p>
                            <p>For the beginners, starting their coding journey with C seems to be the great choice.</p>
                            <p>So, Let's dig inside.</p>
                        </div>



                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Basic C Syntax.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {` #include<stdio.h>

int main(){
    printf("Hello World");
}                    
                    `}
                                    </pre>
                                </code>
                            </div>
                            <br />
                            <p>This is the basic Structure of C to print "Hello World".</p>
                            <p>Let's learn it line by line.</p>
                            {/* https://godbolt.org/ */}
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <br></br>
                            <h5 className='Quotes'> "Directory or Library is a unique type of file that stores<br></br> the information needed to access other files/directories."</h5>
                            <br></br>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {` #include<stdio.h> `}
                                    </pre>
                                </code>
                            </div>
                            <br></br>

                            <p>It is a "Directory". which lets us to use many in-built (already built) input/output functions.</p>
                        </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <h5 className='Quotes'>"Compiletion is a process of traslating our code which is written<br></br> in normal english language into computer understanding language." </h5>
                        <br></br>
                        <div className='code-block'>
                            <code >
                                <pre>
                                    {`int main() { \\ Your code will come here.} `}
                                </pre>
                            </code>
                        </div>
                        <br></br>
                        <p>"main()", this is called main function and it acts as a starting point of "compilation" process.</p>
                        <p>without this function, may any program we write in C, is workless.</p>

                    </div>
                },
                {
                    value: 'Case5', data: <div className='case-div' >
                        <div className='code-block'>
                            <code >
                                <pre>
                                    {`printf("Hello World"); `}
                                </pre>
                            </code>
                        </div><br></br>
                        <p>"printf()", &nbsp; this is the in-built function in C, accessable from the library  "{`#include<stdio.h>`}".</p>
                        <p>This function is lets us to write anything in the console window.</p>
                        <p>Remember:-</p>
                        <p>To print the normal text like we did in previous program, make sure that text should be surrounded by double quotes {`{" "}`}</p>
                    </div>
                },
                {
                    value: 'Case6', data: <div className='case-div'><br></br>
                        <p>In coding, every line of code is gives some kind of intructions to the compiler.</p>
                        <p>So, here every line of code is called as "Statement".</p>
                        <p>And in C each Statement should be end with semicolon. {"{ ; }"}</p>
                        <p>Example,</p>
                        <div className='code-block'>
                            <code >
                                <pre>
                                    {`printf("Hello World"); `}
                                </pre>
                            </code>
                        </div><br></br>
                        <p>The ; tells to the compiler that the Statement is ends here. </p>
                    </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: "Done a Greate job" },
            ];
            ques = [
                { q: "Who developed the C ?", a: "Dennis Ritchie" },
                { q: "In which year the C has developed", a: "1972" },
                { q: 'fix the error and re-write the statemet. printf("Hello World")', a: 'printf("Hello World");' },
                { q: 'fix the error and re-write the statemet. printf(Hello World)', a: 'printf("Hello World");' },
                { q: 'Help us to print "Happy Coding..!" in the console ', a: 'printf("Happy Coding..!")' },
            ]
            break;
        case 'Basics Of C':
            name = 'Basics Of C';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>So, till now we learnt "how to print something in the console?".<br />Now let's look at "how can we get something from console."</p>
                            <p>To achieve this, in C we have a in-built function called "scanf()"</p>
                            <p>here is how can we use it:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`printf("Enter your name:");
scanf("%s",&var) `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>%s its called format specifiers which indicates that we are receiveing, a text from the console window</p>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>We need to use multiple type of format specifiers according to the data we get from the console.</p>
                            <p>Like</p>
                            <p>%d for integers</p>
                            <p>%ld for long integers</p>
                            <p>%lld for long long integers</p>
                            <p>%s for string</p>
                            <p>%c for characters and</p>
                            <p>%f for floating point</p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>uhh, Thinking that what are they even are?</p>
                            <p>They are called DATATYPES.</p>
                            <p>we will going to learn about them ahead and for now just focus on "scanf()"</p>
                            <p>Let's see the example for this</p>
                        </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <p>here is the coomplete example for scanf() in C:</p>
                        <div className='code-block'>
                            <code >
                                <pre>
                                    {`#include<stdio.h>

int main(){
    String name;
    printf("Enter Your name:")
    scanf("%s",&name);
    printf("Your name is %s",name)
}`}
                                </pre>
                            </code>
                        </div><br></br>

                        <p>OUTPUT:</p>
                        <p>Enter Your name: Reema</p>
                        <p>Your name is Reema</p>
                    </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Now the another basic concept in C is</p>
                            <p>COMMENTS.<br /><br />
                                <h5 className='Quotes'> "The comments in C are human-readable explanations or notes in the source code of a C program. "</h5>
                                <br />
                                <p>which means they are the statements used to give a clear information about our code to other people.</p>
                                <p>The compiler never compiles these statements.</p>

                            </p>
                        </div>
                }, {
                    value: 'Case6', data:
                        <div className='case-div'>
                            <p>In C, there are two types of comments known as:</p>
                            <p>single line comment:</p>
                            <p>this type of comment is only appicable for a single line.<br /> It starts with adding double slash {`{ // }`} at the start of the line.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`// This statement prints the "hello world" in the console.
printf("hello world"); `}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                }, {
                    value: 'Case7', data:
                        <div className='case-div'>
                            <p>multi line comment:</p>
                            <p>this type of comment is appicable for more than single line of code.<br />It used by adding {`{ /* }`} at the start and {`{ */ }`} at the end of the line.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`/* This statement prints the "hello world" in the console.
then we can see the out put at the console. */
printf("hello world"); `}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                { value: 'Lastcase', data: 'Basics Last case data' },

            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
        case 'Variables, Constants and Keywords Of C':
            name = 'Variables, Constants and Keywords Of C';
            cases = [
                {
                    value: 'Case1', data: <div className='case-div'>
                        <p>VARIABLES:</p>
                        <br />

                        <h5 className='Quotes'> " A variable is a temporary storage of data in a memory."</h5>
                        <br />
                        <p>Tha variable stores the data as a "value" like we store the gloceries in containers in the kitchen.</p>
                        <p>Examples: <br /><br /> a=3, b=5.6, c='A'</p>

                    </div>
                },
                {
                    value: 'Case2', data: <div className='case-div'>
                        <p>But, for declaring a variable in C, we should follow some rules:</p>
                        <p>a. First character of a variable must be an alphabet or a underscore{`{ _ }`}.</p>
                        <p>b. No commas, blanks or any other special symbol other than {`{ _ }`} is allowed.</p>
                        <p>c. C is a case sensitive language so, in C a=3 and A=3 both are different variables</p>
                        <p>We should make our variable names meaningful to enhance the readability of our program.</p>

                    </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <p>CONSTANTS:</p>
                        <br />

                        <h5 className='Quotes'> " An entity in which changing its value is not allowed, once its initialized is called a CONSTANT."</h5>
                        <br />
                        <p>for a variable we can change its value even after initialized based on our need.<br />But we cant do this with a Constant</p>
                        <br />
                        <p>Rather than this difference, the Constant acts same as a variable</p>

                    </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <p>In C, there are three types of Constants:</p>
                        <br />
                        <p>a. Integer Constant:</p>
                        <p>Examples: 1, -6, 0, 10 </p>
                        <br />
                        <p>b. Real Constant</p>
                        <p>Examples: 2.6, 9.25, -569.4 </p>
                        <br />

                        <p>b. character Constant</p>
                        <p>Examples: 'a', '@', '%' </p>
                    </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <p>KEYWORDS:</p>
                        <br />

                        <h5 className='Quotes'> " These are reserved words, whose meaning is already known to the compiler is called a KEYWORD."</h5>
                        <br />
                        <p>There are 32 keywords available in C as follows.</p>
                        <div className='code-block'>
                            <code >
                                <pre>
                                    {`auto     double   int    struct
break    long     else   switch
case     return   enum   typeof
char     register extern union
const    short    float  unsigned
continue signed   for    void
default  sizeof   goto   volatile
do       static   if     while`}
                                </pre>
                            </code>
                        </div><br></br>
                        <p>Note: </p>
                        <p>We can not use keywords as a Variables or Constants.</p>
                        <br />


                    </div>
                },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
        case 'Datatypes Of C':
            name = 'Datatypes Of C';
            cases = [
                {
                    value: 'Case1', data: <div className='case-div'>
                        <h5 className='Quotes'> " Datatypes specifies what type of data has been stored by a Variable or Constant."</h5>
                        <br></br>
                        <p>In C, we need to specify by ourselves that what type of data we are storing in our Variable or Constant.</p>
                        <p>Example:</p>
                        <div className='code-block'>

                            <code >
                                <pre>
                                    {` // for variables
int number = 25
char letter = 'C'
float decimal = 26.35

//for constants
const int number = 25
const char letter = 'C'
const float decimal = 26.35

`}
                                </pre>
                            </code>
                        </div><br></br>
                        <p>Here, number, letter and decimal are the variables. <br></br> and int, char and float determines their stored data type.</p>
                    </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>As we have already studied before that, our computer stores its data in a memory.</p>
                            <p>and by specifing the data to the variales or Constants, the compiler finds<br /> the suitable place needed for our data in the memory.</p>
                            <p>In C, we have three types of datatypes:</p>

                            <br /><p>a. Primitive Data Types - <br></br>Primitive data types are the most basic data types that are used for representing simple values such as integers, float, characters, etc.</p>
                            <br /> <p>b. User Defined Data Types - <br></br>The user-defined data types are defined by the user himsel such as Array, Pointer, Functions etc.</p>
                            <br /><p>a. Derived Data Types - <br></br>The data types that are derived from the primitive or built-in datatypes are referred to as Derived Data Types such as Structure, Union etc.</p>
                        </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <p>Primitive Datatypes:</p>
                        <Table variant='info' hover style={{ textAlign: "center" }}>
                            <thead>
                                <tr>
                                    <th>Data Type</th>
                                    <th>Size</th>
                                    <th>Description</th>
                                    <th>Format Specifier</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>int</p></td>
                                    <td><p>2 or 4 bytes</p></td>
                                    <td><p>Stores whole numbers,<br></br> without decimals</p></td>
                                    <td><p>%d or %i</p></td>
                                    <td><p>1, 2, 56, 99</p></td>

                                </tr> <tr>
                                    <td><p>float</p></td>
                                    <td><p>4 bytes</p></td>
                                    <td><p>Stores fractional numbers,<br></br> containing one or more decimals.<br></br> Sufficient for storing 7 decimal digits</p></td>
                                    <td><p>%f</p></td>
                                    <td><p>1.99, 2.22</p></td>
                                </tr> <tr>
                                    <td><p>double</p></td>
                                    <td><p>8 bytes</p></td>
                                    <td><p>Stores fractional numbers,<br></br> containing one or more decimals. <br></br>Sufficient for storing 15 decimal digits</p></td>
                                    <td><p>%lf</p></td>
                                    <td><p>2.5689654</p></td>
                                </tr> <tr>
                                    <td><p>char</p></td>
                                    <td><p>1 byte</p></td>
                                    <td><p>Stores a single character/letter/number, <br></br>or ASCII values</p></td>
                                    <td><p>%c</p></td>
                                    <td><p>'a','@','z'</p></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <p>Derived Datatypes:</p>
                        <Table variant='info' hover style={{ textAlign: "center" }}>
                            <thead>
                                <tr>
                                    <th>Data Type</th>
                                    <th>Size</th>
                                    <th>Description</th>
                                    <th>Format Specifier</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>short int</p></td>
                                    <td><p>2 bytes</p></td>
                                    <td><p>Stores whole numbers,<br></br> without decimals</p></td>
                                    <td><p>%sd</p></td>

                                </tr> <tr>
                                    <td><p>long int</p></td>
                                    <td><p>4 bytes</p></td>
                                    <td><p>Stores fractional numbers,<br></br> containing one or more decimals.<br></br> Sufficient for storing 7 decimal digits</p></td>
                                    <td><p>%ld</p></td>
                                </tr> <tr>
                                    <td><p>unsigned short int</p></td>
                                    <td><p>2 bytes</p></td>
                                    <td><p>Stores fractional numbers,<br></br> containing one or more decimals. <br></br>Sufficient for storing 15 decimal digits</p></td>
                                    <td><p>%usd</p></td>
                                </tr> <tr>
                                    <td><p>unsigned long int</p></td>
                                    <td><p>4 byte</p></td>
                                    <td><p>Stores a single character/letter/number, <br></br>or ASCII values</p></td>
                                    <td><p>%uld</p></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                },
                {
                    value: 'Case5', data: <div className='case-div'>
                        <p>Here is the complete program:</p>
                        <div className='code-block'>

                            <code >
                                <pre>
                                    {` #include <stdio.h>
 
 int main()
 {
     // Creating variables having different data types
     int integer = 26;
     float floating = 39.32;
     char character = 'A';
  
     // Printing variables with the help of their respective format specifiers
     printf("%d", integer);
     printf("%f", floating);
     printf("%c", character);
 }
 
`}
                                </pre>
                            </code>
                        </div><br></br>
                        <p>Output:</p>
                        <p>26</p>

                        <p>39.320000</p>

                        <p>A</p>
                    </div>
                },
                { value: 'Lastcase', data: 'Variables Last case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
        case 'Operators Of C':
            name = 'Operators Of C';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
        case 'ControlFlow Of C':
            name = 'ControlFlow Of C';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
        case 'Functions Of C':
            name = 'Functions Of C';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
        case 'Array And Strings C':
            name = 'Array And Strings Of C';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
        case 'Pointers And Memory Of C':
            name = 'Pointers And Memory Of C';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
        case 'Structures And Unions Of C':
            name = 'Structures And Unions Of C';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
        case 'File Handling Of C':
            name = 'File Handling Of C';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },

            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
        case 'Error Handling Of C':
            name = 'Error Handling Of C';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
        case 'Advanced Topics Of C':
            name = 'Advanced Topics Of C';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

    }

    ques = shuffleArray(ques);

    if (ques.length >= 4) {
        for (let i = 0; i < 4; i++) {
            quesAndAns.push({ q: ques[i].q, a: ques[i].a });
        }
    }

    // quesAndAns.push({complete:false})
    // console.log(quesAndAns);

    return (
        <div>

            <ContentPage name={name} cases={cases} ques={ques} language={language} questions={quesAndAns} complete={complete} />
        </div>
    );
}