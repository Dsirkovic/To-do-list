export const Task = (props) => {
    return <div className="task"
            style={{backgroundColor: props.completed ? "#55e838" : "white"}}>
                <h1>{props.taskName}</h1>
                <button onClick={() =>props.completeTask(props.id)}> Complete </button>
                {!props.completed && (
                <button id="deleteTaskBtn" 
                style={{backgroundColor: "#eb362d", width: "40px"}} 
                onClick={() => props.deleteTask(props.id)}>X</button>)}
            </div>
}