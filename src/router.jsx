import React from 'react'
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import HomePage from './pages/home';
import ZoneCompany from './pages/zoneCompany';
import Echart from './pages/echart';
import List from './pages/list';
import List1 from './pages/list1';
import Detail from './pages/detail';
import About from './pages/about';
import {BrowserRouter,Route} from 'react-router-dom';
 export default class router extends React.Component{
  render() {
		return(
               <BrowserRouter>
                 <div>
                      <HeaderComponent />
                      <Route exact path="/" component={HomePage}></Route>
                      <Route path="/ZoneCompany" component={ZoneCompany}></Route>
                      <Route path="/Echart" component={Echart}></Route>
                      <Route path="/List1" component={List1}></Route>
                      <Route path="/Detail/:title/:content" component={Detail}></Route>
                      <Route path="/About" component={About}></Route>
                      <FooterComponent/>
                 </div>
               </BrowserRouter>
		)
	}
}

