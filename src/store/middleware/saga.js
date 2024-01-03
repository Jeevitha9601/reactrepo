import {takeLatest,put} from 'redux-saga/effects';
import { FETCH_USERS } from '../actions/ProductActions';
function *fetchUsers(){
try{
    const URL="https://jsonplaceholder.typicode.com/users";
    const userdata=yield fetch(URL)
    .then(res=> res.json());
    yield put(FETCH_USERS(userdata));
}
catch(err){
    console.log(err)
}
}
function *rootSaga(){
    yield takeLatest('ADD_USERS',fetchUsers)
}
export default rootSaga;