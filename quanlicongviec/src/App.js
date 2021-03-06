import React, { Component } from 'react';
import Control from './Components/Control';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import "./App.css";
// import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      tasks:[],
      isDisplayForm: false,
      taskEditing: null,
      filter:{
        name:'',
        status: -1,
      },
      keyword:'',
      sortBy:'name',
      sortValue: 1,
    }

  }

  componentDidMount(){
    // console.log("fdsfsd");
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks,
      });
    }

  }


  

//  onGenerateData=() =>{
//    var tasks=[
//      {
//        id: this.generateID(),
//        name: 'Đi học',
//        status: true
//      },
//      {
//        id: this.generateID(),
//        name: 'Đi chơi',
//        status: false
//      },
//      {
//        id: this.generateID(),
//        name: 'Đi ngủ',
//        status: true
//      }
//    ]
//   //  console.log(tasks);
//   this.setState({
//       tasks:tasks
//   });
//   localStorage.setItem('tasks',JSON.stringify(tasks));
//  }

 s4(){
   return Math.floor((1+Math.random())* 0x10000).toString(16).substring(1);
 }
 generateID(){
    return this.s4()+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+this.s4()+this.s4();
 }

onToggleForm = () => {
    this.setState({
    // isDisplayForm : !this.state.isDisplayForm,
    isDisplayForm : true,
    taskEditing:null
    })
}

onCloseForm=()=>{
    this.setState({
    isDisplayForm : false,
    })
}

onShowForm=()=>{
    this.setState({
    isDisplayForm : true,
    })
}

  onSubmit = (data)=>{
  // console.log(data)
        var {tasks} = this.state;
        if(data.id===""){
          data.id = this.generateID();
          tasks.push(data);
        }else{
          var index =this.findIndex(data.id);
          tasks[index]= data
        }
        this.setState({
          tasks : tasks,
          taskEditing:null
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
  }

onUpdateStatus=(id)=>{
// console.log(id)
  var {tasks}= this.state;
  var index= this.findIndex(id);
  // console.log(index);
  if(index!== -1){
     tasks[index].status=!tasks[index].status;
     this.setState({
       tasks : tasks,
     });
     localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

onDelete=(id)=>{
  var {tasks}= this.state;
  var index= this.findIndex(id);
  // console.log(index);
  if(index!== -1){
     tasks.splice(index,1);
     this.setState({
       tasks : tasks,
     });
     localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  this.onCloseForm();
}

onUpdate=(id)=>{
    var {tasks}= this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    // console.log(taskEditing);
    this.setState({
      taskEditing: taskEditing,
    })
    this.onShowForm();
  }

  onFilter=(filterName,filterStatus)=>{
      // console.log(filterName,'-',filterStatus);
      filterStatus =parseInt(filterStatus);
      this.setState({
        filter:{
          name:filterName.toLowerCase(),
          status:filterStatus
        }
      })
  }

  onSearch=(keyword)=>{
      // console.log(keyword)
      this.setState({
        keyword: keyword
      })
  }
  onSort=(sortBy,sortValue)=>{
    // console.log(sortBy,sortValue)
    this.setState({
            sortBy:sortBy,
            sortValue:sortValue
        });
  }

findIndex = (id)=>{
  var {tasks}= this.state;
  var result=-1;
  tasks.forEach((tasks,index)=>{
    if(tasks.id===id){
       result=index;
    }
  })
  return result;
}

  render() {
    var {tasks, isDisplayForm, taskEditing, filter,keyword ,sortBy,sortValue} = this.state; 
    // var tasks =this.state.tasks; 
    if(filter){
      if(filter.name){
        tasks =tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filter.name)!==-1;
        });
      }
      tasks= tasks.filter((task)=>{
         if(filter.status===-1){
          return task;
        }else{
          return task.status === (filter.status===1? true:false)
        }
      })
    }
    if(keyword){
      tasks=tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(keyword)!==-1;
        });
    }

    if(sortBy==="name"){
      tasks.sort((a,b)=>{
        if(a.name>b.name){
          return sortValue;
        }else if(a.name<b.name){
          return sortValue;
        }else{
          return 0;
        }
      })
    }else{
      tasks.sort((a,b)=>{
        if(a.status>b.status){
          return -sortValue;
        }else if(a.status<b.status){
          return sortValue;
        }else{
          return 0;
        }
      })
    }

    var elmTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} task={taskEditing}/> : "";
    return (

      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4": "" }>
                {/* <TaskForm /> */}
                {elmTaskForm}
            </div>
            <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8": "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
                <button type="button" className="btn btn-primary outline" onClick={this.onToggleForm}>
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                {/* <button type="button" className="btn btn-danger margin-left outline" onClick={this.onGenerateData}>
                    Tạo dữ liệu mẫu
                </button> */}
                <Control onSearch={this.onSearch} onSort={this.onSort} sortBy={sortBy} sortValue={sortValue}/>
                <div className="row margin_top">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList tasks={tasks} onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete} onUpdate={this.onUpdate} onFilter={this.onFilter}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

App.propTypes = {

};

export default App;
