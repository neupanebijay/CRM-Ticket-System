import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import "./App.css";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
// import { DefaultLayout } from "./layouts/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { Entry } from "./pages/entry/Entry.pages";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
// import { Entry } from "./pages/entry/Entry.pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/"> <Entry /> </Route>
          
         
            <PrivateRoute path="/dashboard">   <Dashboard /> </PrivateRoute>
            <PrivateRoute path="/add-ticket"> <AddTicket /> </PrivateRoute>
            {/* Ticket listing page */}
            <PrivateRoute path="/ticket-lists"> <TicketLists /> </PrivateRoute>

            {/* ticket landing page */}

            <PrivateRoute path="/tickets/:tId"> <Ticket/> </PrivateRoute>

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
