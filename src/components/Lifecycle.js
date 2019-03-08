import React, { Component } from 'react';
import $ from 'jquery';
class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"Lifecycle"
        };
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        console.log("constructor");

    }

    componentDidMount(){
        console.log("componentDidMount");
        $("h3.pannel-title").css('color','white');
        
    }

    componentWillMount(){
        console.log("componentWillMount");
        this.setState(
            {
                title:"Lifecylce-componentWillMount"
            }
        )
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(nextProps, nextState){
   
        console.log("ShouldComponentUpdate");
        console.log(nextState);
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    handleChangeTitle(){
        this.setState(
            {
                title:"Lifecylce-handleChangeTitle"
            }
        )
    }
  render() {
      console.log("render");
    return (
        
<div className="panel panel-danger">
	<div className="panel-heading">
		<h3 className="panel-title">{this.state.title}</h3>
	</div>
	<div className="panel-body">
        <button onClick={this.handleChangeTitle} type="button" className="btn btn-success">change</button>
	</div>
</div>
    );
  }
}

export default Lifecycle;

