import * as TYPES from './types';
import * as I from '../../Interface/index';
import * as utils from './utils';
import * as storage from '../../utils/storage';

export const getTablePoint = (payload: I.RowPoint[]) => (dispatch: any) => {
  dispatch({type: TYPES.GET_TABLE_SCORE_REQ});
  dispatch({type: TYPES.GET_TABLE_SCORE_SUCCESS, payload});
};

export const playNewRound = (payload: string) => (dispatch: any) => {
  dispatch({type: TYPES.NEW_ROUND_QEQ});
  dispatch({type: TYPES.NEW_ROUND_SUCCESS, payload});
};

export const endCurrentRound = () => (dispatch: any) => {
  dispatch({type: TYPES.EXIT_CURRENT_ROUND_REQ});
  dispatch({type: TYPES.EXIT_CURRENT_ROUND_SUCCESS});
  dispatch({type: TYPES.RANDOM_QUESTION_CLEAR});
};

export const randomQuestion = () => (dispatch: any) => {
  dispatch({type: TYPES.RANDOM_QUESTION_REQ});
  const questions = utils.createRandomQuestion();
  dispatch({type: TYPES.RANDOM_QUESTION_SUCCESS, payload: questions});
};

export const snapToNextQuestion = () => (dispatch: any) => {
  dispatch({type: TYPES.NEXT_QUESTION_REQ});
  dispatch({type: TYPES.NEXT_QUESTION_SUCCESS});
};

export const recordScore = (playerName: string, score: number) => async (dispatch: any) => {
  dispatch({type: TYPES.SAVE_SCORE_REQ});
  try {
    await storage.recordToTablePoint(playerName, score);
    dispatch({type: TYPES.SAVE_SCORE_SUCCESS});
    const tablePoint = await storage.getTablePoint();
    dispatch(getTablePoint(tablePoint));
  } catch (error) {
    dispatch({type: TYPES.SAVE_SCORE_FAIL, payload: error});
  }
};
