import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PROJECTS from './assets/projects.js'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();
ReactDOM.render(<App projects={PROJECTS}/>, document.getElementById('root'));
registerServiceWorker();
