import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
       txtUsename: "",
       txtPassword:"",
       txtDes:"",
       sltGender: 0,
       rdLang: "vi",
       chkStatus: false,
    };
    this.onHandleChange= this.onHandleChange.bind(this);
    this.onHandleSubmit= this.onHandleSubmit.bind(this);
  }

  onHandleChange(event){
// console.log(e.target.value);
    // this.setState({
    //   usename: event.target.value,
    // })
    var target=event.target;
    var name =target.name;
    // var value= target.value;
    var value= target.type==="checkbox"?target.checked: target.value;
    this.setState({
       [name] : value
    });
  }

  onHandleSubmit(event){
      event.preventDefault();
      console.log(this.state);

  }

  render(){
    return(
      <div className='container'>
        <div className='row'>
           <div className='col-sm-8'>
             <h3>Form:</h3>
               <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label >UseName:</label>
                    <input type="text" className="form-control" name='txtUsename' onChange={this.onHandleChange} value={this.state.txtUsename} />
                  </div>
                  <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" name='txtPassword' onChange={this.onHandleChange} value={this.state.txtPassword} />
                  </div>
                  <div className="form-group">
                    <label >Description:</label>
                    <textarea className="form-control" name='txtDes' rows="3" onChange={this.onHandleChange} value={this.state.txtDes}></textarea>
                  </div>
                  <div className="form-group">
                    <label >Gender:</label>
                    <select  className="form-control" name='sltGender' value={this.state.sltGender} onChange={this.onHandleChange}>
                      <option value={0}>Nữ</option>
                      <option value={1}>Nam</option>
                    </select>
                  </div>
                  <label>Ngôn Ngữ:</label>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="rdLang" value="vi" onChange={this.onHandleChange} checked={this.state.rdLang === "vi"}/>
                    <label className="form-check-label">
                      Tiếng Việt
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="rdLang" value="en" onChange={this.onHandleChange} checked={this.state.rdLang === "en"}/>
                    <label className="form-check-label">
                      Tiếng Anh
                    </label>
                  </div>
                  <br/>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="chkStatus" value={true} onChange={this.onHandleChange} checked={this.state.chkStatus === true} />
                    <label className="form-check-label" >Active:</label>
                  </div>
                  <br/>
                  <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                  <button type="reset" className="btn btn-default">Reset</button>
                </form>
           </div>
        </div>
      </div>
    )
  }
}

export default App;



