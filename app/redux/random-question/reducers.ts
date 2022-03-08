import * as TYPES from './types';

interface ReducerAction {
  type: string;
  payload: any;
}

const initialState = {
  randomQuestion: null,
  currentIndex: 0,
};

const initTableScore = {
  leaderBoard: null,
  error: null,
};

const initRound = {
  playerName: '',
  score: 0,
};

export const questionReducer = (state = initialState, action: ReducerAction) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.NEXT_QUESTION_REQ:
      return {...state};
    case TYPES.NEXT_QUESTION_SUCCESS:
      return {...state, currentIndex: state.currentIndex + 1};
    case TYPES.RANDOM_QUESTION_REQ:
    case TYPES.RANDOM_QUESTION_SUCCESS:
      return {...state, randomQuestion: payload};
    case TYPES.RANDOM_QUESTION_CLEAR:
      return {...initialState};
    default:
      return state;
  }
};

export const roundReducer = (state = initRound, action: ReducerAction) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.NEW_ROUND_QEQ:
      return state;
    case TYPES.NEW_ROUND_SUCCESS:
      return {...state, playerName: payload};
    case TYPES.EXIT_CURRENT_ROUND_REQ:
    case TYPES.EXIT_CURRENT_ROUND_SUCCESS:
      return {...initRound};
    default:
      return state;
  }
};

export const tableScoreReducer = (state = initTableScore, action: ReducerAction) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.GET_TABLE_SCORE_REQ:
    case TYPES.GET_TABLE_SCORE_SUCCESS:
      return {...state, leaderBoard: payload};
    case TYPES.SAVE_SCORE_REQ:
      return {...state, error: null};
    case TYPES.SAVE_SCORE_SUCCESS:
    case TYPES.SAVE_SCORE_FAIL:
      return {...state, error: payload};
    case TYPES.CLEAR_SCORE_REQ:
    case TYPES.CLEAR_SCORE_SUCCESS:
    default:
      return state;
  }
};
