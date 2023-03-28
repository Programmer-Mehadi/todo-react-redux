import { createStore } from "redux";

const initialState = { incompleteList: [], completedList: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        incompleteList: [...state.incompleteList, action?.payload],
      };
    case "MAKE_INCOMPLETE_TODO":
      return state;
    case "MAKE_COMPLETED_TODO":
      const completeTodo = state.incompleteList.filter(
        (todo) => todo?.id === action?.payload?.id
      );
      const incompleteList = state.incompleteList.filter(
        (todo) => todo?.id !== action?.payload?.id
      );
      const completedList = [...state.completedList, ...completeTodo];
      state = {
        incompleteList: [...incompleteList],
        completedList: [...completedList],
      };
      return state;
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export { store };
