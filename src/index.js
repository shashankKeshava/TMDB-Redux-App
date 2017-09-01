/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
//import todoApp from "./reducers";
import bmdbApp from "./reducers";
//import App from "./components/Apps";
import App from "./containers/tmdbVisibility";


const logger = createLogger({
    timestamp: true
})

let store = createStore(
    bmdbApp,
    applyMiddleware([logger, thunk]),
    /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);