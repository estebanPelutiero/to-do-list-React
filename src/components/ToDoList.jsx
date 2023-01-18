import React from 'react'

export const Tasks = ({ tasks, setTasks, setEditTask }) => {

  /* Fn para boton "completar", mapea el array tareas y cambia la propiedad "completed"
  por su opuesto. Luego, setea el array con setTask ( useState() ) */

  const handleComplete = ( task ) => {
    
    setTasks(tasks.map((item) => {

      if (item.id === task.id) {

        return { ...item, completed: !item.completed };
       
      }
      
      return item;

    }));
  };


  /* Fn para boton "eliminar", sobreescribimos el array con filter, devolviendo
  todas las tareas con id distinto al que eligimos eliminar */ 

  const handleDelete = ({ id }) => {

    setTasks(tasks.filter((task) => task.id !== id));

  };

  const handleEdit = ({ id }) => {

    const findTask = tasks.find((item) => item.id === id);
    setEditTask(findTask);
    console.log(findTask);

  }
  

  return (

    <div>

        {tasks.map((task) => (

          <li className='list-item' key={task.id}>

            <input
              type="text"
              value={task.title}
              className={`list ${task.completed ? "complete" : ""}`}
              onChange={(e) => e.preventDefault()}>
            </input>

            <div className='center-icons'>
              <button className='button-complete task-button' onClick={() => handleComplete(task)}>
                <i className='fa fa-check-circle'></i>
              </button>

              <button className='button-edit task-button' onClick={() => handleEdit(task)} >
                <i className='fa fa-edit'></i>
              </button>

              <button className='button-delete task-button' onClick={() => handleDelete(task)}>
                <i className='fa fa-trash'></i>
              </button>
            </div>

          </li>

        ))}

    </div>

  );
};

export default Tasks;
