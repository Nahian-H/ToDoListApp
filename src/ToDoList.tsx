import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Sample task 1" , "Sample task 2", "Sample task 3", "Sample task 4", "Sample task 5"]);
    const [newTask, setNewTask] = useState("");


function handleInputChange(event: any) {
    setNewTask(event.target.value);
}

function addTask() {
    setTasks(t => [...t, newTask])
}

function deleteTask(index:any) {

}

function moveTaskUp(index:any) {

}

function moveTaskDown(index:any) {

}

return (
<div className='to-do-list'>
    <h1>To-Do-List App</h1>
    <div>
        <input
            type="text"
            placeholder='Enter a task...'
            value={newTask}
            onChange={handleInputChange}
        />
        <button
        className='add-button'
        onClick={addTask}>
            Add
        </button>
    </div>
    <ol>
        {tasks.map((task, index) =>
        <li key={index}>
            <span className='text'>{task}</span>
            <button
                className="delete-button"
                onClick={() => deleteTask(index)}>
                Delete
            </button>
            <button
            className='move-up-button'
            onClick={() => moveTaskUp(index)}>
            Move Up
            </button>
            <button
            className='move-down-button'
            onClick={() => moveTaskDown(index)}>
            Move Up
            </button>
        </li>
        )}
    </ol>
</div>
);
}


export default ToDoList;