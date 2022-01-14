import './Accounts.css';
import React from 'react';
import { render } from '@testing-library/react';
import {Route} from "react-router-dom";

const Accounts = () => (
    <nav className='Accounts'>
        <p className={"text1"}>Would you like to connect to:</p>
        <p className={"text2"}> an admin account or to a client account</p>
        <img id='pccheck' src="/Images/pccheck.jpg" alt="PC_check" />
        <Route
            render={({ history }) => (
                <button
                    className={"btn1"}
                    type='buttonx'
                    onClick={() => {
                        history.push('/admin');
                    }}
                >
                    Admin account
                </button>
            )}
        />
        <Route
            render={({ history }) => (
                <button
                    className={"btn2"}
                    type='button'
                    onClick={() => {
                        history.push('/client');
                    }}
                >
                    Client account
                </button>
            )}
        />



    </nav>
);

export default Accounts;
