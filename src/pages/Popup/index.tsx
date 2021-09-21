import React from 'react';
import { render } from 'react-dom';
import App from './App'

import 'antd/dist/antd.less'
import '@/styles/global.scss'
import './index.css';

render(<App />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
