import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

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
              <td>
                <Link to={`/tickets/${row.id}`}>{row.subject}</Link>
                {/* <Link to={`/tickets/:tId`}>{row.subject}</Link> */}
              </td>
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

TicketTable.propTypes = {
  tickets : PropTypes.array.isRequired,
}
