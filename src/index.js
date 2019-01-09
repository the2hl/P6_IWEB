import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import ReduxProvider from './components/ReduxProvider.jsx';

ReactDOM.render(<ReduxProvider/>, document.getElementById('root'));

document.body.style='background:red;';
