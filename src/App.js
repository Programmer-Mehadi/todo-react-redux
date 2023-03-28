import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App bg-slate-800 px-3">
      <header className="py-5">
        <h2 className="text-2xl font-bold text-center text-white">
          Todo - React Redux
        </h2>
      </header>
      <section className="py-5">
        <form className="bg-green-100 w-full max-w-[800px] mx-auto border-2 shadow-md rounded-md p-8 grid grid-cols-1 gap-4 justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Type here..."
              className="input input-bordered"
            />
            <input type="date" className="input input-bordered" />
          </div>
          <button className="btn btn-success rounded-[5px]">Add</button>
        </form>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[800px] mx-auto">
        {/* incomplete todo */}
        <section className=" bg-white text-slate-800 rounded-md">
          <h2 className="font-bold text-xl bg-rose-800 rounded-t-md p-5 text-white">
            Incomplete Todo
          </h2>
          <ul className="p-8">
            <li className="flex gap-4">
              <input type="checkbox" className="w-[30px]" />
              <span className="text-lg">jgfsfskh</span>
            </li>
          </ul>
        </section>
        {/* completed todo */}
        <section className="text-slate-800 bg-white rounded-md">
          <h2 className="font-bold text-xl bg-green-800 rounded-t-md p-5 text-white">
            Completed Todo
          </h2>
          <ul className="p-8">
            <li className="flex gap-4">
              <input type="checkbox" className="w-[30px]" />
              <span className="text-lg">jgfsfskh</span>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;
