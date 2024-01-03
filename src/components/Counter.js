 import React from "react";
 import { useSelector, useDispatch } from "react-redux";
import { DECREMENT, INCREMENT } from "../store/actions/CounterActions";
 function Counter(){
    const {count}=useSelector(state=> state.counter);
    const {userData}=useSelector(state=> state.product);

    const dispatch=useDispatch();
return(
    <div>
    <h2>Redux Counter example</h2>
    <p>The store count value is {count}</p>
    <button onClick={()=> dispatch(INCREMENT(2))}>Increment</button>
    <button onClick={()=> dispatch(DECREMENT(1))}>Decrement</button>
  <ul>
    {userData.map(user=>
        <li key={user.id}> {user.email}</li>
    )}
  </ul>
  <button onClick={()=> dispatch({type:'ADD_USERS'})}>fetch users</button>
    </div>
)
}
export default Counter;