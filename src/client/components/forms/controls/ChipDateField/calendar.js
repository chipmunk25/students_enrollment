import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import classNames from "classnames";
import { format } from "date-fns";
import React from "react"
const Calendar = ({
  prevMonthButtonDisabled,
  date,
  decreaseMonth,
  increaseMonth,
  nextMonthButtonDisabled,
}) => {
  return (
    <div className="z-50 flex items-center justify-between px-2 py-2">
      <span className="text-lg text-gray-700">{format(date, "MMMM yyyy")}</span>
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
  );
};
export default Calendar;
