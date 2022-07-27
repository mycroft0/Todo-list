import TodoRows from "./TodoRows";
import "./ToDoStyle.css"

const TodoTitles = ({todo,onDelete})=>{

    return(
        <div>
            {todo.map((item)=>{
                return(
                    <TodoRows  key = {item.id} todos = {item}  onDelete = {onDelete}
                    />
                )
            })}
        </div>
    )

}

export default TodoTitles