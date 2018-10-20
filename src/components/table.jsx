import React, { Component } from 'react';
import { Table } from 'antd';
const columns = [{
      title: '区域',
      dataIndex: 'series',
    }, {
      title: '企业数量',
      dataIndex: 'num',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.num - b.num,
    }];

// const data = [{
//   key: '1',
//   name: 'John Brown',
//   age: 32,
// }, {
//   key: '2',
//   name: 'Jim Green',
//   age: 42,
// }, {
//   key: '3',
//   name: 'Joe Black',
//   age: 32,
// }, {
//   key: '4',
//   name: 'Jim Red',
//   age: 32,
// }];
//const showFlag = false

export default class staticTable extends Component {
    state={
        tableData:this.props.tableData,
        showFlag:false,
        columns:[],
        data:[]
    } 
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tableData:this.props.tableDate,
    //         showFlag:false,
    //         columns:[],
    //         data:[]
    //   }
    // }

    // componentWillReceiveProps(nextProps){
    //   this.setState({
    //     tableData:nextProps.tableData
    //   },()=>{
    //     let tableList = this.state.tableData;
    //      if(this.state.tableData.length != 0){
    //         let dataArray = [];
    //         console.log(tableList.numList.length)
    //         for (let i = 0, len = tableList.numList.length;i<len;i++){
    //            let districtObject = {};
    //             districtObject.key = i;
    //             districtObject.num = tableList.numList[i];
    //             districtObject.series = tableList.nameList[i];
    //             dataArray.push(districtObject);
    //         }
    //         this.setState({
    //             data:dataArray
    //         })
    //      }
    //   })
    // }
    
    componentDidMount() {
         let tableList = this.state.tableData;
         if(this.state.tableData.length != 0){
            let dataArray = [];
            console.log(tableList.numList.length)
            for (let i = 0, len = tableList.numList.length;i<len;i++){
               let districtObject = {};
                districtObject.key = i;
                districtObject.num = tableList.numList[i];
                districtObject.series = tableList.nameList[i];
                dataArray.push(districtObject);
            }
            this.setState({
                data:dataArray
            })
         }
    }

    render() {
        return (
            <Table bordered columns={columns} dataSource={this.state.data} pagination={this.state.showFlag} style={{margin:'0 10px 20px'}}/>
        );
    }
}

