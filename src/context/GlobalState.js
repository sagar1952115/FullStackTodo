import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  todos: [
    {
      id: 1,
      title: "hello",
      complete: false,
    },
    {
      id: 2,
      title: "hello",
      complete: false,
    },
    {
      id: 3,
      title: "hello",
      complete: false,
    },
    {
      id: 4,
      title: "hello",
      complete: false,
    },
    {
      id: 5,
      title: "hello",
      complete: false,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //   Actions

  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  }
  function addTodo(todo) {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  }
  function completeTodo(todo) {
    dispatch({
      type: "COMPLETE_TODO",
      payload: todo,
    });
  }
  function editTodo(id, data) {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id,
        data,
      },
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        completeTodo,
        editTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
