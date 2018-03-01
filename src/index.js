import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import './resume.css'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Routing/>, document.getElementById('root'));
registerServiceWorker();


