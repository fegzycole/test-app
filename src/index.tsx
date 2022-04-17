import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import BoilerplateTheme from './theme';
import App from './containers/App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={BoilerplateTheme}>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
