import { Provider } from 'react-redux';
import { useEffect } from 'react';
import App from './App';

export const Root = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);
