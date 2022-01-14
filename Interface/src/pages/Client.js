import './Client.css';
import React from 'react';
import validate from './inputErrors';
import useForm from './useForm';
import {Route} from "react-router-dom";


const Client = ({ submitForm }) => {
    const {handleChange, handleSubmit, values} = useForm(
        submitForm,
        validate
    );
    return(
    <nav className='Client'>

        <p className='text5'>Please insert the following information:</p>

            <p className='text8'>Please specify your level of agreement to a statement typically in five points:
                <br/>(1) Strongly disagree; (2) Disagree;
                (3) Neutral; (4) Agree; (5) Strongly agree.</p>

        <form className='form' onSubmit={handleSubmit} >
            <input
                value={values.name}
                required="required"
                onChange={handleChange}
                type="text"
                placeholder='Name'
                id="name"
                name="name"/>
            <br>
            </br>
            <input
                required="required"
                value={values.email}
                onChange={handleChange}
                type="text"
                placeholder='Email'
                id="email"
                name="email"/>
            <br/>
            <label htmlFor="sex">Sex:</label>

            <input
                type="radio"
                id="sexM"
                name="sex"/>
            <label htmlFor="sexM">M</label>
            <input
                type="radio" id="sexF" name="sex"/>
            <label htmlFor="sexF">F</label>
            <input
                type="radio" id="sexNa" name="sex"/>
            <label htmlFor="sexNa">Undefined</label>
            <br/>
            <label htmlFor="age">Age:</label>
            <br/>
            <input
                type="radio" id="under18" name="age"/><label htmlFor="sexM">under 18</label>
            <br/>
            <input
                type="radio" id="18to25" name="age"/><label htmlFor="sexF">18 to 25</label>
            <br/>
            <input
                type="radio" id="25to32" name="age"/><label htmlFor="sexF">25 to 32</label>
            <br/>
            <input
                type="radio" id="above32" name="age"/><label htmlFor="sexF">above 32</label>
            <br/>
            <Route
                render={({history}) => (
                    <button
                        className={"btn6"}
                        type='submit'
                        onClick={() => {
                            history.push('/survey');
                        }}
                    >
                        Continue to survey
                    </button>
                )}
            />
        </form>

    </nav>
    );
};

export default Client;
