/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/Apps'

let store = createStore(todoApp)

render(
    <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
)