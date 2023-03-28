import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux/redux.js";
function App() {
  return (
    <Provider store={store}>
      <div className="App bg-slate-800 px-3">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
