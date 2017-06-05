
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers'
const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>

    ,document.querySelector('.container')
);