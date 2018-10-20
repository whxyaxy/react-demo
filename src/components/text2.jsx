import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import axios from 'axios';
export default class LineEcharts extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     pieDate:[]
    //   }
    // }

    state = {
        pieData:[]
    }

     getData1 = () => {
        axios.get(`/getCircle.do?userId=zhengfu&type=district`)
          .then(res => {
            this.setState({
                pieData:res.data
             })
             var tableList = this.state.pieData
             this.initEchart(tableList)
          })
      }

    componentWillMount(){
      this.getData1()
    }

    initEchart(tableList){
            let dataArray = [];
            for (let i = 0, len = tableList.numList.length;i<len;i++){
               let districtObject = {};
                districtObject.value = tableList.numList[i];
                districtObject.name = tableList.nameList[i];
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
    render() {
        console.log(this.state,'222')
        return (
            <div id="pieEchart" style={{ width: 400, height: 400,margin:'auto' }}></div>
        );
    }
}

