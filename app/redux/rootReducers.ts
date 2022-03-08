import {combineReducers} from 'redux';
import {questionReducer, tableScoreReducer, roundReducer} from './random-question/reducers';

export const rootReducer = combineReducers({
  question: questionReducer,
  tableScore: tableScoreReducer,
  round: roundReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
