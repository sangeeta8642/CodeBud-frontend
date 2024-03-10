
import "../Css Files/ContentPage.css"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "../Css Files/ContentPage.css"
import StepIndicator from "../subComponents/StepIndicator";

export default function ContentPage(props) {
  let topicName = props.name, languageName = props.language, cases = props.cases, questions = props.questions, complete = props.complete

  const user = JSON.parse(localStorage.getItem("user"))
  const [queAns, setQueAns] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const nav = useNavigate()


  useEffect(() => {
    getQues()
  }, [])

  // console.log(queAns);

  function PrevPage() {
    if (currentPage > 0 && currentPage < cases.length)
      setCurrentPage(currentPage - 1)
    setUserAnswer('')
  }

  function NextPage() {
    // if (currentPage > 1 && currentPage < cases.length)
    setCurrentPage(currentPage + 1);
    setUserAnswer('');
  }

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setUserAnswer(inputValue);
  };

  async function storeQues() {
    if (user) {
      const userId = user._id
      let data = { userId, topicName, languageName, questions }
      let result = await fetch("http://localhost:5000/setQues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      result = await result.json()
      alert("Your Data Has Been Stored..!!")
    }
    getQues();
  }

  async function getQues() {
    if (user) {
      const userId = user._id
      let data = { userId, topicName, languageName, questions }
      // console.log(data);
      let result = await fetch("http://localhost:5000/setQuestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      result = await result.json()
      setQueAns(result)
      // console.log(queAns);

    }
    else {
      setQueAns(questions)
      // console.log(queAns);

    }
  }

  const renderPage = () => {

    const currentItem = cases[currentPage];

    switch (currentItem.value) {
      case "Case1":
        return (
          <div className='content'>
            <p>{currentItem.data}</p>
            <div className="contentBtns">
              <Button
                variant='success'
                style={{ color: '#fff' }}
                onClick={NextPage}
              >
                Next
              </Button>
              <br />
              <br />
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}

                >
                  Back
                </Button>
              )}
            </div>
          </div>
        );
      case "Case2":
      case "Case3":
      case "Case4":
      case "Case5":
      case "Case6":
        case "Case7":


        return (
          <div className='content'>
            <p>{currentItem.data}</p>
            <div className="contentBtns">
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}
                >
                  Back
                </Button>
              )}

              <Button
                variant='danger'
                style={{ color: '#fff' }}
                onClick={NextPage}
              >
                Next
              </Button>
            </div>
          </div>
        );

      case "Case8":
        return (
          <div className='content case-div'>
            <p>{queAns[0].q}</p>
            <input type="text" value={userAnswer} onChange={handleInputChange} />
            <div className="contentBtns">

              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={NextPage}
                  disabled={userAnswer !== queAns[0].a}
                >
                  Next
                </Button>
              )}
              <br />
              <br />
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}
                >
                  Back
                </Button>
              )}
            </div>
          </div>
        );

      case "Case9":
        return (
          <div className='content case-div'>
            <p>{queAns[1].q}</p>
            <input type="text" value={userAnswer} onChange={handleInputChange} />
            <div className="contentBtns">

              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={NextPage}
                  disabled={userAnswer !== queAns[1].a}
                >
                  Next
                </Button>
              )}
              <br />
              <br />
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}
                >
                  Back
                </Button>
              )}
            </div>
          </div>
        );

      case "Case10":
        return (
          <div className='content case-div'>
            <p>{queAns[2].q}</p>
            <input type="text" value={userAnswer} onChange={handleInputChange} />
            <div className="contentBtns">

              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={NextPage}
                  disabled={userAnswer !== queAns[2].a}
                >
                  Next
                </Button>
              )}
              <br />
              <br />
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}
                >
                  Back
                </Button>
              )}

            </div>    </div>
        );

      case "Lastcase":
        return (
          <div className='content'>
            <p>{currentItem.data}</p>
            <div className="contentBtns">

              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}
                >
                  Back
                </Button>
              )}
              <br />
              <br />
              {currentPage > 0 && (
                <Button
                  variant='success'
                  style={{ color: '#fff' }}
                  onClick={() => {
                    nav(`/${languageName}`);
                  }}
                >
                  Concepts
                </Button>
              )}
              <br />
              <br />

              {currentPage > 0 && (
                <Button
                  variant='info'
                  style={{ color: '#fff' }}
                  onClick={storeQues}
                >
                  Save data
                </Button>
              )}

            </div>          </div>
        );
      default:
        return <p>Page not found</p>;
    }
  };
  return (
    <div className='contentPage'>
      {/* <div className='contentLinks'> */}

      {/* <h4>Hello</h4></div>  */}
      <div className='contentDiv'>
        <div className='contentHeading'>
          <h1>{topicName}</h1>
        </div>
        <StepIndicator steps={Array.from({ length: cases.length }, (_, i) => `${i + 1}`)} currentStep={currentPage} />
        {renderPage()}
      </div>
    </div>
  )

}

