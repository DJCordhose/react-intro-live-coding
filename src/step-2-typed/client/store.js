import { createStore, combineReducers } from 'redux';
import greetingReducer from './greetingReducer';

const store = createStore(combineReducers({
  greeting: greetingReducer
}));

export default store;