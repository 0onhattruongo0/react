// var initialState ={
//     status: false,
//     sort : {
//         by:'name',
//         value:1,
//     }
// };
var initialState =false;

var myReducer = (state = initialState, action)=>{
    if(action.type === 'TOGGLE_STATUS'){
        state= !state;
    }
    
    return state;
}

export default myReducer;