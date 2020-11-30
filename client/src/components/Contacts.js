import React from "react";
import { ListGroup } from "react-bootstrap";

// Context
import { useContacts } from "../context/ContactsProvider";

const Contacts = () => {
  const { contacts } = useContacts();

  return (
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Contacts;
