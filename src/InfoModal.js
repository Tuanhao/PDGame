import React from 'react';

export default function InfoModal(props) {
  return (
    <div className="modal-overlay">
      <div className="modal-overlay__box">
        <div className="modal-overlay__message">{props.message}</div>
        <br />
        <button onClick={props.onClick}>OK</button>
      </div>
    </div>
  )
}