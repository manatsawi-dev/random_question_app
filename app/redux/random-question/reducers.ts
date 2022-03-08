import * as TYPES from './types';

interface ReducerAction {
  type: string;
  payload: any;
}

const initialState = {
  playerName: '',
  randomQuestion: null,
};

const initTableScore = {
  leaderBoard: null,
};

export const questionReducer = (state = initialState, action: ReducerAction) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.SAVE_SCORE_REQ:
      return {...state};
    case TYPES.SAVE_SCORE_SUCCESS:
      return {...state, payload};
    case TYPES.SAVE_SCORE_FAIL:
      return {...state};
    case TYPES.GET_TABLE_SCORE_REQ:
      return state;
    case TYPES.GET_TABLE_SCORE_SUCCESS:
      return {...state, tableScore: payload};
    default:
      return state;
  }
};

export const tableScoreReducer = (state = initTableScore, action: ReducerAction) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.GET_TABLE_SCORE_REQ:
      return state;
    case TYPES.GET_TABLE_SCORE_SUCCESS:
      return {...state, leaderBoard: payload};
    default:
      return state;
  }
};
