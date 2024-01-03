const INCREMENT=(data)=>{
    return {type:'INC',payload:data}
}
const DECREMENT=(data)=>{
    return {type:'DEC',payload:data}
}
export {INCREMENT,DECREMENT}