import React, { Component } from 'react';
import logo from './logo.svg';
import { link } from 'react-router'
import './App.css';
import ComponentHeader from './components/Header'
        // const list=[{
     //      "title": "近日暴雨不断，请大家加强防范",
     //      "content": "近日暴雨不断，请大家加强防范近日暴雨不断，请大家加强防范近日暴雨不断，请大家加强防范",
     //      "imageUrl": "/images/1.png",
     //      "see": "10",
     //      "applause": "2",
     //      "id":1
     //    }, {
     //      "title": "近日暴雨不断，请大家加强防范",
     //      "content": "近日暴雨不断，请大家加强防范近日暴雨不断，请大家加强防范近日暴雨不断，请大家加强防范",
     //      "imageUrl": "/images/1.png",
     //      "see": "10",
     //      "applause": "2",
     //      "id":2
     //    }, {
     //      "title": "近日暴雨不断，请大家加强防范",
     //      "content": "近日暴雨不断，请大家加强防范近日暴雨不断，请大家加强防范近日暴雨不断，请大家加强防范",
     //      "imageUrl": "/images/1.png",
     //      "see": "10",
     //      "applause": "2",
     //      "id":3
     //    }, {
     //      "title": "近日暴雨不断，请大家加强防范",
     //      "content": "近日暴雨不断，请大家加强防范近日暴雨不断，请大家加强防范近日暴雨不断，请大家加强防范",
     //      "imageUrl": "/images/1.png",
     //      "see": "10",
     //      "applause": "2",
     //      "id":4
     //    }];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        let userName = "rectName";
        let boolInput = true;
        let html = 'react \u0020 vue'
        return (
            <div className="App">
      <ComponentHeader name = "我们的联系方式" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p>初次学习接触</p>
        </header>
        <p>现在是{this.state.date.toLocaleTimeString()}</p>
        <p className="App-intro">
         {userName == '' ? '用户还没有登录' : '用户名：' + userName}
        </p>
        <p><input type = 'button' value = '默认按钮'  disabled={boolInput} /></p>
        <p>{html}</p>
      </div>
        );
    }
}
{
    /* 注释需要写在花括号中
    class Clock extends React.component{
     render(){
       return(
         <div>
           <h1>Hello,word!</h1>
           <h2>{this.props.date.toLocaleTimeString()}</h2>
         </div>
       )
     }

        const listItem = list.map((item,index)=>
               <li key={index}><div style={...topTitle}>{item.title}</div><div style={...info}>{item.content}</div><div><span>{item.see}</span><span>{item.applause}</span></div></li>
            )
}


function tick(){
     ReactDOM.reader(
     <Clock date={new Date()}/>,

     );
}*/
}

export default App;
