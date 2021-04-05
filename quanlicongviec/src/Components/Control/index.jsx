import React, { Component } from 'react';
import Search from '../Search';
import Sort from '../Sort';



class Control extends Component {


  render() {
    return (
        <div className="row margin_top">
            <Search onSearch={this.props.onSearch}/>
            <Sort onSort={this.props.onSort}
            sortBy={this.props.sortBy}
            sortValue={this.props.sortValue}
            />
        </div>
 
    );
  }
}

Control.propTypes = {

};

export default Control;