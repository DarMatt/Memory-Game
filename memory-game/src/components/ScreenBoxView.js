import React from "react";
import * as Board from "./Board";
import { Status } from "../App";

export function ScreenBoxView({ status, board, onClickAt }) {
  // eslint-disable-next-line default-case
  switch (status) {
    case Status.Running:
      return <Board.BoardView board={board} onClickAt={onClickAt} />;

    case Status.Stopped:
      return <Board.ScreenView className="gray">
        <div style={{ textAlign: "center" }}>
          <h1>Memory Game</h1>
          <p>Click anywhere to start!</p>
        </div>
      </Board.ScreenView>;

    case Status.Won:
      return <Board.ScreenView className="green">
        <div style={{ textAlign: "center", color: "green"}}>
          <h1 className="victory-title">Victory!</h1>
          <p className="victory-text">Click anywhere to try again!</p>
        </div>
      </Board.ScreenView>;

    case Status.Lost:
      return <Board.ScreenView className="red">
        <div style={{ textAlign: "center" }}>
          <h1>Defeat!</h1>
          <p className="text">Click anywhere to try again!</p>
        </div>
      </Board.ScreenView>;
  }
}
