import React, { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from "../../shared/Loader"
import lazyWithRetry from '@utils/lazyWithRetry';
const Signin = lazyWithRetry(() => import('./Signin'));
const Layout = lazyWithRetry(() => import('../../components/Layout'));
// const Dashboard = lazyWithRetry(() => import('./Dashboard'));
const MainApp = () => {
    return (
        <div>
            <Suspense
                fallback={
                    <div className="flex flex-auto flex-col h-[100vh]">
                        <Loader loading={true} />
                    </div>
                }
            >
                <Routes>
                    <Route exact path="/" element={<Layout />}>
                        {/* <Route index element={<Dashboard />} /> */}
                        {/* <Route path='dashboard' element={<Dashboard />} /> */}
                    </Route>
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </Suspense>
        </div>
    );
};
export default memo(MainApp);