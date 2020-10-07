import React from "react";
import { Table } from "react-bootstrap";

export const TicketTable = ({ tickets }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            // when looping items we need to provide unique identifier for the holding container. In this case {row.id}
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Tickets Found
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
