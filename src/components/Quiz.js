import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './quiz.css';

const Quiz = () => {
  const [quizes, setQuiz] = useState([]);
  const [show, setShow] = useState(true)    
  const [option, setOption] = useState(null)
  const [answers, setAnswer] = useState([]);
  let options = [];
   

  const fetchData = () => {
    const quizAPI =
      'https://613367767859e700176a36e4.mockapi.io/api/v1/questions';
    const answerAPI =
      'https://613367767859e700176a36e4.mockapi.io/api/v1/answers';

    const quiz = axios.get(quizAPI);
    const answer = axios.get(answerAPI);

    axios.all([quiz, answer]).then(
      axios.spread((...allData) => {
        const allQuiz = allData[0].data;
        const allAnswer = allData[1].data;

        setQuiz(allQuiz);
        setAnswer(allAnswer);
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const result = ()=>{
    let numberCorrect = 0;
    
    console.log(options)
    for(let i=0; i< options.length; i++){
        if(options[i] === "true"){
            numberCorrect +=1;
        }

    }
    setOption(numberCorrect);
    console.log(numberCorrect)
  }

  return (
    <div>
      <Container>
        <div className='mt-5'>
          <h1>Savollar:</h1>
          <Row>
            <Col xs={12} className='my-5'>
              {quizes.map((quiz) => {
                return (
                  <Card className='my-5' key={quiz.id}>
                    <Card.Header>
                      <h5 className='text-info'>{quiz.text}</h5>
                    </Card.Header>
                    {answers.map((answer) => {
                      if (answer.questionId === quiz.id) {
                        return (
                          <Card.Body key={answer.id}>
                            <div className='d-flex align-items-center'>
                              <input
                                type='radio'
                                className='me-2'
                                name={`answer` + answer.questionId}
                                value={answer.correct}
                                onChange={(event)=>{
                                    options.push(event.target.value);
                                }}
                              />
                              <label
                                className='fs-5 fw-bold'
                                htmlFor={`answer` + answer.questionId}
                              >
                                {answer.text}
                              </label>
                            </div>
                          </Card.Body>
                        );
                      }
                    })}
                  </Card>
                );
              })}
            </Col>
          </Row>
          <Button type="button" onClick={result} className="mb-5 btn-success py-2 px-4">Natijani tekshirish</Button>
          {
            option !== null ?
            <Alert variant="primary" show={show}>To'g'ri javoblaringiz soni : {option}</Alert>:
            null 
          }
        </div>
      </Container>
    </div>
  );
};

export default Quiz;
