import React from 'react';
import spinner from '@assets/gif/loader.gif';

const Loader = () => {
    return (
        <div className="">
            <div
                style={{
                    backgroundImage: `url(${spinner})`
                }}
                className="fixed top-1/2 left-1/2  z-[100000001] h-32 w-32 -mt-16 -ml-16 leading-8 text-center text-3xl text-[#303b83] rounded-2xl opacity-60 shadow "></div>
            <div className="fixed top-0 left-0 h-full w-full z-[100000000]"></div>
        </div>
    );
};

export default Loader;
