import React from'react';
import {Link} from 'react-router-dom'
import { Button,Select } from 'antd'
import { Pagination } from 'antd';
import reqwest from 'reqwest';

const fakeDataUrl = `http://www.goxz.gov.cn/profile/cultureShow_pageList.do?cultureType=0&name=&pageNum=1&pageSize=6&type=9`;

const Option = Select.Option;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}


 class newsList extends React.Component{
  state = {
    data: [],
  }

  componentDidMount() {
    this.getData((res) => {
      console.log(res.results,'404');
      this.setState({
        data: res.results,
      });
    });
  }

  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'jsonp',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }
	render(){
	       const list=[{
          "title": "近日暴雨不断，请大家加强防范1",
          "content": "1近日暴雨不断，请大家加强防范近日暴雨不断，请大家加强防范近日暴雨不断，请大家加强防范",
          "imageUrl": "/images/1.png",
          "see": "10",
          "applause": "2",
          "id":1
        }, {
          "title": "近日暴雨不断2，请大家加强防范",
          "content": "近日暴雨不断，2请大家加强防范近日暴雨不断，请大家加强防范近日暴雨不断，请大家加强防范",
          "imageUrl": "/images/1.png",
          "see": "10",
          "applause": "2",
          "id":2
        }, {
          "title": "近日暴雨不断，请大家加强防范3",
          "content": "近日暴雨不断，请大家加强防范近日暴雨不断，3请大家加强防范近日暴雨不断，请大家加强防范",
          "imageUrl": "/images/1.png",
          "see": "10",
          "applause": "2",
          "id":3
        }, {
          "title": "近日暴雨不断，请大家加强防范4",
          "content": "近日暴雨不断，请大家加强防范近日暴雨不断，4请大家加强防范近日暴雨不断，请大家加强防范",
          "imageUrl": "/images/1.png",
          "see": "10",
          "applause": "2",
          "id":4
        }];
      const listStyle= {
	      	listWrapper:{
	          background:'#fff',
	          marginTop:'10px',
	          padding:'10px'
	      	},
	      topTitle:{
	      	fontSize:'16px',
	        fontWeight:'bold',
	        lineHeight:'30px'
	      },
	      midContent:{
            fontSize:'14px',
	      },
	      bottomInfo:{
	      	display:'flex',
	      	justifyContent:'flex-end',
            fontSize:'12px',
            color:'#666'
	      },
	      span:{
	      	marginLeft:'10px'
	      }
	    };
		const listItem = list.map((item,index)=>
         <li key={index} style={listStyle.listWrapper}>
           <Link to={{pathname:`/Detail/${item.title}/${item.content}`}}>
           <div style={listStyle.topTitle}>{item.title}</div>
           <div style={listStyle.midContent}>{item.content}</div>
           <div style={listStyle.bottomInfo}><span>浏览量:{item.see}</span><span style={listStyle.span}>点赞数:{item.applause}</span></div>
           </Link>
         </li>
			)

		return(
      <div className="contentBox">
      <div style={{ display: 'flex',width: '100%',justifyContent:'space-between'}}>
          <Select
            mode="multiple"
            style={{ width: 'calc(80% - 20px)' }}
            placeholder="输入标准名/选择标准"
            defaultValue={['a10', 'c12']}
            onChange={handleChange}
          >
            {children}
          </Select>
            <Button type="primary" style={{ width: '20%' }}>搜索</Button>
            </div>
        <ul>{listItem}</ul>
        <Pagination defaultCurrent={1} total={50} />
      </div>
         
		)
	}
}

export default newsList;