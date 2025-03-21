import React from 'react';
import '../App.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <h1>Rehub Center</h1>
      <nav>
        <a href="/dashboard">Dashboard</a>
        <a href="/admin">Admin</a>
        <a href="/login">Logout</a>
      </nav>
    </header>
  );
};

export default Header;