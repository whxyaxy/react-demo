import React from'react';
import {Link} from 'react-router-dom'
import {Collapse,List} from 'antd'
import axios from 'axios';

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#fff',
  borderRadius: 4,
  marginBottom: 10,
  border: 0,
  overflow: 'hidden',
};

export default class ColList extends React.Component{
  
  render(){
    const listAll = this.props.listAll;
    console.log(listAll);
    return(
        <Collapse bordered={false}  defaultActiveKey={['0']} style={{background: '#f2f2f2',marginTop:'30px'}}>
         
         {
           listAll.map((item,index)=> (
              <Panel header={item.detailName} key={index} style={customPanelStyle}>
                { 
                  item.companyList.map((item,index) => (
                    <div className="listItem" key={index}>
                      <div className="itemTitle">公司名称：{item.companyName}</div>
                      <div>地区：{item.address}</div>
                      <div>区域：{item.industry}</div>
                    </div>
                  ))
                }
              </Panel>
            ))
         }
        </Collapse>
    )
  }
}

