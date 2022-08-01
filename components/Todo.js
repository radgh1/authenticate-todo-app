import React, { useState, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext'
import TodoForm from '../components/TodoForm';

export default function Todo( {todo} ) {

    const {updateTodo, deleteTodo} = useContext(TodosContext);

    const handleToggleCompleted = () => {
        const updatedFields = {
            ...todo.fields,
            completed: !todo.fields.completed
        }
        const updatedTodo = {id: todo.id, fields: updatedFields};
        updateTodo(updatedTodo);
    }

    const handleDescriptionSubmit = (e) => {
        e.preventDefault();
        
        const updatedFields = {
            ...todoUseState.fields,
            completed: todo.fields.completed,
            description: e.target.description.value
        }
        const updatedTodo = {id: todo.id, fields: updatedFields};
        updateTodo(updatedTodo);
    };

    const [todoUseState, setTodoUseState] = useState({
        description: todo.fields.description,

        handleDescriptionSubmit
    })

    return (
        <li  className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4">
            <input type="checkbox" 
                name="completed" 
                id="completed" 
                checked={todo.fields.completed} 
                className ="mr-2 form-checkbox h-5 w-5"
                onChange={handleToggleCompleted}
            />
            <span
                className={`flex-1 text-gray-800  ${
                    todo.fields.completed ? 'line-through' : ''
                }`}
            >
                <form className="form my-6" onSubmit={handleDescriptionSubmit}>
                    <div className="flex flex-col text-sm mb-2">
                        <input
                            type="text"
                            name="description"
                            id="description" 
                            value={todoUseState.description}
                            className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                            onChange={(e) => setTodoUseState(e.target.value)}
                            required 
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
                    >
                        Update
                    </button>
                </form>
            </span>
            <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>        
        </li>
    )
}