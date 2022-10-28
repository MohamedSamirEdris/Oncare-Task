import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useUsers } from '../utilits/users.js';

const Dashboard = () => {
  const users = useSelector((state) => state.users);
  const { GetUsers, DeleteUser } = useUsers();

  const handleDelete = (userId) => {
    DeleteUser(userId);
  };

  useEffect(() => {
    GetUsers();
  }, [GetUsers]);

  return (
    <div className="container mt-5">
      <h1>Users List</h1>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="button is-small is-primary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                  className="button is-small is-danger ml-3"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
