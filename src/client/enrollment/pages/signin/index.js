import React from 'react';
import isBg from "../../../assets/svg/bg.svg"
import LoginForm from './login';
const Signin = () => {
    return (
        <div style={{
            backgroundImage: `url(${isBg})`,
            height: "100vh",
            width: "100%"
        }} className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
                <div className='mb-6'>
                    <span className='text-2xl font-bold text-black'>Login</span>
                </div>
                <LoginForm />
            </div>

        </div>
    );
};
export default Signin;