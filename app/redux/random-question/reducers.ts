import * as TYPES from './types';

interface ReducerAction {
  type: string;
  payload: any;
}

const initialState: object = {
  playerName: '',
  randomQuestion: null,
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
    default:
      return state;
  }
};
