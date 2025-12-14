import React from "react";

const Task = (props) => {

    const priorityColors = {
    Low: "#a2dd18ff",     
    Medium: "#e26f0bff",  
    High: "#8f0909ff"     
    }
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            
            <p className='title'>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='description'>{props.description}</p>
            <p className='priority' style={{ backgroundColor: priorityColors[props.priority]}}>{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

        </div>
    )

}

export default Task;
