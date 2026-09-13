
import React, { useState } from "react";

function HabitTracker() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Read React",
      completed: false,
      streak: 3,
    },
    {
      id: 2,
      name: "Exercise",
      completed: false,
      streak: 5,
    },
  ]);

  const [habitName, setHabitName] = useState("");

  // Add a new habit
  function handleAddHabit(event) {
    event.preventDefault();

    if (!habitName.trim()) {
      return;
    }

    const newHabit = {
      id: crypto.randomUUID(),
      name: habitName,
      completed: false,
      streak: 0,
    };

    setHabits((previousHabits) => [
      ...previousHabits,
      newHabit,
    ]);

    setHabitName("");
  }

  // Mark habit as completed
  function handleToggleHabit(id) {
    setHabits((previousHabits) =>
      previousHabits.map((habit) => {
        if (habit.id !== id) {
          return habit;
        }

        const newCompleted = !habit.completed;

        return {
          ...habit,
          completed: newCompleted,
          streak: newCompleted
            ? habit.streak + 1
            : Math.max(habit.streak - 1, 0),
        };
      })
    );
  }

  // Delete habit
  function handleDeleteHabit(id) {
    setHabits((previousHabits) =>
      previousHabits.filter(
        (habit) => habit.id !== id
      )
    );
  }

  // Number of completed habits
  const completedHabits = habits.filter(
    (habit) => habit.completed
  ).length;

  // Calculate completion percentage
  const completionPercentage =
    habits.length === 0
      ? 0
      : Math.round(
          (completedHabits / habits.length) * 100
        );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-6 text-center text-3xl font-bold">
          Habit Tracker
        </h1>

        {/* ADD HABIT */}
        <form
          onSubmit={handleAddHabit}
          className="mb-6 rounded-lg bg-white p-6 shadow"
        >
          <h2 className="mb-4 text-xl font-bold">
            Add Habit
          </h2>

          <div className="flex gap-3">
            <input
              type="text"
              value={habitName}
              onChange={(event) =>
                setHabitName(event.target.value)
              }
              placeholder="Enter a habit..."
              className="flex-1 rounded border p-3 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="rounded bg-blue-500 px-5 py-3 text-white hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>

        {/* PROGRESS */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow">
          <div className="mb-2 flex justify-between">
            <h2 className="font-bold">
              Today's Progress
            </h2>

            <span className="font-bold">
              {completionPercentage}%
            </span>
          </div>

          <div className="h-4 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-green-500 transition-all"
              style={{
                width: `${completionPercentage}%`,
              }}
            />
          </div>

          <p className="mt-2 text-sm text-gray-500">
            {completedHabits} of {habits.length} habits
            completed
          </p>
        </div>

        {/* HABITS */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            My Habits
          </h2>

          {habits.length === 0 ? (
            <p className="text-gray-500">
              No habits yet. Add your first habit.
            </p>
          ) : (
            <div className="space-y-3">
              {habits.map((habit) => (
                <div
                  key={habit.id}
                  className={`flex items-center justify-between rounded-lg border p-4 ${
                    habit.completed
                      ? "bg-green-50"
                      : "bg-white"
                  }`}
                >
                  <div>
                    <h3
                      className={`font-bold ${
                        habit.completed
                          ? "text-green-600 line-through"
                          : ""
                      }`}
                    >
                      {habit.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      🔥 {habit.streak} day streak
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        handleToggleHabit(habit.id)
                      }
                      className={`rounded px-4 py-2 text-white ${
                        habit.completed
                          ? "bg-gray-500"
                          : "bg-green-500"
                      }`}
                    >
                      {habit.completed
                        ? "Completed"
                        : "Complete"}
                    </button>

                    <button
                      onClick={() =>
                        handleDeleteHabit(habit.id)
                      }
                      className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default HabitTracker;

