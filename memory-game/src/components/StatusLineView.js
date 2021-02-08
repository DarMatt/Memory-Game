import React from "react";
import { Status } from "../App";



export function StatusLineView({ status, secondsLeft }) {
  return <div className="status-line">
    <div className="timer">
      {status === Status.Running && `Seconds left: ${secondsLeft}`}
    </div>
  </div>;
}
