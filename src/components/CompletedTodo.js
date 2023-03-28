import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CompletedTodo = () => {
  const data = useSelector((state) => state.completedList);
  return (
    <section className="text-slate-800 bg-white rounded-md">
      <h2 className="font-bold text-xl bg-green-800 rounded-t-md p-5 text-white">
        Completed Todo
      </h2>
      <ul className="p-8">
        {data?.length > 0 ? (
          <li className="flex gap-4">
            <input type="checkbox" className="w-[30px]" />
            <span className="text-lg">jgfsfskh</span>
          </li>
        ) : (
          <li className="flex gap-4">
            <span className="text-lg text-slate-500">No Completed Todo</span>
          </li>
        )}
      </ul>
    </section>
  );
};

export default CompletedTodo;
