import React from "react";

const IncompleteTodo = () => {
  return (
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
  );
};

export default IncompleteTodo;
