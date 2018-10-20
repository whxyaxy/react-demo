import React, { Component } from 'react';
import ComponentHeader from '../components/Header'
import ComponentFooter from '../components/Footer'
export default class Home extends Component {
    render() {
        return (
        <div>
          <ComponentHeader></ComponentHeader>
          <ComponentFooter></ComponentFooter>
        </div>
        );
    }
}

