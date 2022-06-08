import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Modal.css";
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";

const Modal = ({ setModal, todo = { title: "" }, add }) => {
  const [title, setTitle] = useState(() => todo.title);
  const { addTodo, editTodo } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    if (add) {
      addTodo(newTodo);
      setModal(false);
      return;
    }
    editTodo(todo.id, { title, completed: false });
    setModal(false);
  };

  return (
    <div>
      <div className="modalBackground">
        <div className="modalContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a Todo..."
              className="task-input"
            />

            <div className="btn">
              <button
                className="button-Cancel"
                onClick={() => setModal(false)}
                type="button"
              >
                Cancel
              </button>
              <button className="button-add" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
