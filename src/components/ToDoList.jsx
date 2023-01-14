import React from 'react'

export const Tasks = ({ tasks, setTasks }) => {

  const handleDelete = ({id}) => {

    setTasks(tasks.filter((task) => task.id !== id));

  } 

  return (
    <div>
        {tasks.map((task) => (

          <li className='list-item' key={task.id}>

            <input
              type="text"
              value={task.title}
              className="list"
              onChange={(e) => e.preventDefault()}>
            </input>

            <div className='center-icons'>
              <button className='button-complete task-button' /* onClick={() => handleComplete(task)} */>
                <i className='fa fa-check-circle'></i>
              </button>

              <button className='button-edit task-button'/*  onClick={() => handleEdit(task)} */>
                <i className='fa fa-edit'></i>
              </button>

              <button className='button-delete task-button' onClick={() => handleDelete(task)}>
                <i className='fa fa-trash'></i>
              </button>
            </div>

          </li>

        ))}
    </div>
  )

}

export default Tasks;
