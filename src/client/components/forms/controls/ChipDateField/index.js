import ButtonInput from "./button";
import Calendar from "./calendar";
import DatePicker from "react-datepicker";
import classNames from "classnames";
import { useEffect, useState } from "react";
import useThemeStore from "@hooks/useTheme";
import React from "react"
const ChipDateField = ({
  errorMessage,
  required,
  fluid,
  allowClear,
  label,
  onChange,
  name,
}) => {
  const theme = useThemeStore((state) => state);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setMonth(startDate.getMonth() + 1)
  );
  useEffect(() => {
    if (startDate > endDate) setStartDate(endDate);
    // eslint-disable-next-line
  }, [endDate]);
  useEffect(() => {
    if (startDate > endDate) setEndDate(startDate);
    // eslint-disable-next-line
  }, [startDate]);

  useEffect(() => {
    onChange([startDate, endDate])
  }, [startDate, endDate])
  const clearHandler = () => {
    setStartDate(new Date())
    setEndDate(new Date().setMonth(startDate.getMonth() + 1))
  }
  return (
    <div
      className={classNames("relative mx-auto", {
        "max-w-sm": !fluid && theme.size === "small",
        "max-w-md": !fluid && theme.size === "medium",
        "max-w-lg": !fluid && theme.size === "large",
        "max-w-full": fluid,
      })}
    >
      <div className="relative group">
        <DatePicker
          id={name}
          name={name}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          nextMonthButtonLabel=">"
          previousMonthButtonLabel="<"
          popperClassName="react-datepicker-left"
          customInput={
            <ButtonInput
              theme={theme}
              allowClear={allowClear}
              clearHandler={clearHandler}
              errorMessage={errorMessage}
              label={label}
              required={required}
              name={name}
            />
          }
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <Calendar
              date={date}
              prevMonthButtonDisabled={prevMonthButtonDisabled}
              decreaseMonth={decreaseMonth}
              nextMonthButtonDisabled={nextMonthButtonDisabled}
              increaseMonth={increaseMonth}
            />
          )}
        />
      </div>
    </div>
  );
};
export default ChipDateField;
