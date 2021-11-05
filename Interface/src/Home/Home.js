import './Home.css';
import React from 'react';
import { render } from '@testing-library/react';
import {Route} from "react-router-dom";

const Home = () => (
    <nav className='home'>
        <img id='parknow' src="/Images/QuickSurvey.jpg" alt="SURVEY SYSTEM" />
        <p id='msgpark'>
                A simple platform for taking or making surveys accessible for everyone with a simple click of a button
        </p>

        <Route
            render={({ history }) => (
                <button
                    id='parknowbtn'
                    type='button'
                    onClick={() => {
                        history.push('/account');
                    }}
                >
                    ONWARDS
                </button>
            )}
        />

    </nav>
);

export default Home;
