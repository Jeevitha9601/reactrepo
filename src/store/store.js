import {createStore,combineReducers,applyMiddleware} from 'redux';
import CounterReducer from './reducers/CounterReducer';
import ProductReducer from './reducers/ProductReducer';
import thunk from 'redux-thunk';
import rootSaga from './middleware/saga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware=createSagaMiddleware();

const rootReducer=combineReducers({
    counter:CounterReducer,
    product:ProductReducer
})
const store=createStore(rootReducer,applyMiddleware(thunk,sagaMiddleware));
sagaMiddleware.run(rootSaga)
export default store;