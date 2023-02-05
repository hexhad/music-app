import {createStore, combineReducers} from 'redux';
import reducer from './reducers/reducer';

const rootReducer = combineReducers({
  count: reducer,
});

export const store = createStore(rootReducer);