import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'production') {
    require('./index.css');
} else {
    require('./index.less');
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// CRA hot-reload
if (module.hot) {
	module.hot.accept()
}