import "../main.css";
import React, { useState } from "react";
import Form from "../../Component/form/Form";
import TodoList from "../../Component/todolist/TodoList";
import Header from "../../Component/header/Header";

function HomePage() {
  //modal
  const [modal, setModal] = useState(false);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header str="Today's" />
        </div>
        <div>
          <Form modal={modal} setModal={setModal} />
        </div>
        <div>
          <TodoList setModal={setModal} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
