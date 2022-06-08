import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { IoIosCheckmarkCircle } from "react-icons/io";
// import todos from "../../data";
import { GlobalContext } from "../../context/GlobalState";

import "./TodoList.css";
import { useState } from "react";
import Modal from "../modal/Modal";

const TodoList = ({ setModal }) => {
  // const handleDelete = ({ id }) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };
  const { todos } = useContext(GlobalContext);
  const { deleteTodo, completeTodo } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  const [currTodo, setCurrTodo] = useState({});
  // console.log(todos);

  return (
    <div>
      {todos.map((crr) => (
        <li
          className="list-item"
          key={crr.id}
          onDoubleClick={() => deleteTodo(crr.id)}
        >
          <input
            type="text"
            value={crr.title}
            className={`list ${crr.complete ? "complete" : ""}`}
            // onDrag={deleteTodo(crr.id)}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              //   onClick={() => handleComplete(crr)}
              onClick={() => completeTodo(crr)}
            >
              <IoIosCheckmarkCircle />
            </button>
            <button
              className="button-edit task-button"
              onClick={() => {
                setOpen(true);
                setCurrTodo(crr);
              }}
            >
              <TiEdit />
            </button>
            <button
              className="button-delete task-button"
              // onClick={() => handleDelete(crr)}
              onClick={() => deleteTodo(crr.id)}
            >
              <BsTrash />
            </button>
          </div>
        </li>
      ))}
      {open && <Modal setModal={setOpen} todo={currTodo} />}
    </div>
  );
};

export default TodoList;
