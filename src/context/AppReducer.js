const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.map((crr) => {
          if (crr.id === action.payload.id) {
            return { ...crr, complete: !crr.complete };
          }
          return crr;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
