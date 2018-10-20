import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
//import Commen from './pages/commen';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><Router/></div>, document.getElementById('root'));
registerServiceWorker();
