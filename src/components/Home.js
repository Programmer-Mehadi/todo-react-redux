import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import CompletedTodo from "./CompletedTodo";
import IncompleteTodo from "./IncompleteTodo";

const Home = () => {
  return (
    <div>
      <header className="py-5">
        <h2 className="text-2xl font-bold text-center text-white">
          Todo - React Redux
        </h2>
      </header>
      <AddTodo></AddTodo>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[800px] mx-auto">
        {/* incomplete todo */}
        <IncompleteTodo></IncompleteTodo>
        {/* completed todo */}
        <CompletedTodo></CompletedTodo>
      </section>
    </div>
  );
};

export default Home;
