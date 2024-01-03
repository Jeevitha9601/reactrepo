const initialValue={proData:["pro1","pro2","pro3","pro4"],postData:[],userData:[]}
const ProductReducer=(state=initialValue,action)=>{
    switch(action.type){
        case 'ADD_PRO' : return {...state,proData:[...state.proData,action.payload]}
        case 'ADD_POST' :return {...state,postData:action.payload}
        case 'FETCH_USERS' :return {...state,userData:action.payload}

          default: return state;
    }
}
export default ProductReducer;