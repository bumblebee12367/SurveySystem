import './Manage.css';
import React from 'react';
import { render } from '@testing-library/react';
import {Route} from "react-router-dom";

const Manage = () => (
    <nav className='Manage'>
        <p>To Do</p>
        <img id='gears' src="/Images/gears.png" alt="GEARS" />
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
                <th>Q5</th>
                <th>Q6</th>
                <th>Total score</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
        </table>
        <Route
            render={({ history }) => (
                <button
                    type='button'
                    onClick={() => {
                        history.push('/administration');
                    }}
                >
                    .
                </button>
            )}
        />
    </nav>
);

export default Manage;
