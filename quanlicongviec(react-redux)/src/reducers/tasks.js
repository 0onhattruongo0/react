import* as types from "../constants/actionTypes";

var data=JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data :[];

const myReducer =(state = initialState,action)=>{
    switch(action.type){
         case types.LIST_ALL:
             return state;
         default: return state;
    }
}

export default myReducer;