import React from 'react';
import PropTypes from 'prop-types';
import  './message-history.style.css'

export const MessageHistory = ({msg}) => {
  if(!msg) return null;
 console.log(msg);
   // i is index 
  return msg.map((row, i) => (
  <div key={i} className="message-history ml-5 mt-5">
    <div className="send font-weight-bold text-secondary">
      <div className="sender">{row.messageBy}</div>
      <div className="date">{row.date}</div>
    </div>
    <div className="message">{row.message}</div>
  </div>));
    
  
};

MessageHistory.propTypes ={
  msg : PropTypes.array.isRequired,
}
