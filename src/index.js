import ReactDOM from 'react-dom/client';
import { cofigureStore } from './store';
import { Root } from './Root';
import React from 'react';

const store = cofigureStore();

ReactDOM.createRoot(document.getElementById('root')).render(
    <Root store={store} />
);
