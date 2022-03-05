import {combineReducers} from 'redux';
import {questionReducer} from './random-question/reducers';

const rootReducer = combineReducers({
  question: questionReducer,
});

export default rootReducer;
