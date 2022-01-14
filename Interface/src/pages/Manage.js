import './Stats.css';
import React from 'react';
import { render } from '@testing-library/react';
import {Route} from "react-router-dom";

const Stats = () => (
    <nav className='Stats'>
        <p>To Do</p>
        <img id='stats' src="/Images/stats.png" alt="STATS" />
        <Route
            render={({ history }) => (
                <button
                    type='button'
                    onClick={() => {
                        history.push('/');
                    }}
                >
                    .
                </button>
            )}
        />
    </nav>
);

export default Stats;
