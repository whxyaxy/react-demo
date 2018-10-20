import React from'react';
 class newsList extends React.Component{
	render(){
		console.log(this.props.match.params)
		const detailStyle={
			detailWrapper:{
				background:'#fff',width:'90%',padding:'10px',margin:'10px auto'
			},
			detailTitle:{textAlign:'center',fontWeight:'bold',fontSize:'16px',lineHeight:'40px'},
			detailCntent:{fontSize:'14px',textIndent:'20px'}
		}
		return(
         <div style={detailStyle.detailWrapper}>
         	<div style={detailStyle.detailTitle}>{this.props.match.params.title}</div>
         	<div style={detailStyle.detailCntent}>{this.props.match.params.content}</div>
         </div>
		)
	}
}

export default newsList;