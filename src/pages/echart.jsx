import React, { Component } from 'react';
import LineEcharts from '../components/lineEchart';
import PieEcharts from '../components/pieEchart';
import StaticTable from '../components/table';
import { Tabs, Icon } from 'antd';
import axios from 'axios';

const TabPane = Tabs.TabPane;

export default class EchartsTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
        pieData:[],
        lineData: [],
      }
  }
    componentDidMount() {
        this.getData1();
        
        this.getData2((res)=>{
         this.setState({
            lineData:res.data
         })
        });
    }
     getData1 = () => {
        axios.get(`/getCircle.do?userId=zhengfu&type=district`)
          .then(res => {
                 this.setState({
                pieData:res.data
             })
          })
      }

     getData2 = (callback) => {
        axios.get(`/getCircle.do?userId=zhengfu&type=industry`)
        .then(res => {
            callback(res)
        })
      }

    render() {
        const { pieData, lineData } = this.state
        return (
            <div id="echart" className="contentBox" style={{background:'#fff'}}>
            <Tabs defaultActiveKey="2">
                <TabPane tab={<span><Icon type="pie-chart" theme="outlined" />企业区域统计</span>} key="1">
                    <div>
                      <PieEcharts pieData={pieData}/>
                      <StaticTable tableData={pieData} />
                    </div>
                </TabPane>
                <TabPane tab={<span><Icon type="area-chart" theme="outlined" />企业行业统计</span>} key="2">
                    <div>
                      <LineEcharts listData={lineData} />
                      <StaticTable tableData={lineData} />
                    </div>
                </TabPane>
              </Tabs>
            </div>
        );
    }
}

