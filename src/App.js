import {useEffect, useState} from "react";
import TodoTitles from "./components/TodoTitles";
import TodoFooter from "./components/TodoFooter";

function App() {

    const [data, setData] = useState([])
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(results => {
                setData(results.data)
                let arr = results.slice(0, 10)
                setTodos(arr)
                console.log(arr)
            })
    }, [])

    const handleSort = () => {
        const sorted = todos.sort((a, b) => a.completed - b.completed)
        setTodos(sorted)
    }

    return (
        <div className="App">
            <TodoTitles todos={todos}
                        onDelete={(todo) => {
                            setTodos(todos.filter((t) => t.id !== todo.id))
                        }}/>

            <TodoFooter
                todos={todos}
                onClearCompleted={() => {
                    setTodos(todos.filter((item) => !item.completed))
                }}/>

            <button onClick={() => handleSort(todos)}>Sort</button>
        </div>
    );
}

export default App;
