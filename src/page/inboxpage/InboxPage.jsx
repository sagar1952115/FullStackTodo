import "../main.css";
import React, { useState } from "react";
import TodoList from "../../Component/todolist/TodoList";
import Header from "../../Component/header/Header";

function InboxPage() {
  //modal
  const [modal, setModal] = useState(false);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header str="Inbox" />
        </div>
        <div>
          <TodoList setModal={setModal} />
        </div>
      </div>
    </div>
  );
}

export default InboxPage;
