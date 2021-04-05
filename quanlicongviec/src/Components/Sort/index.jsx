import React, { Component } from 'react';



class Sort extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={
    //         sort:{
    //             by:'name',
    //             value:1,
    //         }
    //     }
    // }

    onClick =(sortBy, sortValue)=>{
        // console.log(sortBy,sortValue)
        // this.setState({
        //     sort:{
        //         by: sortBy,
        //         value: sortValue,
        //     }
        // });
        this.props.onSort(sortBy,sortValue);
    }

  render() {

    // var {sort} = this.state;
    return (
     
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={()=>this.onClick('name',1)} role='button' className='text-right margin_bottom' >
                                <span>
                                    <i className="fas fa-sort-alpha-down padding-right "></i>
                                    Tên A-Z
                                </span>
                                {(this.props.sortBy === 'name' && this.props.sortValue===1)?<i className="fas fa-check padding-right"></i>:""}
                            
                        </li>
                        <li onClick={()=>this.onClick('name',-1)} role='button' className='text-right margin_bottom' >
                            <span>
                                <i className="fas fa-sort-alpha-up padding-right "></i>
                                Tên Z-A
                            </span>
                            {(this.props.sortBy === 'name' && this.props.sortValue===-1)?<i className="fas fa-check padding-right"></i>:""}
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={()=>this.onClick('status',1)} role='button' className='text-right margin_bottom'>
                            Trạng Thái Kích Hoạt
                            {(this.props.sortBy === 'status' && this.props.sortValue===1)?<i className="fas fa-check padding-right"></i>:""}
                        </li>
                        <li onClick={()=>this.onClick('status',-1)} role='button' className='text-right margin_bottom'>
                            Trạng Thái Ẩn
                            {(this.props.sortBy === 'status' && this.props.sortValue===-1)?<i className="fas fa-check padding-right"></i>:""}
                        </li>
                    </ul>
                </div>
            </div>
 
    );
  }
}

Sort.propTypes = {

};

export default Sort;