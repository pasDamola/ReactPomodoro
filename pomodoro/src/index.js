import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pomodoro from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Pomodoro />, document.getElementById('root'));
registerServiceWorker();
