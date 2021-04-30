import React, { Component } from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

class TaskForm extends Component {

    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            status: false,
        }
    }

    onCloseForm=()=>{
        this.props.onCloseForm();
    }

    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value =target.value;
        if(name==="status"){
            value = target.value ==="true" ? true :false;
        }
        this.setState({
            [name] : value,
        })
    }

    onSubmit = (event)=>{
        event.preventDefault();
        // console.log(this.state)
        this.props.onSubmit(this.state);
        this.onClear();
        this.onCloseForm();
    }
    onClear=()=>{
        this.setState({
            name:"",
            status: false,
        })
    }

    componentDidMount(){
        if(this.props.task){
            this.setState({
                id:this.props.task.id,
                name:this.props.task.name,
                status:this.props.task.status,
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.task){
            this.setState({
                id:nextProps.task.id,
                name:nextProps.task.name,
                status:nextProps.task.status,
            });
        }else if(!nextProps.task){
            this.setState({
                id:'',
                name:'',
                status:false
            })
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     if(nextProps && nextProps.task){
    //         return { 
    //             id:nextProps.task.id,
    //             name:nextProps.task.name,
    //             status:nextProps.task.status,
    //         };
    //     }
    //     return null;
    //     }

    //     componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.task && prevProps.task!==this.props.task){
    //     this.setState({
    //         id:prevProps.task.id,
    //         name:prevProps.task.name,
    //         status:prevProps.task.status,
    //     });
        
    //     }
    //  }


  render() {
  
    var {id} = this.state;

    return (
      
                <div className="panel panel-warning">
                    <div className="panel-heading text-right">
                        <h3 className="panel-title">{(id!=="")?"Cập Nhật Công Việc": "Thêm Công Việc"}</h3>
                        <span className="fa fa-times-circle" onClick={this.onCloseForm}></span>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onChange}>
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning outline">
                                    Lưu lại</button>&nbsp;
                                <button type="button" onClick={this.onClear} className="btn btn-danger outline">Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            
    );
  }
}

TaskForm.propTypes = {

};

export default TaskForm;
