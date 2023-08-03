import React from 'react';

const Size = ({ sizes, pageSize, setPageSize }) => {
    return (
        <div className="px-3 py-2">
            <div className="dropdown inline-block relative">
                <button className="bg-gray-300 text-gray-700 font-semibold py-1 px-4 rounded inline-flex items-center">
                    <span className="mr-2">{pageSize}</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                    </svg>
                </button>
                <ul className="hidden absolute dropdown-menu bg-white text-base z-50 list-none divide-y divide-gray-100  rounded shadow pt-1">
                    {sizes?.map((item, idx) => (
                        <li key={idx} className="" onClick={() => setPageSize(item)}>
                            <span className="text-sm hover:bg-gray-100 text-gray-700 block px-5 py-1">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Size;
