import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [userInfo, setUserInfo] = useState("");

  const userInput = (e) => {
    setUserInfo(e.target.value);
  };

  const addTodo = () => {
    setTodo([
      {
        userInfo,
        id: crypto.randomUUID(),
        completed: false,
      },
      ...todo,
    ]);

    setUserInfo("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-yellow-400 p-5 rounded-3xl">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          My Todos List
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={userInfo}
            onChange={userInput}
            placeholder="Add a new task..."
            className="flex-1 border-2 border-gray-400 rounded-lg px-3 py-2 "
          />
          <button
            onClick={addTodo}
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todo.map((td) => (
            <li
              key={td.id}
              className="flex items-center justify-between bg-white shadow-sm border border-gray-200 rounded-lg px-4 py-2"
            >
              <span
                style={{
                  textDecoration: td.completed ? "line-through" : "none",
                }}
                className="text-gray-700 wrap-break-words"
              >
                {td.userInfo}
              </span>

              <div className="flex gap-2 shrink-0 ml-3">
                <button
                  className="bg-green-500 hover:bg-green-600  text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                  onClick={() => {
                    setTodo(
                      todo.map((item) =>
                        item.id === td.id ? { ...item, completed: true } : item,
                      ),
                    );
                  }}
                >
                   ✓
                </button>

                <button
                  onClick={() => {
                    setTodo(todo.filter((item) => item.id !== td.id));
                  }}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm font-medium transition-colors"
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;