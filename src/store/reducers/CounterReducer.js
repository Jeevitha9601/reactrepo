const initialState={count:0}
const CounterReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INC' :return{count:state.count+action.payload}
        case 'DEC' :return{count:state.count-action.payload}
        default: return state;
    }
}
export default CounterReducer;