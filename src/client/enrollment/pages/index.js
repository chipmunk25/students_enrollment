import React, { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from "../../shared/Loader"
import lazyWithRetry from '@utils/lazyWithRetry';
import useCommonStore from '../../hooks/useCommon';
import Modal from '../../components/ChipModal';
const Signin = lazyWithRetry(() => import('./Signin'));
const SignOut = lazyWithRetry(() => import('./Signout'));
const Courses = lazyWithRetry(() => import('./courses'));
const Layout = lazyWithRetry(() => import('../../components/Layout'));
// const Dashboard = lazyWithRetry(() => import('./Dashboard'));
const MainApp = () => {
    const common = useCommonStore((state) => state);
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
                        <Route path='courses' element={<Courses />} />
                    </Route>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signout" element={<SignOut />} />
                </Routes>
                {common.modal.show && (
                    <Modal size={common.modal?.size} title={common.modal?.title}>
                        {common.modal.content}
                    </Modal>
                )}
            </Suspense>
        </div>
    );
};
export default memo(MainApp);