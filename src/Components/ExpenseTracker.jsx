
import React, { useState } from "react";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Groceries",
      amount: 15000,
      category: "Food",
    },
    {
      id: 2,
      title: "Uber",
      amount: 5000,
      category: "Transport",
    },
  ]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [filterCategory, setFilterCategory] = useState("All");

  // Add expense
  function handleAddExpense(event) {
    event.preventDefault();

    if (!title.trim() || !amount) {
      return;
    }

    const newExpense = {
      id: crypto.randomUUID(),
      title,
      amount: Number(amount),
      category,
    };

    setExpenses((previousExpenses) => [
      ...previousExpenses,
      newExpense,
    ]);

    // Clear form
    setTitle("");
    setAmount("");
    setCategory("Food");
  }

  // Delete expense
  function handleDelete(id) {
    setExpenses((previousExpenses) =>
      previousExpenses.filter(
        (expense) => expense.id !== id
      )
    );
  }

  // Filter expenses
  const filteredExpenses =
    filterCategory === "All"
      ? expenses
      : expenses.filter(
          (expense) =>
            expense.category === filterCategory
        );

  // Calculate total
  const total = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-6 text-center text-3xl font-bold">
          Expense Tracker
        </h1>

        {/* ADD EXPENSE FORM */}
        <form
          onSubmit={handleAddExpense}
          className="mb-6 rounded-lg bg-white p-6 shadow"
        >
          <h2 className="mb-4 text-xl font-bold">
            Add Expense
          </h2>

          <div className="grid gap-4 md:grid-cols-3">

            {/* TITLE */}
            <input
              type="text"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
              placeholder="Expense name"
              className="rounded border p-3 outline-none focus:border-blue-500"
            />

            {/* AMOUNT */}
            <input
              type="number"
              value={amount}
              onChange={(event) =>
                setAmount(event.target.value)
              }
              placeholder="Amount"
              className="rounded border p-3 outline-none focus:border-blue-500"
            />

            {/* CATEGORY */}
            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              className="rounded border p-3 outline-none focus:border-blue-500"
            >
              <option value="Food">Food</option>
              <option value="Transport">
                Transport
              </option>
              <option value="Bills">Bills</option>
              <option value="Shopping">
                Shopping
              </option>
              <option value="Other">Other</option>
            </select>

          </div>

          <button
            type="submit"
            className="mt-4 rounded bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
          >
            Add Expense
          </button>
        </form>

        {/* SUMMARY */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">
            Total Expenses
          </h2>

          <p className="mt-2 text-3xl font-bold">
            ₦{total.toLocaleString()}
          </p>
        </div>

        {/* FILTER */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow">
          <label className="mr-3 font-semibold">
            Filter:
          </label>

          <select
            value={filterCategory}
            onChange={(event) =>
              setFilterCategory(event.target.value)
            }
            className="rounded border p-2"
          >
            <option value="All">All</option>
            <option value="Food">Food</option>
            <option value="Transport">
              Transport
            </option>
            <option value="Bills">Bills</option>
            <option value="Shopping">
              Shopping
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* EXPENSE LIST */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Expenses
          </h2>

          {filteredExpenses.length === 0 ? (
            <p className="text-gray-500">
              No expenses found.
            </p>
          ) : (
            <div className="space-y-3">
              {filteredExpenses.map((expense) => (
                <div
                  key={expense.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h3 className="font-bold">
                      {expense.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {expense.category}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-bold">
                      ₦{expense.amount.toLocaleString()}
                    </span>

                    <button
                      onClick={() =>
                        handleDelete(expense.id)
                      }
                      className="rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
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

export default ExpenseTracker;

