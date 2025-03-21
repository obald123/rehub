import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard">
        <h1>Welcome to the Dashboard</h1>
        <p>Here you can find an overview of your activities and quick access to important features.</p>

        {/* Section for user information */}
        <section className="dashboard-section">
          <h2>Your Profile</h2>
          <p>Name: Ndagijimana Patrick</p>
          <p>Email: ndagijimanapatrick@gmail.com</p>
        </section>

        {/* Section for recent activities */}
        <section className="dashboard-section">
          <h2>Recent Activities</h2>
          <ul>
            <li>Logged in at 10:00 AM</li>
            <li>Viewed the Admin Dashboard</li>
            <li>Updated profile information</li>
          </ul>
        </section>

        {/* Section for quick links */}
        <section className="dashboard-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/admin">Go to Admin Dashboard</a></li>
            <li><a href="/settings">Update Profile Settings</a></li>
            <li><a href="/help">Help & Support</a></li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;