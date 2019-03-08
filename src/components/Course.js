import React, { Component } from 'react';
import Lession from './Lession';

class Course extends Component {
  
	ShowbuttonFree(){
		const isFree=this.props.free;
		console.log("isFree",isFree);
		if (isFree===true) {
			return <div className="panel-footer">
        <div className="btn-group">
          <button type="button" class="btn btn-success">View Free</button>
			    <button  type="button" class="btn btn-warning">View Free</button>
          <button type="button" class="btn btn-default">View Free</button>
        </div>  
			</div>;
		}
		else{
			return <div className="panel-footer">
			    <button type="button" class="btn btn-warning">Buying</button>
			</div>;
		}
	}
  render() {
    return (
      
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.name}</h3>
            </div>
            <div className="panel-body">
              <p>{this.props.time}</p>
              <p>{this.props.children}</p>
              <ul className="list-group">
                <Lession/>
                <Lession/>
                <Lession/>

              </ul>
            </div>
            {this.ShowbuttonFree()}
          </div>
        </div>
   
    );
  }
}

export default Course;
