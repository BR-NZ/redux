import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import App from './components/App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)