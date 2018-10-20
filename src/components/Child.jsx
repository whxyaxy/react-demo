import React from "react"
// import ReactDOM from "react-dom"

export default class childPage extends React.Component{
	constructor(props){
      super(props);
      this.state = {clickCount:0};
      this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(function(state){
            return {clickCount:state.clickCount + 1}
		});
	}


	render (){
		return(
           <div>
           	<p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
           	<h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>
           </div>
		)
	}
}