import { actionContants } from "./action";

const initState = {
  todos: [],
  isLoading: true,
  isError: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionContants.GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actionContants.GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.payload.todos,
        isLoading: false
      };
    }
    case actionContants.GET_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }

    case actionContants.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    case actionContants.REMOVE_TODO_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action?.payload?.id)
      };
    }
    case actionContants.TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
      };
    }
    default:
      return state;
  }
};

export default reducer;
