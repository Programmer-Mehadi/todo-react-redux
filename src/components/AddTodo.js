import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const [error, setError] = useState({
    todoText: false,
    todoDate: false,
  });
  const handleAddTodoSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const todoText = form.todoInput.value;
    const todoDate = form.todoDate.value;

    const newTodoData = {
      id: Math.random().toString().slice(3, 10),
      todoText,
      todoDate,
      status: "Incomplete",
    };
    let newError = {};
    if (newTodoData?.todoText === "") {
      newError = { todoText: true, todoDate: false };
    }
    if (newTodoData?.todoDate === "") {
      newError = { ...newError, todoDate: true };
    }
    setError(newError);

    if (newTodoData.todoText !== "" && newTodoData.todoDate !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: newTodoData,
      });
    }
  };

  return (
    <section className="py-5">
      <form
        className="bg-green-100 w-full max-w-[800px] mx-auto border-2 shadow-md rounded-md p-8 grid grid-cols-1 gap-4 justify-between"
        onSubmit={handleAddTodoSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Type here..."
            className={`${
              error?.todoText && "border-rose-700"
            } input input-bordered`}
            name="todoInput"
          />
          <input
            name="todoDate"
            type="date"
            className={`${
              error?.todoDate && "border-rose-700"
            } input input-bordered`}
          />
        </div>
        <button type="submit" className="btn btn-success rounded-[5px]">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddTodo;
