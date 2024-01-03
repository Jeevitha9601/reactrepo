import { useSelector, useDispatch } from "react-redux"
import React from "react";
import { ADD_PRO } from "../store/actions/ProductActions";
 export default function Home(){
    const {proData,postData}=useSelector(state=> state.product)
    const dispatch=useDispatch();
return(
    <div>
    <h2>Products</h2>
    <ul>
        {proData.map((pro,ind)=>
            <li key={ind}>{pro}</li>
        )}
    </ul>
    <button onClick={()=> dispatch(ADD_PRO('pro'))}>Add</button>
    {postData.map(post=>
     <div key={post.id}>
    <h5>{post.title}</h5>
    <p>{post.body}</p>
    <hr/>
    </div>
    )}
    </div>
    )}
