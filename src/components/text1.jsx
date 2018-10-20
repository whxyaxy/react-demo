import React from'react';
import {Link} from 'react-router-dom'
import BodyChild from './Child'
var headerCss = require("../css/main.css")
const defaultProps = {
  name:'这是一个默认的用户名'
}

{/* export default class Header extends React.Component{
			render(){
				return(
		         <ul>
		           <li>首页</li>
		           <li>列表页</li>
		           <li>详情页</li>
		         </ul>
				)
			}
		}*/}

 class Header extends React.Component{
 	constructor(){
 		super(); //调用基类的所有的初始化方法
 		this.state = {
 		username:"关于我们",
 		host:'ayy'
 		}//初始化赋值
 	};

	
 	changeUserInfo(age){
        this.setState({host:age});
 	};

	handleChildValueChange(event){
        this.setState({host:event.target.value})
	};

	render(){
		const styleHeader = {
	       header:{
	       	background:"#f8f8f8",
	       
	       }
	    };

		setTimeout(()=>{
			this.setState({username:"详情页"})
		},4000);

		const list = ["首页","列表页","详情页","记录页面"];
		const listItem = list.map((list,index)=>
               <li key={index}>{list}</li>
			)

		return(
		 <div style={styleHeader.header}>
	         <ul className="headerUl">
		         <li><Link to={'/'}>首页</Link></li>
		         <li><Link to={'/List'}>列表页面</Link></li>
		         <li><Link to={'/Detail'}>详情页面</Link></li>
	         </ul>
	         <p>{this.state.username}=>{this.props.name}</p>
		     <p>{this.state.host}</p>
	         <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
	         <p><input type="button" value="提交" onClick={this.changeUserInfo.bind(this,99)} /></p>
         </div>
		)
	}
}

//对父组件传过来的值进行校验
// Header.PropTypes = {
// 	name: React.PropTypes.number.isRequired
// };
Header.defaultProps = defaultProps;

 export default Header

