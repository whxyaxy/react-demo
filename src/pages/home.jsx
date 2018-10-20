import React from'react';
import {Link} from 'react-router-dom'
import '../index.css';
import '../css/home.css';
import g1 from '../images/1.png'
import g2 from '../images/2.jpg'
import g3 from '../images/3.png'
import g4 from '../images/4.jpg'

import {Carousel, List,Card, Icon, Avatar,Row, Col } from 'antd';
	const data = [
	  {
	    title: '按区域查企业',
	    info:'按区域统计企业数量',
	    icon:'form',
	    color:'#187ED2',
	    url:'/ZoneCompany'
	  },
	  {
	    title: '按行业查企业',
	    info:'按行业统计企业数量',
	     icon:'zoom-in',
	    color:'#33CCCC',
	    url:'/ZoneCompany'
	  },
	  {
	    title: '按企业查标准',
	    info:'企业绑定的所有标准',
	     icon:'sliders',
	    color:'#66CCFF',
	    url:'/List1'
	  },
	  {
	    title: '按标准查企业',
	    info:'标准绑定的所有企业',
	     icon:'team',
	    color:'#FFCC00',
	    url:'/List1'
	  },
	];
  const imgUrl = [g1,g2,g3,g4]
  const { Meta } = Card;
  export default class Home extends React.Component{
  	 constructor(props) {
        super(props);
        this.state = {
            translateX: 0,
            translateY: 0,
        };
        this.moving = false;
        this.lastX = null;
        this.lastY = null;
        window.onmouseup = e => this.onMouseUp(e);
        window.onmousemove = e => this.onMouseMove(e);
    }

    onMouseDown(e) {
        e.stopPropagation();
        this.moving = true;
    }

    onMouseUp() {
        this.moving = false;
        this.lastX = null;
        this.lastY = null;
    }

    onMouseMove(e) {
        this.moving && this.onMove(e);
    }

    onMove(e) {
        if(this.lastX && this.lastY) {
            let dx = e.clientX - this.lastX;
            let dy = e.clientY - this.lastY;
            this.setState({ translateX: this.state.translateX + dx, translateY: this.state.translateY + dy })
        }
        this.lastX = e.clientX;
        this.lastY = e.clientY;
    }

	render(){
		return(
		  <div id="home" className="contentBox">
			<div className="topScroll" style={{height:'350px'}}> 
			  <Carousel effect="fade" autoplay style={{height:'320px'}}>
		       {
		          imgUrl.map((item,index)=> (
		               <img src={item} key={index} style={{height:'320px'}}/>
		            ))
		         }
			  </Carousel>
			</div>
			<div className="middlePart" style={{margin:'10px 0',background:'#fff',padding:'10px 10px 20px 10px'}}>
				<List
				style={{display:'inline-flex',justifyContent:'space-around',width:'100%'}}
				    dataSource={data}
				    renderItem={item => (
				      <Link to={{pathname:`${item.url}`}}><List.Item>
				        <Card
				            hoverable
						    cover={<Icon type="right-circle" theme="outlined" style={{fontSize:'40px',display: 'flex',justifyContent:'flex-end',color:item.color}}/>}
						    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
						  >
						    <Meta
						      avatar={<Icon type={item.icon} style={{fontSize:'30px',background:item.color,padding:'5px',borderRadius:'50%',color:'#fff'}} />}
						      title={item.title}
						      description={item.info}
						    />
						  </Card>
				      </List.Item></Link>
				    )}
				  />
			</div>
			<div style={{display:'flex',justifyContent:'center',margin:'20px 0'}}><img src={require('../images/bottom.png')} style={{height:'60px'}} /></div>
			<div
                onMouseDown={e => this.onMouseDown(e)}
                style={{transform: `translateX(${this.state.translateX}px)translateY(${this.state.translateY}px)`}}
            >
                <div style={{ width:300, height:50,lineHeight:'50px',textAlign:'center', backgroundImage:'linear-gradient(45deg, #00E7FF 0%, #0D71F6 100%)',fontSize:'14px',color:'#fff'}}>标准实施助手</div>
            </div>
	      </div>
		)
	}
}


