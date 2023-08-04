import _ from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';

import FuzzySearch from 'fuzzy-search';
import { ChipInputField } from '../../components/forms/controls';
import { IoSearchOutline } from 'react-icons/io5';
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
        <div className="w-full ">
            {title && (
                <div className="flex flex-col items-center justify-between w-full gap-4 px-5 py-3 z-1 md:flex-row">
                    <div className="flex items-center w-full gap-3">
                        <span className="text-2xl text-semibold">{title}</span>
                        {actionTools && actionTools}
                    </div>
                    <div className="w-72">
                        <ChipInputField name="search" icon={<IoSearchOutline />} onChange={OnSearch} autoFocus label="Search" />
                    </div>

                </div>
            )}

            {dataSource?.map((row, rowIndex) => (
                <div className="flex flex-row flex-no-wrap w-full mb-4" key={rowIndex}>
                    <div className="flex flex-col bg-gray-500">
                        {columns?.map((col, columnIndex) => (
                            <span
                                key={`table-row-cell-${columnIndex}`}
                                className="p-1 font-thin text-left text-white capitalize">
                                {col?.title}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col flex-1 border hover:bg-gray-100 border-grey-light">
                        {columns?.map((col, columnIndex) => (
                            <span
                                key={`table-row-cell-${columnIndex}`}
                                className="w-full p-1 border-b border-grey-light last:border-b-0">
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
