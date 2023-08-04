import classNames from 'classnames';
import React from 'react';
import useThemeStore from '../../hooks/useTheme';
const ChipButtonGroup = ({ btns }) => {
    const theme = useThemeStore()
    return (
        <div className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
            role="group"> {
                btns?.map((btn, idx) => (
                    <button onClick={btn.onClick} key={idx} type="button" className={classNames(`inline-flex items-center bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:bg-neutral-200 focus:bg-neutral-200 focus:outline-none focus:ring-0 active:bg-neutral-200 gap-2`,
                        { "rounded-l": idx === 0, "rounded-r ": idx === btns.length - 1, }
                    )}>
                        {btn?.icon && <span> {btn?.icon}</span>}
                        <span> {btn.title}</span>
                    </button>
                ))
            }
        </div>
    );
};
export default ChipButtonGroup;