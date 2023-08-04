import React from 'react';
const Card = ({ children, color }) => {
    return (
        <div className={`relative flex flex-row flex-wrap items-center justify-between w-full h-full p-4 m-0 bg-${color}-200 rounded shadow-md cursor-pointer decoration-0 group hover:shadow-xl `}>
            {children}
        </div>
    );
};
export default Card;