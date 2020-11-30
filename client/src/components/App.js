import React from "react";

// Hooks
import useLocalStorage from "../hooks/useLocalStorage";

// Components
import Login from "./Login";
import Dashboard from "./Dashboard";

// Context
import { ContactsProvider } from "../context/ContactsProvider";
import { ConversationsProvider } from "../context/ConversationsProvider";
import { SocketProvider } from "../context/SocketProvider";

const App = () => {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
};

export default App;
