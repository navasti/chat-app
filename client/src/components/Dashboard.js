import React from "react";

// Components
import Sidebar from "./Sidebar";

const Dashboard = ({ id }) => {
  return (
    <div className="d-flex vh-100">
      <Sidebar id={id} />
    </div>
  );
};

export default Dashboard;
