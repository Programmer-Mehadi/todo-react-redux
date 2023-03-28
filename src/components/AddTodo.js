import React from "react";

const AddTodo = () => {
  return (
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
  );
};

export default AddTodo;
