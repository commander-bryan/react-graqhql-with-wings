import { createStore, combineReducers } from 'redux';
import reviewReducers from './reducers/review';

const reducers = combineReducers({
    reviewReducers,
});

const initialState = {
};

const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
