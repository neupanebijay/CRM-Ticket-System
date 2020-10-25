import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
// import { Dashboard } from "./pages/Dashboard/Dashboard.page";
// import { Entry } from "./pages/entry/Entry.pages";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
// import { Entry } from "./pages/entry/Entry.pages";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
