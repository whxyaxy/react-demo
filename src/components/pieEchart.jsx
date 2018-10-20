import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class LineEcharts extends Component {
    constructor(props) {
        super(props);
        const listData = this.props.pieData;
        console.log(this.props,'405')
        this.state = {
        pieData:listData
      }
    }

    componentDidMount() {
        const staticData = this.state.pieData
        if(staticData.length != 0){
            let dataArray = [];
            for (let i = 0, len = staticData.numList.length;i<len;i++){
               let districtObject = {};
                districtObject.value = staticData.numList[i];
                districtObject.name = staticData.nameList[i];
                dataArray.push(districtObject);
            }

            var myChart = echarts.init(document.getElementById('pieEchart'));
            myChart.setOption({
                title : {
                text: '各区域企业数据总览',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
          
            series : [
                {
                    name: '企业数量',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:dataArray,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }
       
}

    render() {
        return (
            <div id="pieEchart" style={{ width: 400, height: 400,margin:'auto' }}></div>
        );
    }
}

