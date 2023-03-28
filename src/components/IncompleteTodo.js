import React from "react";
import { useSelector } from "react-redux";

const IncompleteTodo = () => {
  const data = useSelector((state) => state.incompleteList);

  return (
    <section className=" bg-white text-slate-800 rounded-md">
      <h2 className="font-bold text-xl bg-rose-800 rounded-t-md p-5 text-white">
        Incomplete Todo
      </h2>
      <table className="table w-[98%] mx-auto my-5">
        <thead>
          <tr>
            <th>No</th>
            <th>Status</th>
            <th>Todo</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data?.map((todo, index) => {
              const { todoText, todoDate } = todo;
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <input type="checkbox" className="w-[30px]" />
                  </td>
                  <td className="text-lg">{todoText}</td>
                  <td className="text-lg">{todoDate}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="text-lg text-slate-500 text-center" colspan="4">
                No Incompleted Todo
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default IncompleteTodo;
