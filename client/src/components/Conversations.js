import React from "react";
import { ListGroup } from "react-bootstrap";

// Context
import { useConversations } from "../context/ConversationsProvider";

const Conversations = () => {
  const { conversations, selectedConversationIndex } = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectedConversationIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients.map(recipient => recipient.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Conversations;
