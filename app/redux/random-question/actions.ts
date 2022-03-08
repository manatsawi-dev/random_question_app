import * as TYPES from './types';
import * as I from '../../Interface/index';

export const getTablePoint = (payload: I.RowPoint[]) => (dispatch: any) => {
  dispatch({type: TYPES.GET_TABLE_SCORE_REQ});
  dispatch({type: TYPES.GET_TABLE_SCORE_SUCCESS, payload});
};
