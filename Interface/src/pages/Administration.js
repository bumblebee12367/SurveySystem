import './Administration.css';
import React from 'react';
import { render } from '@testing-library/react';
import {Route} from "react-router-dom";

const Administration = () => (
    <nav className='Administration'>
        <p className={"text4"}>What would you like to do :</p>
        <Route
            render={({ history }) => (
                <button
                    type='button'
                    className={"btn4"}
                    onClick={() => {
                        history.push('/manage');
                    }}
                >
                    Manage surveys
                </button>
            )}
        />
        <Route
            render={({ history }) => (
                <button
                    type='button'
                    className={"btn5"}
                    onClick={() => {
                        history.push('/stats');
                    }}
                >
                    Look at statistics
                </button>
            )}
        />
    </nav>
);

export default Administration;
