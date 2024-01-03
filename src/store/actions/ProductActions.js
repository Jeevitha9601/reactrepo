const ADD_PRO=(data)=>{
    return {type:'ADD_PRO',payload:data}
}
const ADD_POST=(data)=>{
    return {type:'ADD_POST',payload:data}
}
const FETCH_USERS=(data)=>{
    return {type:'FETCH_USERS',payload:data}
}
export {ADD_PRO,ADD_POST,FETCH_USERS};