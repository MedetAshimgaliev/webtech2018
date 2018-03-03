import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Registration from './Registration';
import Smartphones from './Smartphones';
import Tablets from './Tablets';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




ReactDOM.render(
    <MuiThemeProvider>
        {/* <Tablets /> */}
        {/* <Smartphones /> */}
        <App />
        {/* <Login /> */}
        {/* < Registration /> */}
    </MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
