import React from 'react';

const Title = ({ title, children }) => {
    return (
        <div className='flex justify-between w-full'>
            <div><span>{title}</span></div>
            <div>{children}</div>
        </div>
    );
};

export default Title;