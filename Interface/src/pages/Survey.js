import './Survey.css';
import React, {useState} from 'react';
import { render } from '@testing-library/react';
import {Route} from "react-router-dom";

export default function Survey() {
const questions = [
    {
        questionText: 'How likely are you to recommend your organization as a good place to work?',
        answerOptions: [
            { answerText: 'Strongly disagree', isCorrect: 1 },
            { answerText: 'Disagree', isCorrect: 2 },
            { answerText: 'Neutral', isCorrect: 3 },
            { answerText: 'Agree', isCorrect: 4 },
            { answerText: 'Strongly agree', isCorrect: 5 },
        ],
    },
    {
        questionText: 'The feedback I get is specific.',
        answerOptions: [
            { answerText: 'Strongly disagree', isCorrect: 1 },
            { answerText: 'Disagree', isCorrect: 2 },
            { answerText: 'Neutral', isCorrect: 3 },
            { answerText: 'Agree', isCorrect: 4 },
            { answerText: 'Strongly agree', isCorrect: 5 },
        ],
    },
    {
        questionText: 'The feedback I receive helps me grow and develop.',
        answerOptions: [
            { answerText: 'Strongly disagree', isCorrect: 1 },
            { answerText: 'Disagree', isCorrect: 2 },
            { answerText: 'Neutral', isCorrect: 3 },
            { answerText: 'Agree', isCorrect: 4 },
            { answerText: 'Strongly agree', isCorrect: 5 },
        ],
    },
    {
        questionText: 'I am satisfied with the frequency of feedback coming from my direct manager.',
        answerOptions: [
            { answerText: 'Strongly disagree', isCorrect: 1 },
            { answerText: 'Disagree', isCorrect: 2 },
            { answerText: 'Neutral', isCorrect: 3 },
            { answerText: 'Agree', isCorrect: 4 },
            { answerText: 'Strongly agree', isCorrect: 5 },
        ],
    },

    {
        questionText: 'I am satisfied with the level of comfort in my physical workplace.',
        answerOptions: [
            { answerText: 'Strongly disagree', isCorrect: 1 },
            { answerText: 'Disagree', isCorrect: 2 },
            { answerText: 'Neutral', isCorrect: 3 },
            { answerText: 'Agree', isCorrect: 4 },
            { answerText: 'Strongly agree', isCorrect: 5 },
        ],
    },
    {
        questionText: 'I enjoy what i do at the workplace. ',
        answerOptions: [
            { answerText: 'Strongly disagree', isCorrect: 1 },
            { answerText: 'Disagree', isCorrect: 2 },
            { answerText: 'Neutral', isCorrect: 3 },
            { answerText: 'Agree', isCorrect: 4 },
            { answerText: 'Strongly agree', isCorrect: 5 },
        ],
    },

];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    {/*
    const [addFormData,setAddFormData]=useState({
        q1:'',
        q2:'',
        q3:'',
        q4:'',
        q5:'',
        q6:''
    });

    const handleAddFormChange=(event)=>{
        event.preventDefault();

        const fieldName=event.target.getAttribute('isCorrect')
        const fieldValue=event.target.value;

        const newFormData={...addFormData};
        newFormData[fieldName]=fieldValue;

        setAddFormData(newFormData);

    }
*/}
    const handleAnswerOptionClick = (isCorrect) => {

            setScore(score + isCorrect);


        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }



    return (
        <div className='app'>

            {showScore ? (
                <div className='score-section'>
                    Thank you for completing our survey! :)
                    <Route
                        render={({ history }) => (
                            <button
                                type='button'
                                className={"btn7"}
                                onClick={() => {
                                    history.push('/');
                                }}
                            >
                                Send survey
                            </button>
                        )}
                    />
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button id={'surv2'}
                                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>

    );

}

