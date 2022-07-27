import TodoTitles from "./components/TodoTitles";
import {useEffect, useState} from "react";
import TodoFooter from "./components/TodoFooter";


function App() {

    const [todo, setTodoList] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(results => {
                let arr = results.slice(0, 60)
                setTodoList(arr)
            })
    }, [])

    const handleSort = () => {
        const sorted = todo.sort((a, b) => a.completed - b.completed)
        setTodoList([...sorted])
    }

    return (
        <div className="App">
            <TodoTitles todo={todo}
                        onDelete={(todos) => {
                            setTodoList(todo.filter((t) => t.id !== todos.id))
                        }}/>

            <TodoFooter todo={todo} clearDoneTasks={() => {
                setTodoList(todo.filter((item) => !item.completed))
            }}/>


            <button onClick={() => handleSort(todo)}>Sort</button>

        </div>
    )

}

export default App;