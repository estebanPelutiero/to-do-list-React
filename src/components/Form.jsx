import React from 'react';
import { v4 as uuidv4 } from 'uuid'; 

const Form = ({ input, setInput, tasks, setTasks }) => {

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
    }

    return (

        <form onSubmit={formSubmit}>
            <input
                type='text'
                placeholder='Ingrese una tarea...'
                className='task-input'
                value={input}
                required
                onChange={handleInputChange} >    
            </input>

            <button className='button-add' type='submit'> Agregar </button>
        </form>

    );
}

export default Form