import _ from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';

import FuzzySearch from 'fuzzy-search';
let searcher;
const MobileTable = ({ columns, rows, searchTerms, title, actionTools, querySearch }) => {
    const [dataSource, setDataSource] = useState(rows);
    useEffect(() => {
        setDataSource(rows);
    }, [rows]);
    searcher = new FuzzySearch(rows, searchTerms, {
        caseSensitive: false
    });
    useEffect(() => {
        if (querySearch) {
            setDataSource(searcher.search(querySearch));
        }
    }, [querySearch, rows]);
    const OnSearch = e => setDataSource(searcher.search(e.target.value));
    return (
        <div className=" w-full  ">
            {title && (
                <div className="flex flex-wrap items-center px-1 py-3 z-1 w-full">
                    <div className="flex  items-center gap-3 w-full">
                        <span className="text-2xl text-semibold">{title}</span>
                        {actionTools && actionTools}
                    </div>

                    <div className="bg-white border h-9 w-full flex items-center pointer-events-auto ">
                        <svg width="24" height="24" fill="none" aria-hidden="true" className=" flex-none rotate-90">
                            <path
                                d="m19 19-3.5-3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"></path>
                            <circle
                                cx="11"
                                cy="11"
                                r="6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"></circle>
                        </svg>
                        <input
                            onChange={OnSearch}
                            type="text"
                            autoFocus
                            className="outline-none w-full h-full  border-0 border-transparent focus:border-transparent focus:ring-0"
                            placeholder="Search"
                        />
                    </div>
                </div>
            )}

            {dataSource?.map((row, rowIndex) => (
                <div className="w-full flex flex-row flex-no-wrap mb-2" key={rowIndex}>
                    <div className="bg-darkGray flex flex-col">
                        {columns?.map((col, columnIndex) => (
                            <span
                                key={`table-row-cell-${columnIndex}`}
                                className="text-left font-thin text-white capitalize p-1">
                                {col?.title}
                            </span>
                        ))}
                    </div>
                    <div className="flex-1 flex flex-col  hover:bg-gray-100 border border-grey-light">
                        {columns?.map((col, columnIndex) => (
                            <span
                                key={`table-row-cell-${columnIndex}`}
                                className="p-1 border-grey-light border-b last:border-b-0  w-full">
                                {col?.render ? col.render(col, row) : _.get(row, col.key)}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MobileTable;
