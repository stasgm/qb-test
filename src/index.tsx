import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';

const config = require('../configs/config.json');

ReactDOM.render(<App />, document.getElementById(config.webpack.appMountNodeId) as HTMLElement);
