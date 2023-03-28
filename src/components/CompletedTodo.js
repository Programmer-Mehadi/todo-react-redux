import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CompletedTodo = () => {
  const data = useSelector((state) => state.completedList);
  const dispatch = useDispatch();
  return (
    <section className="text-slate-800 bg-white rounded-md">
      <h2 className="font-bold text-xl bg-green-800 rounded-t-md p-5 text-white">
        Completed Todo
      </h2>
      <div className="overflow-auto">
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
                      <input
                        type="checkbox"
                        className="w-[30px]"
                        checked={true}
                        onChange={() => {
                          dispatch({
                            type: "MAKE_INCOMPLETE_TODO",
                            payload: { id: todo.id },
                          });
                        }}
                      />
                    </td>
                    <td className="text-lg">{todoText}</td>
                    <td className="text-lg">{todoDate}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="text-lg text-slate-500 text-center" colspan="4">
                  No Completed Todo
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CompletedTodo;
