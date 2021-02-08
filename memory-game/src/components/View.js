import React, { useEffect, useState } from "react";
import * as Board from "./Board";
import { startGame, Status, openCell, succeedStep, failStep1, failStep2 } from "../App";
import { ScreenBoxView } from "./ScreenBoxView";
import { StatusLineView } from "./StatusLineView";
import { hasWinningCond, setStatus, hasLosingCond, nextSecond } from "./hasWinningCond";


export function View() {
  let [state, setState] = useState({
    ...startGame(),
    status: Status.Stopped,
  });

  let { board, status, secondsLeft } = state;

  function handleStartingClick() {
    if (status !== Status.Running) {
      setState(startGame);
    }
  }

  function handleRunningClick(e) {
    if (status === Status.Running) {
      setState(openCell(e));
    }
  }

  useEffect(_ => {
    if (status === Status.Running) {
      if (hasWinningCond(state)) {
        return setState(setStatus(Status.Won));
      }
      else if (hasLosingCond(state)) {
        return setState(setStatus(Status.Lost));
      }
    }
  }, [state]);

  useEffect(_ => {
    if (Board.areOpensEqual(board)) {
      setState(succeedStep);
    } else if (Board.areOpensDifferent(board)) {
      setState(failStep1);
      setTimeout(_ => {
        setState(failStep2);
      }, 500);
    }
  }, [board]);

  useEffect(_ => {
    let timer = null;
    if (status === Status.Running && !timer) {
      timer = setInterval(() => {
        setState(nextSecond);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [status]);

  return <div onClick={handleStartingClick}>
    <StatusLineView status={status} secondsLeft={secondsLeft} />
    <ScreenBoxView status={status} board={board} onClickAt={handleRunningClick} />
  </div>;
}
