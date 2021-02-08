import * as R from "rambda";
import * as Cell from "./Cell";



export let hasWinningCond = (state) => (
  R.filter(Cell.isDone, state.board).length === state.board.length
);

export let hasLosingCond = (state) => !state.secondsLeft;

export let setStatus = R.curry((status, state) => ({ ...state, status }));

export let nextSecond = (state) => ({
  ...state, secondsLeft: Math.max(state.secondsLeft - 1, 0),
});
