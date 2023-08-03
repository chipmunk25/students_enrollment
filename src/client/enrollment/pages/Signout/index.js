import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import bg from '@assets/svg/bg.svg';
import { useLogoutQuery } from '@appQueryHooks/hooks/users/useQuery';
import useAuthStore from '../../../hooks/auth';


const SignOut = () => {
    const { logout } = useAuthStore()
    const { data } = useLogoutQuery();
    useEffect(() => {
        logout()
    }, [])
    return (
        <div
            className="flex w-full h-screen"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${bg})`
            }}>
            <div className="w-11/12 m-auto rounded-md md:w-1/3 h-2/3 bg-slate-100 drop-shadow-2xl">
                <div className="flex items-center justify-center">
                    <div className="p-5 text-6xl w-28 h-28 leading-[114px] flex justify-center items-center ml-5 my-auto mr-7 rounded-[60px] border border-white bg-[#d5d5d5] text-center text-white ">
                        <i className="fa fa-sign-out"></i>
                    </div>
                </div>
                <div className="flex items-center justify-center py-5">
                    <span className="text-5xl font-semibold text-center">You Have Been Logged Out</span>
                </div>
                <div className="flex items-center justify-center py-5">
                    <span className="text-2xl font-semibold text-center">Thank you for using our website</span>
                </div>
                <div className="flex items-center justify-center py-5">
                    <p className="text-lg text-center">
                        Please{' '}
                        <a href="/signin" className="text-green-500 hover:underline">
                            click here
                        </a>{' '}
                        to login back to our site
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignOut;
