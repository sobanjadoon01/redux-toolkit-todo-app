import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addTodo,
  deleteTodo,
  updateTodo,
} from "./too/feature/todoSlice.js";

const TodoItem = ({ todo, deleteTodoHandler, editTodoHandler }) => {
  return (
    <div className="flex justify-between items-center mt-3 rounded-xl bg-[#0f172a] px-3 py-2 text-white">
      <span>{todo.title}</span>
      <div className="flex gap-2">
        <button
          onClick={() => editTodoHandler(todo)}
          className="bg-yellow-500 px-2 py-1 rounded-lg text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodoHandler(todo.id)}
          className="bg-red-500 px-2 py-1 rounded-lg text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [input, setInput] = useState("");
  const [isEditTodo, setIsEditTodo] = useState(null);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const toastHandler = (message) => {
    return toast(message);
  };

  const updateTodoHandler = () => {
    dispatch(
      updateTodo({
        id: isEditTodo,
        title: input,
      })
    );

    setInput("");
    setIsEditTodo(null);
  };

  const addTodoHandler = () => {
    if (input.trim() === "") {
      return toastHandler("please enter a task!");
    }

    if (isEditTodo !== null) {
      updateTodoHandler();
      return;
    }

    dispatch(
      addTodo({
        id: new Date().getTime(),
        title: input,
      })
    );

    toastHandler("task added!");
    setInput("");
  };

  const editTodoHandler = (todo) => {
    setIsEditTodo(todo.id);
    setInput(todo.title);
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#0f172a]">
      <div className="shadow-md rounded-2xl w-[450px] p-4 bg-[#1e293b]">
        <h1 className="text-2xl font-bold text-white">Todo Application</h1>

        <div className="w-full h-[45px] flex justify-between gap-3 mb-3 mt-3">
          <input
            type="text"
            placeholder="add your task"
            className="bg-[#0f172a] rounded-2xl text-white pl-3 w-[80%] h-[45px] outline-blue-600"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={addTodoHandler}
            className="cursor-pointer w-[100px] text-white bg-blue-600 rounded-2xl"
          >
            {isEditTodo ? "Update" : "Add"}
          </button>
        </div>

        <div>
          {todos && todos.length > 0 ? (
            todos.map((todo) => (
              <TodoItem
                deleteTodoHandler={deleteTodoHandler}
                editTodoHandler={editTodoHandler}
                key={todo.id}
                todo={todo}
              />
            ))
          ) : (
            <p className="text-white text-center">No Todos</p>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;