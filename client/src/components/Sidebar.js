import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";

// Components
import NewConverastionModal from "./NewConverastionModal";
import NewContactModal from "./NewContactModal";
import Conversations from "./Conversations";
import Contacts from "./Contacts";

const CONVERSTIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSTIONS_KEY);
  const conversationsOpen = activeKey === CONVERSTIONS_KEY;
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSTIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSTIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConverastionModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Sidebar;
