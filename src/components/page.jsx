import React from'react';
import {Link} from 'react-router-dom'
import { Button,Select,Pagination,Collapse } from 'antd'
import axios from 'axios';

//const fakeDataUrl = `http://www.goxz.gov.cn/profile/cultureShow_pageList.do?cultureType=0&name=&pageNum=1&pageSize=6&type=9`;

const Option = Select.Option;
const Panel = Collapse.Panel;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: '#fff',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};
const standardList1 = []
// const children = [];
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

function handleChange(value) {
  console.log(`selected ${value}`);
}

class newsList extends React.Component{
  state = {
    data: [],
    standardList:[]
  }

  componentDidMount() {
     this.getData()
  }

  getData = () => {
    axios.get(`/getStandardList.do?userId=zhengfu&groupId=W01`)
      .then(res => {
        console.log(res);
           res.data.data.map((item,index)=>
              this.state.standardList.push(<Option key={item.standardId}>{item.standardName}</Option>)
          )
    })
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
            defaultValue={['全国旅游标准化试点企业工作标准（武汉）']}
            onChange={handleChange}
          >
            {this.state.standardList}
          </Select>
            <Button type="primary" style={{ width: '20%' }}>搜索</Button>
        </div>

        <Collapse bordered={false} defaultActiveKey={['1']} style={{background: '#f7f7f7',marginTop:'30px'}}>
          <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
        </Collapse>

        <Pagination defaultCurrent={1} total={50} />
      </div>
         
		)
	}
}

export default newsList;