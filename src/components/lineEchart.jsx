import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class LineEcharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        }
    }

    componentDidMount() {
     this.setState({
            listData:this.state.listData
        })
     console.log(this.state.listData); 
     console.log(this.props.listData); 
}

 

    render() {
       //const staticData = this.props.pieData
       console.log(this.props.listData);
        return (
            <div id="main" style={{ width:500, height: 400 ,margin:'auto'}}></div>
        );
    }
}

