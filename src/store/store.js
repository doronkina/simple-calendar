import {createStore, combineReducers} from 'redux';

import usersReducer from './reducers/usersReducer';
import calendarReducer from './reducers/calendarReducer';

let rootReducer = combineReducers({
    users: usersReducer,
    calendar: calendarReducer
});

let store = createStore(
    rootReducer
);

export default store;