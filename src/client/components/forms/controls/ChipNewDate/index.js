import ChipErr from "@components/ChipErr";
import classNames from "classnames";
import { forwardRef } from "react";
import useThemeStore from "@hooks/useTheme";
import React from "react"

const ChipDateField = forwardRef(
    (
        {
            errorMessage,
            required,
            fluid,
            allowClear,
            clearHandler,
            id,
            label,
            icon,
            ...rest
        },
        ref
    ) => {
        const theme = useThemeStore((state) => state);
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
                    <input
                        ref={ref}
                        {...rest}
                        id={rest.name}
                        type="date"
                        aria-describedby={`outline_err_${rest.name}`}
                        className={classNames(
                            `block px-2.5 pb-2.5 w-full shadow text-sm  text-zinc-950  rounded-md border ${errorMessage
                                ? "border-error focus:border-error"
                                : `border-${theme.color}-300 focus:border-${theme.color}-300`
                            } appearance-none  focus:outline-none focus:ring-0   peer`,
                            {
                                "bg-gray-100 cursor-not-allowed": rest.readOnly,
                                "bg-white": !rest.readOnly,
                            }
                        )}

                    />

                    {!rest.readOnly && (
                        <label
                            htmlFor={rest.name}
                            className="absolute text-sm text-zinc-950 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                            {label} {required && <span className="text-error">*</span>}
                        </label>
                    )}
                </div>
                {errorMessage && (
                    <ChipErr msg={errorMessage} id={`outline_err_${rest.name}`} />
                )}
            </div>
        );
    }
);
export default ChipDateField;
