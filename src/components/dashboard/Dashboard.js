import React from "react";
import PieChart from "../pie-chart/PieChart";
import ApplicationTable from "../application-table/ApplicationTable";
import { DataProvider } from "../../hooks/useDataContext";

import "./Dashboard.scss";
import BarChart from "../bar-chart/BarChart";

const Dashboard = () => {
  return (
    <DataProvider>
      <div className="dashboard">
        <div className="title-container">Dashboard</div>
        <div className="reports-section">
          <div className="reports-section-title">KYC Application Reports</div>
          <div className="chart-container">
            <PieChart />
            <BarChart />
          </div>
          <ApplicationTable />
        </div>
      </div>
    </DataProvider>
  );
};

export default Dashboard;
