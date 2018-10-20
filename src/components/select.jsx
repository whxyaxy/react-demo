import React from'react';
import { Button,Select} from 'antd'
import axios from 'axios';
import StandardList from '../pages/list1'

const Option = Select.Option;
export default class SelectBox extends React.Component{
  state = {
    standardList: [],
    selectValue: ''
  }

  handleChange = selectValue => {
    this.setState({
      selectValue
    })
  }

	render(){
    const { selectValue } = this.state
    let Options = []
    this.props.listData.map(item => {
      Options.push(<Option key={item.standardId}>{item.standardName}</Option>)
    })
		return(
      <div style={{ display: 'flex',width: '100%',justifyContent:'space-between'}}>
          <Select
            mode="multiple"
            style={{ width: 'calc(80% - 20px)' }}
            placeholder="输入标准名/选择标准"
            onChange={this.handleChange}
          >
            {Options}
          </Select>
            <Button type="primary" style={{ width: '20%' }} onClick={() => this.props.query(selectValue)}>搜索</Button>
        </div>
		)
	}
}

