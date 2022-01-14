import './Admin.css';
import React from 'react';
import { render } from '@testing-library/react';
import {Route} from "react-router-dom";

const Admin = () => (
    <nav className='Admin'>
        <p className={"text3"}>Please insert the following information in the text boxes</p>
        <img id='admin' src="/Images/admin.png" alt="ADMIN" />
        <form >

            <br/>
            <input

                placeholder='Username'
                type="text"
                id="username"
                 />
            <br/>

            <br/>
            <input type="password"
                   id="pass"
                   placeholder='Password'
                   />

        </form>
        <Route
            render={({ history }) => (
                <button
                    className={"btn3"}
                    type='button'
                    onClick={() => {
                        history.push('/administration');
                    }}
                >
                    Connect into your admin account
                </button>
            )}
        />
    </nav>
);

export default Admin;
