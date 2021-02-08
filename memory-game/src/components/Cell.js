import React from 'react';

export let Status = {
  Open: "Open",
  Closed: "Closed",
  Done: "Done",
  Failed: "Failed",
}

export let isOpen = (cell) => cell.status === Status.Open

export let isClosed = (cell) => cell.status === Status.Closed

export let isDone = (cell) => cell.status === Status.Done

export let isFailed = (cell) => cell.status === Status.Failed

export let isBlocking = (cell) => isOpen(cell) || isFailed(cell)

export function View({cell, onClick}) {
  let {status, symbol} = cell
  return <div className={`cell ${classByStatus(status)}`} onClick={onClick} >
    {status === Status.Closed ? ""
      :
      <div
        style={{
          background: `url(${symbol})`,
          backgroundSize: "cover",
          height: "250px",
          width: "250px",
          backgroundRepeat: "no-repeat",
          borderRadius: "5px",
          boxShadow: "2px 2px 3px white",
        }}>
      </div>}
  </div>
}

export function classByStatus(status) {
  return status.toLowerCase()
}
