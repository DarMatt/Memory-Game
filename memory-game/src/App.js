import * as R from "rambda"
import React from "react"
import * as Cell from "./components/Cell"
import * as Board from "./components/Board"
import { View } from "./components/View";
import { initialBoard } from "./components/initialBoard";

import './styles/reset.css';
import './styles/index.css';

function App() {
  return (
    <>
  <View />
   </>
  )
}

export let Status = {
  Stopped: "Stopped",
  Running: "Running",
  Won: "Won",
  Lost: "Lost",
}

export let startGame = (state) => ({
  board: initialBoard,
  secondsLeft: 60,
  status: Status.Running,
})

export let openCell = R.curry((i, state) => ({
  ...state,
  board: Board.setStatusAt(i, Cell.Status.Open, state.board),
}))

export let succeedStep = (state) => ({
  ...state,
  board: Board.setStatusesBy(Cell.isOpen, Cell.Status.Done, state.board)
})

export let failStep1 = (state) => ({
  ...state,
  board: Board.setStatusesBy(Cell.isOpen, Cell.Status.Failed, state.board),
})

export let failStep2 = (state) => ({
  ...state,
  board: Board.setStatusesBy(Cell.isFailed, Cell.Status.Closed, state.board),
})

export default App;
