const TodoFooter = ({todos, onClearCompleted}) => {
    const completedSize = todos.filter((todo) => todo.completed).length
    return (
        <>
            <span> {completedSize}/{todos.length} Completed</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </>

    )
}

export default TodoFooter
