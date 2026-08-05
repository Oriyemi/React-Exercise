// . Todo list (add, delete, complete) — array state, stable keys
import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  // console.log(todo)
  // never do this
  // todo[1] = 'go to ringroad'
  // todo.push(25);
  // todo.unshift(99)
  let id = 1;

  const userInput = (e) => {
    setUserInfo(e.target.value);
  };
  const addTodo = () => {
    setTodo([{ userInfo, id: crypto.randomUUID() }, ...todo]);
    setUserInfo("");
  };

  const deleteTodo = () => {};
  // const textArray=[1,'Remi',2,'Faith']
  console.log({ faith: userInfo });
  return (
    <div>
      <input
        className="border-2"
        onChange={userInput}
        type="text"
        value={userInfo}
      />
      <button onClick={addTodo}>Add</button>
      <ul className="flex flex-col  ">
        {todo.map((td) => (
          <li key={td.id} className="flex gap-4">
            <input type="checkbox" />

            <span>{td.userInfo}</span>

            <button>Delete</button>
          </li>
        ))}
      </ul>

      
    </div>
  );
}

export default Todo;
