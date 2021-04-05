import { useEffect, useState } from 'react';
import './App.css';
import queryString from 'query-string';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';
import ColorBox from './components/colorBox';

function App() {
  const [todoList,setTodoList] = useState(
    [
      {id:1,title:"I love you"},
      {id:2,title:"I hate you"},
      {id:3,title:"I like you"},
    ]
  );

  const [pagination, setPagination] = useState({
    _page:1,
    _limit:10,
    _totalRows:11,
  }); 

  const [filters, setFilters] = useState({
    _page:1,
    _limit:10,
  });

  const [postList, setPostList] =useState([]);

  useEffect( ()=>{
     async function fetchPostList(){
       try {
         const paramsString = queryString.stringify(filters);
        const requestUrl =`http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response =await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);

        const {data , pagination}= responseJSON;
        setPostList(data);
        setPagination(pagination);
    
        } catch (error) {
          console.log('Fail',error.message);
        
      }
       
     }
     fetchPostList();
  },[filters])

  function handlePageChange(newPage){
   console.log('newPage:',newPage);
   setFilters({
     ...filters,
     _page:newPage,
    //  title_like:'',
   });
  }

  function handleTodoClick(todo){
    console.log(todo);
    const index = todoList.findIndex(x=>x.id === todo.id);
    if(index<0){
      return;
    }
    const newTodoList = [...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }

  function handleTodoOnSubmit(formValues){
       console.log('Form Submit:',formValues);
       const newTodo ={
          id: todoList.length +1,
          ...formValues,
       }
       const newTodoList = [...todoList];
       newTodoList.push(newTodo);
       setTodoList(newTodoList);
  }

  function handleFiltersChange(newfilters){
    console.log(newfilters)
    setFilters({
      ...filters,
      _page:1,
      title_like: newfilters.searchTerm,
    })
  }

  // **Clock
  // const[showClock, setShowClock]= useState(true);

  return (
    <div className="App">
      
      {/* ColorBox */}
      {/* <ColorBox /> */}

      {/* TodoList */}
      {/* <TodoForm onSubmit={handleTodoOnSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

      {/* Show & Search & Pagination */}
      <PostFiltersForm onSubmit={handleFiltersChange}/> 
      <PostList posts={postList}/>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />

      {/* Clock */}
      {/* {showClock && <Clock />}
      {showClock&&<button onClick={()=>setShowClock(false)}>Hide clock</button>}
      {!showClock &&<button onClick={()=>setShowClock(true)}>Show clock</button>} */}
    </div>
  );
}

export default App;
