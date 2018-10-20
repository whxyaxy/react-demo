import React from'react';
import {Link} from 'react-router-dom'
import SelectHtml from '../components/select'
import ColList from '../components/collapse'
import axios from 'axios';

export default class standardList extends React.Component{
  state = {
    list: [],
    list2:[],
    selectValue: ''
  }

  componentDidMount() {
     this.getData()
     this.getData2()
  }

  query(selectValue) {
    this.setState({
      selectValue
    }, () => {
      this.getData();
    })
  }

  getData = () => {
    const { selectValue } = this.state
    axios.get(`/getCompanyListByStandard.do?userId=zhengfu&batchId=W01&standardId=${selectValue}`)
    .then(res => {
      this.setState({
        list: res.data.data
      })
    })
  }

  getData2 = () => {
    axios.get(`/getStandardList.do?userId=zhengfu&groupId=W01`)
    .then(res => {
        this.setState({
          list2:res.data.data
        })
    })
  }

	render(){
    const { list, list2 } = this.state
		return(
      <div className="contentBox">
        <SelectHtml listData={list2} query={(selectValue) => this.query(selectValue)} />
        <ColList listAll={list} />
      </div>
		)
	}
}
