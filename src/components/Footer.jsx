import React from'react';
import { BackTop } from 'antd';
  export default class Header extends React.Component{
	render(){
		return(
			<div>
				<BackTop />
				<div className="footer">
			         版权归本人所有
		         </div>
			</div>
		)
	}
}


