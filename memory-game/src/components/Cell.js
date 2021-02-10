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
      : <img
        src={symbol}
        alt="Rick n Morty"
        className="img"
      ></img>
      }
  </div>
}

export function classByStatus(status) {
  return status.toLowerCase()
}
