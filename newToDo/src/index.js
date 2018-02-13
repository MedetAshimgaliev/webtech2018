import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Contact from './Contact';
import Start from './Start';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Start />
        <hr/>
        {/* <App />
        
        <Contact /> */}
    </div>, 
    document.getElementById('root'));

registerServiceWorker();
