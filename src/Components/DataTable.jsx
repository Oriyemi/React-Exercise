
import React, { useMemo, useState } from "react";

function DataTable() {
  const [users] = useState([
    {
      id: 1,
      name: "Faith Esan",
      email: "faith@example.com",
      role: "Frontend Developer",
      status: "Active",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      role: "Backend Developer",
      status: "Active",
    },
    {
      id: 3,
      name: "Mary Jane",
      email: "mary@example.com",
      role: "Designer",
      status: "Inactive",
    },
    {
      id: 4,
      name: "David Smith",
      email: "david@example.com",
      role: "Frontend Developer",
      status: "Active",
    },
    {
      id: 5,
      name: "Sarah James",
      email: "sarah@example.com",
      role: "Product Manager",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Backend Developer",
      status: "Active",
    },
    {
      id: 7,
      name: "Grace Williams",
      email: "grace@example.com",
      role: "Designer",
      status: "Active",
    },
    {
      id: 8,
      name: "Daniel Wilson",
      email: "daniel@example.com",
      role: "Frontend Developer",
      status: "Inactive",
    },
    {
      id: 9,
      name: "Esther Johnson",
      email: "esther@example.com",
      role: "Product Manager",
      status: "Active",
    },
    {
      id: 10,
      name: "Peter Adams",
      email: "peter@example.com",
      role: "Backend Developer",
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] =
    useState("asc");

  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  // Search and filter
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        user.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        user.role
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        user.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [users, search, statusFilter]);

  // Sort
  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      const first = a[sortField].toLowerCase();
      const second = b[sortField].toLowerCase();

      if (first < second) {
        return sortDirection === "asc" ? -1 : 1;
      }

      if (first > second) {
        return sortDirection === "asc" ? 1 : -1;
      }

      return 0;
    });
  }, [filteredUsers, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(
    sortedUsers.length / usersPerPage
  );

  const startIndex =
    (currentPage - 1) * usersPerPage;

  const currentUsers = sortedUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  // Change sorting
  function handleSort(field) {
    if (sortField === field) {
      setSortDirection((previousDirection) =>
        previousDirection === "asc"
          ? "desc"
          : "asc"
      );
    } else {
      setSortField(field);
      setSortDirection("asc");
    }

    setCurrentPage(1);
  }

  // Search
  function handleSearch(event) {
    setSearch(event.target.value);
    setCurrentPage(1);
  }

  // Filter
  function handleFilter(event) {
    setStatusFilter(event.target.value);
    setCurrentPage(1);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-6 text-3xl font-bold">
          Users Data Table
        </h1>

        {/* CONTROLS */}
        <div className="mb-6 flex flex-col gap-4 rounded-lg bg-white p-4 shadow md:flex-row">

          {/* SEARCH */}
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search users..."
            className="flex-1 rounded border p-3 outline-none focus:border-blue-500"
          />

          {/* FILTER */}
          <select
            value={statusFilter}
            onChange={handleFilter}
            className="rounded border p-3 outline-none"
          >
            <option value="All">All statuses</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-lg bg-white shadow">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>

                <th className="p-4 text-left">
                  <button
                    onClick={() =>
                      handleSort("name")
                    }
                    className="font-bold"
                  >
                    Name{" "}
                    {sortField === "name" &&
                      (sortDirection === "asc"
                        ? "↑"
                        : "↓")}
                  </button>
                </th>

                <th className="p-4 text-left">
                  Email
                </th>

                <th className="p-4 text-left">
                  <button
                    onClick={() =>
                      handleSort("role")
                    }
                    className="font-bold"
                  >
                    Role{" "}
                    {sortField === "role" &&
                      (sortDirection === "asc"
                        ? "↑"
                        : "↓")}
                  </button>
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

              </tr>
            </thead>

            <tbody>
              {currentUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="p-8 text-center text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              ) : (
                currentUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4 font-semibold">
                      {user.name}
                    </td>

                    <td className="p-4">
                      {user.email}
                    </td>

                    <td className="p-4">
                      {user.role}
                    </td>

                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

        {/* PAGINATION */}
        <div className="mt-6 flex items-center justify-between rounded-lg bg-white p-4 shadow">

          <button
            onClick={() =>
              setCurrentPage(
                (previousPage) =>
                  previousPage - 1
              )
            }
            disabled={currentPage === 1}
            className="rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Previous
          </button>

          <span className="font-semibold">
            Page {currentPage} of{" "}
            {totalPages || 1}
          </span>

          <button
            onClick={() =>
              setCurrentPage(
                (previousPage) =>
                  previousPage + 1
              )
            }
            disabled={
              currentPage === totalPages ||
              totalPages === 0
            }
            className="rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Next
          </button>

        </div>

      </div>
    </div>
  );
}

export default DataTable;

