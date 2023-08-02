import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import React, { forwardRef, useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import classNames from "classnames";
import { format } from "date-fns";
import useThemeStore from "../../hooks/useTheme";

const ChipDate = ({ fluid }) => {
  const theme = useThemeStore((state) => state);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setMonth(startDate.getMonth() + 1)
  );
  const ButtonInput = forwardRef(({ value, onClick }, ref) => (
    <button
      onClick={onClick}
      ref={ref}
      type="button"
      className={`inline-flex justify-start w-full px-3 py-2 text-sm bg-white border border-${theme.color}-300 rounded-md shadow outline-none appearance-none focus:border focus:border-${theme.color}-300 focus:ring-0 placeholder:text-zinc-500 text-zinc-950`}
    >
      {format(new Date(value), "dd MMMM yyyy")}
    </button>
  ));
  useEffect(() => {
    if (startDate > endDate) setStartDate(endDate);
    // eslint-disable-next-line
  }, [endDate]);
  useEffect(() => {
    if (startDate > endDate) setEndDate(startDate);
    // eslint-disable-next-line
  }, [startDate]);

  //   console.log(startDate, endDate);
  return (
    <React.Fragment>
      <div
        className={classNames("relative mx-auto", {
          "max-w-sm": !fluid && theme.size === "small",
          "max-w-md": !fluid && theme.size === "medium",
          "max-w-lg": !fluid && theme.size === "large",
          "max-w-full": fluid,
        })}
      >
        <DatePicker
          selected={startDate}
          // monthsShown={2}
          onChange={(date) => setStartDate(date)}
          nextMonthButtonLabel=">"
          previousMonthButtonLabel="<"
          popperClassName="react-datepicker-left"
          customInput={<ButtonInput />}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-lg text-gray-700">
                {format(date, "MMMM yyyy")}
              </span>

              <div className="space-x-2">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  type="button"
                  className={classNames(
                    "inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500",
                    {
                      "cursor-not-allowed opacity-50": prevMonthButtonDisabled,
                    }
                  )}
                >
                  <IoChevronBackSharp className="w-5 h-5 text-gray-600" />
                </button>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  type="button"
                  className={classNames(
                    "inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500",
                    {
                      "cursor-not-allowed opacity-50": nextMonthButtonDisabled,
                    }
                  )}
                >
                  <IoChevronForwardSharp className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          )}
        />
      </div>
    </React.Fragment>
  );
};

export default ChipDate;
