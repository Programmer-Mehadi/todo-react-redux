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
      let comTodo = state.completedList.filter(
        (todo) => todo?.id === action?.payload?.id
      );
      let completeList = state.completedList.filter(
        (todo) => todo?.id !== action?.payload?.id
      );
      return {
        incompleteList: [...state.incompleteList, ...comTodo],
        completedList: [...completeList],
      };
    case "MAKE_COMPLETED_TODO":
      let incomTodo = state.incompleteList.filter(
        (todo) => todo?.id === action?.payload?.id
      );
      let incompleteList = state.incompleteList.filter(
        (todo) => todo?.id !== action?.payload?.id
      );
      state = {
        incompleteList: [...incompleteList],
        completedList: [...state.completedList, ...incomTodo],
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
