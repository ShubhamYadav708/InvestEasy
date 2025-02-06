import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="dashboard-header">
        <h2>Welcome to Your Dashboard</h2>
        <p>Your investment journey is just getting started.</p>
      </section>

      <section className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Portfolio Value</h3>
          <p>$10,500</p>
        </div>
        <div className="stat-card">
          <h3>Invested Amount</h3>
          <p>$7,000</p>
        </div>
        <div className="stat-card">
          <h3>Profit</h3>
          <p>$3,500</p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
