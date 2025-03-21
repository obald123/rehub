import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css'; // Import the CSS file

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'ndagijimana', email: 'ndagijimana@example.com' },
    { id: 2, name: 'patrick', email: 'patrick@example.com' },
  ]);

  const handleAddUser = () => {
    const newUser = { id: users.length + 1, name: 'New User', email: 'newuser@example.com' };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <Header />
      <div className="dashboard">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin panel. Use the sections below to manage the application.</p>

        {/* Section for managing users */}
        <section className="admin-section">
          <h2>Manage Users</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleAddUser}>Add User</button>
        </section>

        {/* Section for viewing analytics */}
        <section className="admin-section">
          <h2>View Analytics</h2>
          <p>Analyze app usage and performance metrics.</p>
          <div className="analytics-placeholder">
            <p>Analytics charts will be displayed here.</p>
          </div>
        </section>

        {/* Section for app settings */}
        <section className="admin-section">
          <h2>App Settings</h2>
          <form>
            <label>
              Enable Notifications:
              <input type="checkbox" />
            </label>
            <label>
              Theme:
              <select>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </label>
            <button type="submit">Save Settings</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;