import React from 'react';
import isBg from "../../../assets/svg/bg.svg"
// import logo from "../../../assets/svg/logo.svg"
import LoginForm from './login';
const Signin = () => {
    return (
        <div style={{
            backgroundImage: `url(${isBg})`,
            height: "100vh",
            width: "100%"
        }} className="">
            {/* <div className='w-48'>
                <img src={logo} alt="" />
            </div> */}
            <div className='flex items-center justify-center'>
                <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
                    <span className='text-2xl font-bold text-black'>Login</span>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};
export default Signin;