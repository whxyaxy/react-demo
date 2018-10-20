import React from'react';
import { List, Avatar,Button,message, Skeleton,Icon } from 'antd';
import axios from 'axios';

let limit = 4;
let page = 1;
const count = 4;
 export default class newsList extends React.Component{
   state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
    loadingText: '点击加载更多'
  }

  componentDidMount() {
    this.getData((res)=>{
      this.setState({
          initLoading: false,
          data: res.data.rows,
          list: res.data.rows,
          maxLimit: res.data.total,
          loading: false
      })
    });
  }

  getData = (callback) => {
    axios.get(`/getCompanyList.do?userId=zhengfu&provinceId=&cityId=&districtId=&industry=&companyName=&limit=`+limit+`&page=`+page)
      .then(res => {
        callback(res)
    })
  }

onLoadMore = () => {
    if(page*limit < this.state.maxLimit){
      ++page
      this.setState({
          loading: true,
          list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData((res) => {
          const data = this.state.data.concat(res.data.rows);
          this.setState({
            data,
            list: data,
            loading: false,
          });
        });
    }else{
       this.setState({
          loadingText: '数据已经加载完毕',
        });
       message.info('数据已经加载完毕');
    }
  }

  render(){
    const { initLoading, loading, list } = this.state;
    const loadMore = !initLoading && !loading ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        <Button type="primary" onClick={this.onLoadMore}>
            {this.state.loadingText}
        </Button>
      </div>
    ) :null;

    return(
      <div className="contentBox" style={{background:'#fff'}}><List style={{padding:'0 10px 10px',marginBottom:'60px'}}
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item,index) => (
          <List.Item style={{justifyContent:'space-between',alignItems:'center'}}>
            <Skeleton loading={item.loading} avatar active>
            <div className="itemNumber">{index+1}</div>
            <div>
                <div className="itemTitle">{item.companyName}*{item.industry}</div>
                <div>{item.province}{item.city}{item.district}</div>
                <div className="classInfo">标准实施情况：{item.finishStandard}/{item.totalStandard}</div>
                <div className="classInfo">评估项实施情况：{item.finishEvaluation}/{item.totalEvaluation}</div>
            </div>
            </Skeleton>
          </List.Item>
        )}
      /></div>
    );
  }
}