import React, { useState } from "react";

function Kanban() {
  const [columns, setColumns] = useState({
    todo: [
      { id: 1, title: "Design homepage" },
      { id: 2, title: "Create login page" },
    ],

    inProgress: [
      { id: 3, title: "Build API" },
    ],

    done: [
      { id: 4, title: "Setup React project" },
    ],
  });

  // When dragging starts
  function handleDragStart(event, taskId, sourceColumn) {
    event.dataTransfer.setData("taskId", taskId);
    event.dataTransfer.setData("sourceColumn", sourceColumn);
  }

  // Allows the task to be dropped
  function handleDragOver(event) {
    event.preventDefault();
  }

  // When the task is dropped
  function handleDrop(event, targetColumn) {
    event.preventDefault();

    const taskId = Number(
      event.dataTransfer.getData("taskId")
    );

    const sourceColumn =
      event.dataTransfer.getData("sourceColumn");

    // Don't move if dropped in the same column
    if (sourceColumn === targetColumn) {
      return;
    }

    setColumns((previousColumns) => {
      // Find the task we are moving
      const task = previousColumns[sourceColumn].find(
        (task) => task.id === taskId
      );

      // If task cannot be found, don't change anything
      if (!task) {
        return previousColumns;
      }

      return {
        ...previousColumns,

        // Remove task from old column
        [sourceColumn]: previousColumns[sourceColumn].filter(
          (task) => task.id !== taskId
        ),

        // Add task to new column
        [targetColumn]: [
          ...previousColumns[targetColumn],
          task,
        ],
      };
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Kanban Board
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* TODO COLUMN */}
        <div
          className="min-h-[400px] rounded-lg bg-gray-200 p-4"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, "todo")}
        >
          <h2 className="mb-4 text-xl font-bold">
            Todo
          </h2>

          {columns.todo.map((task) => (
            <div
              key={task.id}
              draggable
              onDragStart={(event) =>
                handleDragStart(
                  event,
                  task.id,
                  "todo"
                )
              }
              className="mb-3 cursor-grab rounded-lg bg-white p-4 shadow"
            >
              {task.title}
            </div>
          ))}
        </div>

        {/* IN PROGRESS COLUMN */}
        <div
          className="min-h-[400px] rounded-lg bg-blue-100 p-4"
          onDragOver={handleDragOver}
          onDrop={(event) =>
            handleDrop(event, "inProgress")
          }
        >
          <h2 className="mb-4 text-xl font-bold">
            In Progress
          </h2>

          {columns.inProgress.map((task) => (
            <div
              key={task.id}
              draggable
              onDragStart={(event) =>
                handleDragStart(
                  event,
                  task.id,
                  "inProgress"
                )
              }
              className="mb-3 cursor-grab rounded-lg bg-white p-4 shadow"
            >
              {task.title}
            </div>
          ))}
        </div>

        {/* DONE COLUMN */}
        <div
          className="min-h-[400px] rounded-lg bg-green-100 p-4"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, "done")}
        >
          <h2 className="mb-4 text-xl font-bold">
            Done
          </h2>

          {columns.done.map((task) => (
            <div
              key={task.id}
              draggable
              onDragStart={(event) =>
                handleDragStart(
                  event,
                  task.id,
                  "done"
                )
              }
              className="mb-3 cursor-grab rounded-lg bg-white p-4 shadow"
            >
              {task.title}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Kanban;