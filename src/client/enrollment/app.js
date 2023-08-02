import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainApp from './pages';
import '@styles/main.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
    defaultOptions: {
        onError: error => {
            console.log(error);
            if (error.response.status === 401) {
                // Handle 401 error here
                window.location.href = '/signout';
            }
        }
    }
});
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const createFullyQualifiedBasename = name => window.SUB_DOMAIN_NAME + name;
const App = () => {
    return (
        <BrowserRouter basename={createFullyQualifiedBasename('/')}>
            <QueryClientProvider client={queryClient}>
                <MainApp />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default App;
