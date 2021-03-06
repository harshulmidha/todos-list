import React from 'react'
import TodoItem from "./TodoItem";
export default function Todos(props) {
    let myStyle = {
        minHeight: "70vh",
        marginBottom: "40px"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">Todos List<hr /></h3>
            {props.todos.length === 0 ? "No Todos to Display" :
                props.todos.map((todo) => {
                    return (
                        <>
                            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr /></>)
                })}
        </div>
    )
}
