import React from "react";

// Hooks
import useLocalStorage from "../hooks/useLocalStorage";

// Components
import Login from "./Login";
import Dashboard from "./Dashboard";

// Context
import { ContactsProvider } from "../context/ContactsProvider";
import { ConversationsProvider } from "../context/ConversationsProvider";

const App = () => {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );
  return id ? dashboard : <Login onIdSubmit={setId} />;
};

export default App;
