import {createStore} from 'redux';
import {status, sort} from './action/index';
import myReducer from './reducers/index';



const store = createStore(myReducer);
console.log('Default:',store.getState())
// Thay doi status
// var action = {type:'TOGGLE_STATUS'};
// store.dispatch(action);

store.dispatch(status());

console.log('toggle',store.getState())

// Thay doi sort tu Z-A
// var sortAction = {
//     type:'SORT',
//     sort:{
//         by:'name',
//         value: -1,
//     }
// };
// store.dispatch(sortAction);
store.dispatch(sort({
    by:'name',
    value: -1
}));
console.log('sort',store.getState())