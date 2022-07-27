import "./ToDoStyle.css"

const TodoRows = ({todos,onDelete}) =>{
    return(
        <div>
            <label>
                <input type = 'checkbox' checked={todos.completed}/>
                <span className="todo-list-style" style = {{backgroundColor: todos.completed && "green" }}>{todos.title} </span>
                <button onClick={()=>{
                    onDelete(todos)
                }}>X</button>
            </label>

        </div>
    )
}

export default TodoRows