import React from "react";
import { useContext } from "react";
import Header from "../../Component/header/Header";
import TodoList from "../../Component/todolist/TodoList";
import { GlobalContext } from "../../context/GlobalState";

const CompletedPage = () => {
    const {todos} =useContext(GlobalContext);
  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header str="Completed" />
          </div>
          <div>
            {todos.map((crr)=>{
                if(!crr.complete)
                {
                    
                }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedPage;
