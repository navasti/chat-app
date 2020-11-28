import React from "react";

// Context
import { useConversations } from "../context/ConversationsProvider";

// Components
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";

const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();

  return (
    <div className="d-flex vh-100">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
};

export default Dashboard;
