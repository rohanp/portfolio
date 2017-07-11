import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PROJECTS from './projects.js'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const url = new URL(window.location.href);
const category = url.searchParams.get("category");

injectTapEventPlugin();
ReactDOM.render(<App projects={PROJECTS} category={category}/>, document.getElementById('root'));
registerServiceWorker();
