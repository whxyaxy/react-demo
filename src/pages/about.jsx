import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, withRouter,NavLink } from 'react-router-dom';
import { Breadcrumb, Alert,Icon , Steps, Button, message,Timeline,List,Card} from 'antd';
import ReactDOM from 'react-dom';
import { Map, Markers } from 'react-amap';
// import Marker from 'react-amap/lib/marker';
const mapKey = 'c9bda5f5516adab1ccfd3520e01ebc84'

const Step = Steps.Step;
const data = [
    {
      title: '微气象数据预测太阳能辐射',
      url:require('../images/11.jpg')
    },
    {
      title: '多元回归算法确定太阳日照率',
      url:require('../images/22.jpg')
    },
    {
      title: '农业温室大棚数据控制系统',
      url:require('../images/33.jpg')
    },
    {
      title: '农业温室大棚数据采集终端',
      url:require('../images/44.jpg')
    },
  ];
const { Meta } = Card;
const Address = () => (
  <div className="aboutBox">
      <h2 className="title">公司联系地址</h2>
      <Steps progressDot size="small" current={2}>
        <Step title="1" description="在光谷乘坐2号线" />
        <Step title="2" description="坐5站到中南路换乘4号线" />
        <Step title="3" description="坐6站到达目的地" />
      </Steps>
      <div style={{width:'80%',height:'400px',margin:'20px auto 10px'}}>
          <Map amapkey={mapKey}  position={{longitude: 121, latitude: 34 }} viewMode="3D" plugins={['ToolBar']} zoom={12}/>
      </div>
  </div>
);

 
const Home1 = () => (
  <div className="aboutBox">
     <h2 className="title">公司联系方式</h2>
     <Steps direction="vertical" style={{marginLeft:'20px'}}>
      <Step status="finish" title="座机" description="1134567899" icon={<Icon type="phone" theme="outlined" />} />
      <Step status="finish" title="传真号" description="14568" icon={<Icon type="api" theme="outlined" />} />
      <Step status="finish" title="邮箱" description="1233456@qq.com" icon={<Icon type="mail" theme="outlined" />} />
      <Step status="process" title="博客" description="http://localhost:3002/About#/home" icon={<Icon type="loading" />} />
    </Steps>
  </div>
)

const Home2 = () => (
  <div className="demo-nav">
    <NavLink to="/home" activeClassName="active" style={{backgroundColor: '#40cfd4'}}><div><Icon className="aboutIcon" type="phone" theme="outlined" />联系方式</div></NavLink>
    <NavLink to="/address" activeClassName="active" style={{backgroundColor: '#86e6b4'}}><div><Icon className="aboutIcon" type="global" theme="outlined" />联系地址</div></NavLink>
    <NavLink to="/product" activeClassName="active" style={{backgroundColor: '#40d4be'}}><div><Icon className="aboutIcon" type="file-done" theme="outlined" />公司项目</div></NavLink>
    <NavLink to="/sucess" activeClassName="active" style={{backgroundColor: '#40d44a'}}><div><Icon className="aboutIcon" type="robot" theme="outlined" />公司成就</div></NavLink>
  </div>
)

const Product = () => (
  <div className="aboutBox">
      <h2 className="title">公司产品简介</h2>
      <div style={{marginTop:'20px'}}>
          <Timeline mode="alternate">
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} style={{fontSize:'18px',fontWeight:'bold'}}>第一事业部</Timeline.Item>
          <Timeline.Item color="green">农业大数据科技服务精准化应用平台</Timeline.Item>
          <Timeline.Item color="green">人才、项目申报评审管理系统</Timeline.Item>
          <Timeline.Item color="green">景区团队计调与运营统计系统</Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} style={{fontSize:'18px',fontWeight:'bold'}}>第二事业部</Timeline.Item>
          <Timeline.Item color="red">企业项目化管理信息平台</Timeline.Item>
          <Timeline.Item color="red">仓库管理系统</Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} style={{fontSize:'18px',fontWeight:'bold'}}>第三事业部</Timeline.Item>
          <Timeline.Item >员工疗养与差旅平台</Timeline.Item>
          <Timeline.Item >B2B、B2C旅游电商平台</Timeline.Item>
          <Timeline.Item >电商分销系统</Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} style={{fontSize:'18px',fontWeight:'bold'}}>第四事业部</Timeline.Item>
          <Timeline.Item color="red">消化内科病例管理分析系统</Timeline.Item>
        </Timeline>
      </div>
  </div>
);

const Sucess = () => (
  <div className="aboutBox">
     <h2 className="title">公司成就</h2>
     <div className="sucessPart middlePart" style={{margin:'10px 0',background:'#fff',padding:'10px 10px 0'}}>
        <List
        style={{display:'inline-flex',justifyContent:'space-around',width:'100%'}}
            dataSource={data}
            renderItem={item => (
              <List.Item style={{width:'calc(25% - 20px)'}}>
                <Card
                    hoverable
                    style={{fontSize:'40px',width:'100%'}}
                    cover={<img alt="证书照片" src="" src={item.url}  style={{width:'100%'}}/>}
                  >
                    <Meta
                      title={item.title}
                    />
                  </Card>
              </List.Item>
            )}
          />
      </div>
  </div>
);


const Home = withRouter((props) => {
const { location } = props;
  return (
    <div className="demo">
      <Switch>
       <Route render={() => 
          <div>
            <Route path="/" component={Home2} />
            <Route path="/home" component={Home1} />
            <Route path="/address" component={Address} />
            <Route path="/product" component={Product} />
            <Route path="/sucess" component={Sucess} />
          </div>
       } />
      </Switch>
    </div>
  );
});

export default class About extends Component {
    render() {
        return (
        <div className="contentBox" id="about" style={{background:'#fff',padding:'20px 5px'}}>
           <Router>
            <Home />
          </Router>
        </div>
        );
    }
}

