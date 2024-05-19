import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import { FaBars } from 'react-icons/fa6';
import Logo from '../assets/images/logo.png';
import { data } from '../fakedata/data';
import { Link } from 'react-router-dom';

const QuestionMobile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [correct, setCorrect] = useState(0);
  let [wrong, setWrong] = useState(0);
  let [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(data.length).fill(null));
  const [result, setResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }

  const checkAns = (ans) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[index] = ans;
    setSelectedOptions(updatedSelectedOptions);

    if (question.ans === ans) {
      setCorrect((prev) => prev + 1);
    } else {
      setWrong((prev) => prev + 1);
    }
  };

  const nextClick = () => {
    if (index < data.length - 1) {
      setIndex((prevIndex) => {
        setQuestion(data[prevIndex + 1]); // Update question based on the updated index
        return prevIndex + 1; // Return the updated index
      });
    } else if (index === data.length - 1) {
      setResult(true);
    }
  };

  const previousClick = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      setQuestion(data[index - 1]);
    }
  };

  const examSubmit = () => {
    setResult(true);
  };

  const goToQuestion = (questionIndex) => {
    setIndex(questionIndex);
    setQuestion(data[questionIndex]);
  };

  useEffect(() => {
    if (result) {
      const totalQuestions = correct + wrong;
      const percentageScore = Math.round((correct / totalQuestions) * 100);
      setScore(percentageScore);
    }
  }, [result, correct, wrong]);

  useEffect(() => {
    if (result || selectedOptions.filter((option) => option !== null).length > 0) {
      setAnsweredQuestions(selectedOptions.filter((option) => option !== null).length);
    }
  }, [result, selectedOptions]);

  return (
    <>
      {sidebarOpen && <Sidebar />}
      <nav className='mobile-navbar'>
        <section className='logo-section'>
          <div>
            <img src={Logo} alt='' style={{ objectFit: 'cover', width: '50px' }} />
          </div>
          <p>RPMS</p>
        </section>
        <section className='actions-navbar'>
          <div onClick={handleToggle}>
            <FaBars onClick={handleToggle} size={24} color='white' />
          </div>
        </section>
      </nav>

      <div className='subjects subjects-details-main'>
        <div
          className={
            result
              ? 'subjects-panel subjects-panel-details display-border-mobile'
              : 'subjects-panel subjects-panel-details'
          }
        >
          {result ? (
            <div style={{ visibility: 'hidden' }}></div>
          ) : (
            <h3 className='lesson-details-back'>Mathematics Exam</h3>
          )}
        </div>

        <div className='exam-question-mobile-main'>
          {result ? (
            <div className='mobile-question-summary-main'>
              <h3>Exam Finished</h3>
              <div className='question-summary-score'>
                <p>
                  Your Score: <span>{score}%</span>
                </p>
              </div>
              <ul>
                <li>
                  <span>Number of Correct Answers:</span>
                  <span>{correct}</span>
                </li>
                <li>
                  <span>Number of Wrong Answers:</span>
                  <span>{wrong}</span>
                </li>
              </ul>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Link style={{ textDecoration: 'none' }} to='/exam'>
                  <button>Back Exam Page</button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <p className='mobile-question-title'>Question {index + 1}</p>

              <div className='exam-questions-side'>
                <p>{question.question}</p>

                <div className='options-container'>
                  <input
                    type='radio'
                    name={`answer-${index}`}
                    id={`dot-1-${index}`}
                    onChange={() => checkAns(1)}
                    checked={selectedOptions[index] === 1}
                  />
                  <input
                    type='radio'
                    name={`answer-${index}`}
                    id={`dot-2-${index}`}
                    onChange={() => checkAns(2)}
                    checked={selectedOptions[index] === 2}
                  />
                  <input
                    type='radio'
                    name={`answer-${index}`}
                    id={`dot-3-${index}`}
                    onChange={() => checkAns(3)}
                    checked={selectedOptions[index] === 3}
                  />
                  <input
                    type='radio'
                    name={`answer-${index}`}
                    id={`dot-4-${index}`}
                    onChange={() => checkAns(4)}
                    checked={selectedOptions[index] === 4}
                  />

                  <div className='options-category'>
                    <label
                      htmlFor={`dot-1-${index}`}
                      className={selectedOptions[index] === 1 ? 'selected' : ''}
                    >
                      <span className='dot one'></span>
                      <span className='answer'>{question.option1}</span>
                    </label>
                    <label
                      htmlFor={`dot-2-${index}`}
                      className={selectedOptions[index] === 2 ? 'selected' : ''}
                    >
                      <span className='dot two'></span>
                      <span className='answer'>{question.option2}</span>
                    </label>
                    <label
                      htmlFor={`dot-3-${index}`}
                      className={selectedOptions[index] === 3 ? 'selected' : ''}
                    >
                      <span className='dot three'></span>
                      <span className='answer'>{question.option3}</span>
                    </label>
                    <label
                      htmlFor={`dot-4-${index}`}
                      className={selectedOptions[index] === 4 ? 'selected' : ''}
                    >
                      <span className='dot four'></span>
                      <span className='answer'>{question.option4}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className='mobile-questions-pagination-side'>
                {Array.from({ length: data.length }, (_, i) => (
                  <span
                    key={i}
                    onClick={() => goToQuestion(i)}
                    style={{
                      backgroundColor: index === i ? '#082567' : 'transparent',
                      color: index === i ? 'white' : 'black',
                    }}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
              <div className='mobile-questions-finish-btn'>
                {index >= 1 ? <button onClick={previousClick}>Previous</button> : <></>}

                {index === data.length - 1 ? (
                  <button
                    style={{
                      color: 'white',
                      background: '#082567',
                    }}
                    onClick={examSubmit}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    style={{
                      color: 'white',
                      background: '#082567',
                    }}
                    onClick={nextClick}
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionMobile;

