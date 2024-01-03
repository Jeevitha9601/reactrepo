import { ADD_POST } from "../actions/ProductActions";

const fetchPost=()=>{
    return(dispatch)=>{
        const URL="https://jsonplaceholder.typicode.com/posts";
        fetch(URL)
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            dispatch(ADD_POST(data))
        }) 
        .catch(err=> console.log(err))
    }
}
export default fetchPost;