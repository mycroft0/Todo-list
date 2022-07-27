const TodoFooter = ({todo, clearDoneTasks}) => {

    return (
        <>
            <button onClick={clearDoneTasks} style={{background:"aqua"}}>Clear all done tasks</button>
        </>

    )
}

export default TodoFooter
