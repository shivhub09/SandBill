import React, { useState } from 'react';
import Drawer from './Drawer';
import './Drawer.css';
import './OverView.css';

const OverView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="layout">
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="dashboard-content">
        <div className="dashboard-grid">
          {/* Total Receivables Card */}
          <div className="dashboard-tile">
            <h3>TOTAL RECEIVABLES</h3>
            <div className="amount-display">
              <h2>₹3,84,500.00</h2>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
                <div className="progress-secondary" style={{ width: '30%' }}></div>
              </div>
              <div className="amount-details">
                <span>Current: ₹2,42,250.00</span>
                <span>Overdue: ₹42,250.00</span>
              </div>
            </div>
          </div>

          {/* Total Payables Card */}
          <div className="dashboard-tile">
            <h3>TOTAL PAYABLES</h3>
            <div className="amount-display">
              <h2>₹22,54,500.00</h2>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
                <div className="progress-secondary" style={{ width: '20%' }}></div>
              </div>
              <div className="amount-details">
                <span>Current: ₹2,42,250.00</span>
                <span>Overdue: ₹12,250.00</span>
              </div>
            </div>
          </div>

          {/* Cash Flow Graph */}
          <div className="dashboard-tile large">
            <h3>CASH FLOW</h3>
            <div className="graph-container">
              {/* You'll need to add a chart library like recharts or chart.js for the graph */}
              <div className="cash-flow-details">
                <div>Cash as on 01-04-23: ₹42,250.11</div>
                <div className="flow-item positive">Incoming: ₹11,153,838.29</div>
                <div className="flow-item negative">Outgoing: ₹12,359,118.12</div>
                <div>Cash as on 31-03-24: ₹1,541,933.67</div>
              </div>
            </div>
          </div>

          {/* Top Expenses */}
          <div className="dashboard-tile">
            <h3>TOP EXPENSES</h3>
            <div className="expenses-list">
              {/* Add your expenses list here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
