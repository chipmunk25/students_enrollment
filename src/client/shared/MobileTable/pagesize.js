import React from 'react';

const Size = ({ sizes, pageSize, setPageSize }) => {
    return (
        <div className="px-3 py-2">
            <div className="relative inline-block dropdown">
                <button className="inline-flex items-center px-4 py-1 font-semibold text-gray-700 bg-gray-300 rounded">
                    <span className="mr-2">{pageSize}</span>
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                    </svg>
                </button>
                <ul className="absolute z-50 hidden pt-1 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dropdown-menu">
                    {sizes?.map((item, idx) => (
                        <li key={idx} className="" onClick={() => setPageSize(item)}>
                            <span className={`text-${theme.fontSize} hover:bg-gray-100 text-gray-700 block px-5 py-1`}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Size;
