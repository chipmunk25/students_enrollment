import _ from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import Size from "./pagesize";
import Pagination from "./pagination";
import FuzzySearch from "fuzzy-search";
import useThemeStore from "../../hooks/useTheme";
import { IoSearchOutline } from "react-icons/io5";
import { ChipInputField } from "../../components/forms/controls";

let searcher;

const MobileTable = ({
  columns,
  rows,
  selection,
  rowKey,
  searchTerms,
  setRowKeySelection,
  setRowSelection,
  title,
  defaultSize,
  actionTools,
  description,
  querySearch,
}) => {
  const theme = useThemeStore((state) => state);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultSize || 99999);
  const initialState = rows?.reduce(
    (o, key) => ({ ...o, [key[rowKey]]: false }),
    {}
  );
  const initialCheckState = _.range(
    currentPage,
    Math.ceil(rows?.length / pageSize) + 1,
    1
  )?.reduce((o, key) => ({ ...o, [key]: false }), {});
  const [checkedAll, setCheckedAll] = useState(initialCheckState);

  const [dataSource, setDataSource] = useState(rows);
  useEffect(() => {
    setDataSource(rows);
  }, [rows]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return dataSource.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, dataSource]);

  const [checked, setChecked] = useState(initialState);
  const toggleCheck = (inputName, row) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
    rowSelectionValues(row);
  };

  useEffect(() => {
    setCheckedAll(initialCheckState);
  }, [pageSize]);

  const selectAll = (value) => {
    setCheckedAll((prevState) => {
      const newState = { ...prevState };
      newState[currentPage] = !prevState[currentPage];
      return newState;
    });
    const newState = currentTableData?.reduce(
      (o, key) => ({ ...o, [key[rowKey]]: false }),
      {}
    );
    setChecked((prevState) => {
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return { ...prevState, ...newState };
    });

    currentTableData.map((row) => {
      rowSelectionValues(row, value);
    });
  };
  const rowSelectionValues = (row, all) => {
    setRowKeySelection((prevState) => {
      const newState = [...prevState];
      if (all) {
        _.remove(newState, (item) => item === row[rowKey]);
      }
      if (!_.includes(newState, row[rowKey])) {
        newState.push(row[rowKey]);
      } else {
        _.remove(newState, (item) => item === row[rowKey]);
      }
      return newState;
    });
    setRowSelection((prevState) => {
      const newState = [...prevState];
      if (all) {
        _.remove(newState, (item) => item[rowKey] === row[rowKey]);
      }
      if (!_.includes(newState, row)) {
        newState.push(row);
      } else {
        _.remove(newState, (item) => item[rowKey] === row[rowKey]);
      }
      return newState;
    });
  };

  searcher = new FuzzySearch(rows, searchTerms, {
    caseSensitive: false,
  });
  useEffect(() => {
    if (querySearch) {
      setDataSource(searcher.search(querySearch));
    }
  }, [querySearch, rows]);
  const OnSearch = (e) => setDataSource(searcher.search(e.target.value));

  return (
    <div className="w-full">
      <div className="container w-full px-1 mx-auto ">
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
        {description && <div>{description}</div>}
        <div className="">
          <table className="w-full">
            {/* <thead className={` bg-${theme.color}-${theme.weight}`}>
              <tr className="rounded-md drop-shadow-lg">
                {columns?.map((col, columnIndex) => (
                  <React.Fragment key={columnIndex}>
                    <th
                      className={`py-2 w-full flex-1 whitespace-nowrap bg-${theme.color}-${theme.weight}  sticky top-0  z-[99999999999]`}
                      scope="col"
                    >
                      <span className={`text-white w-full text-${theme.fontSize} px-[15px] py-2  font-normal  z-[99999999999]`}>
                        {col?.title}
                      </span>
                    </th>
                  </React.Fragment>
                ))}
              </tr>
            </thead> */}
            <tbody className="w-full bg-red-100">
              {currentTableData?.map((row, rowIndex) => (
                <tr
                  className="grid grid-cols-3 shadow-md odd:bg-white even:bg-slate-50"
                  key={rowIndex}
                >
                  {columns?.map((col, columnIndex) => (
                    <React.Fragment key={`table-row-cell-${columnIndex}`}>
                      <td className={`col-span-1 text-left  text-white bg-${theme.color}-${theme.weight} `}>
                        {col?.title}
                      </td>
                      <td className={`text-[#241f1f] text-[14px] text-left font-normal align-middle py-1 px-2 col-span-2`}>
                        {col?.render
                          ? col.render(col, row)
                          : _.get(row, col.key)}
                      </td>
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
    </div>
  );
};

export default MobileTable;
