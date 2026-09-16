import React, { useState } from "react";
import Pagination from "./Question34B";

function UserPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const users = [
    "Faith",
    "John",
    "Mary",
    "David",
    "Grace",
    "Peter",
    "Sarah",
    "Daniel",
    "Blessing",
    "James",
  ];

  const usersPerPage = 2;

 const totalPages = Math.ceil(users.length / usersPerPage);

  const startIndex = (currentPage - 1) * usersPerPage;

  const currentUsers = users.slice(
    startIndex,
    startIndex + usersPerPage
  );

  return (
    <div>
      <h1>Users</h1>

      {currentUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default UserPagination;