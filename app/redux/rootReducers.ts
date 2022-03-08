import {combineReducers} from 'redux';
import {questionReducer, tableScoreReducer} from './random-question/reducers';

export const rootReducer = combineReducers({
  question: questionReducer,
  tableScore: tableScoreReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
