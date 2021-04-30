// var initialState ={
//     status: false,
//     sort : {
//         by:'name',
//         value:1,
//     }
// };
var initialState ={
        by:'name',
        value:1,
};

var myReducer = (state = initialState, action)=>{
    if(action.type==='SORT'){
        // console.log(action)

        var {by, value}= action.sort; 
        // var {status} =state;
        // by= action.by
      return {by,value};
    }
    return state;
}

export default myReducer;