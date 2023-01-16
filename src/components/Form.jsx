import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

const Form = ({ input, setInput, tasks, setTasks, editTask, setEditTask }) => {

    /* Fn para manejar el valor que escribe el usuario en el input, usa el hook useState() */

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    /* Fn para actualizar una tarea. Mapea el array de tareas y si el id de una de ellas es === a el id que le pasamos por parametro, 
    nos devuelve un objeto con las propiedades especificadas, sino nos devuelve la tarea */

    const updateTask = ( title, id, completed ) => {

        const newTask = tasks.map((task) => task.id === id ? { title, id, completed } : task);

        setTasks(newTask);
        setEditTask("");

    }

    const formSubmit = (e) => {

        e.preventDefault();
        
        if (!editTask) {

            setTasks([...tasks, {id: uuidv4(), title: input, completed: false}]);
            setInput("");

        } else {

            updateTask(input, editTask.id, editTask.completed);

        } 
    }

    useEffect(() => {

        if (editTask) {
            setInput(editTask.title);
        } else {
            setInput("");
        }

    }, [setInput, editTask]);

    return (

        <form onSubmit={ formSubmit }>
            <input
                type='text'
                placeholder='Ingrese una tarea...'
                className='task-input'
                value={input}
                required
                onChange={handleInputChange} >    
            </input>

            <button className='button-add' type='submit'> {editTask ? "Cambiar" : "Agregar"} </button>
        </form>

    );
}

export default Form